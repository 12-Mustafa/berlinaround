"use server";

import { Resend } from "resend";

// Simple server action result type.
// This is returned back to the form UI after submission.
export type ContactFormState = {
  success: boolean;
  message: string;
};

// Create the Resend instance once using the server-side API key.
const resend = new Resend(process.env.RESEND_API_KEY);

// Helper to send a demo business notification email after a valid submission.
async function sendBusinessNotificationEmail({
  name,
  email,
  service,
  message,
  locale,
  page,
}: {
  name: string;
  email: string;
  service: string;
  message: string;
  locale: string;
  page: string;
}) {
  const { data, error } = await resend.emails.send({
    from: "Berlinaround Demo <onboarding@resend.dev>",
    to: ["itsyourmd12@gmail.com"],
    subject: `New Berlinaround contact form submission - ${service}`,
    text: [
      "A new contact form submission was received.",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Service: ${service}`,
      `Locale: ${locale}`,
      `Page: ${page}`,
      "",
      "Message:",
      message,
    ].join("\n"),
  });

  if (error) {
    throw new Error(error.message || "Resend email send failed.");
  }

  return data;
}

// Shared helper for posting JSON payloads to the Google Sheets Apps Script webhook.
async function postToGoogleSheetsWebhook(payload: Record<string, string>) {
  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

  // Safety check so we fail clearly if the environment variable is missing.
  if (!webhookUrl) {
    throw new Error("GOOGLE_SHEETS_WEBHOOK_URL is not configured.");
  }

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
    cache: "no-store",
  });

  const result = await response.json();

  if (!response.ok || !result.success) {
    throw new Error(result.message || "Google Sheets webhook request failed.");
  }

  return result;
}
// Server action for handling contact form submissions.
// For now, it validates the fields and logs the submission.
// Later we can replace the log step with email sending or database storage.
export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  // Read and normalize submitted values.
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const service = String(formData.get("service") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const locale = String(formData.get("locale") ?? "").trim();
  const page = String(formData.get("page") ?? "").trim();

  // Basic validation.
  if (!name || !email || !service || !message) {
    return {
      success: false,
      message: "Please fill in all required fields.",
    };
  }

  // Very basic email validation.
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    return {
      success: false,
      message: "Please enter a valid email address.",
    };
  }

  // Create a unique submission id for tracking this request in Google Sheets.
  const submissionId = crypto.randomUUID();
  // Create a submission timestamp once so the same value is reused everywhere.
  const submittedAt = new Date().toISOString();

  await postToGoogleSheetsWebhook({
    action: "append",
    submission_id: submissionId,
    submitted_at: submittedAt,
    locale,
    page,
    name,
    email,
    service,
    message,
    status: "new",
    notes: "",
  });

  // Temporary backend behavior:
  // Log the submission on the server so we know the action is working.
  // Try sending the demo business notification email.
  try {
    await sendBusinessNotificationEmail({
      name,
      email,
      service,
      message,
      locale,
      page,
    });

    await postToGoogleSheetsWebhook({
      action: "update_status",
      submission_id: submissionId,
      status: "emailed",
      notes: "Business email sent",
    });

    return {
      success: true,
      message: "Your request was submitted successfully.",
    };
  } catch (error) {
    console.error("Failed to send contact form email:", error);

    await postToGoogleSheetsWebhook({
      action: "update_status",
      submission_id: submissionId,
      status: "email_failed",
      notes: "Business email could not be sent",
    });

    return {
      success: false,
      message: "Your request could not be sent. Please try again.",
    };
  }
}
