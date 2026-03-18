"use client";

import { useActionState } from "react";
import {
  submitContactForm,
  type ContactFormState,
} from "@/app/[locale]/contact/actions";
import type { Locale } from "@/lib/i18n";

// Props for rendering localized labels in the form.
type ContactFormProps = {
  locale: Locale;
  page: string;
  labels: {
    formTag: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    serviceLabel: string;
    servicePlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submit: string;
    successMessage?: string;
    errorMessage?: string;
  };
  serviceOptions: string[];
};

// Initial state before any submission.
const initialState: ContactFormState = {
  success: false,
  message: "",
};

export default function ContactForm({
  locale,
  page,
  labels,
  serviceOptions,
}: ContactFormProps) {
  // Connect the form to the server action.
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialState,
  );

  return (
    <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm md:p-8">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
        {labels.formTag}
      </p>

      <form action={formAction} className="mt-6 space-y-5">
        <input type="hidden" name="locale" value={locale} />
        <input type="hidden" name="page" value={page} />
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-neutral-800"
          >
            {labels.nameLabel}
          </label>

          <input
            id="name"
            name="name"
            type="text"
            placeholder={labels.namePlaceholder}
            className="mt-2 w-full rounded-xl border border-neutral-300 px-4 py-3 outline-none transition focus:border-neutral-500"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-neutral-800"
          >
            {labels.emailLabel}
          </label>

          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            className="mt-2 w-full rounded-xl border border-neutral-300 px-4 py-3 outline-none transition focus:border-neutral-500"
          />
        </div>

        <div>
          <label
            htmlFor="service"
            className="block text-sm font-medium text-neutral-800"
          >
            {labels.serviceLabel}
          </label>

          <select
            id="service"
            name="service"
            className="mt-2 w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 outline-none transition focus:border-neutral-500"
          >
            <option value="">{labels.servicePlaceholder}</option>
            {serviceOptions.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-neutral-800"
          >
            {labels.messageLabel}
          </label>

          <textarea
            id="message"
            name="message"
            rows={6}
            placeholder={labels.messagePlaceholder}
            className="mt-2 w-full rounded-xl border border-neutral-300 px-4 py-3 outline-none transition focus:border-neutral-500"
          />
        </div>

        {/* Feedback message after submission */}
        {state.message ? (
          <p
            className={`text-sm ${
              state.success ? "text-green-600" : "text-red-600"
            }`}
          >
            {state.message}
          </p>
        ) : null}

        <button
          type="submit"
          disabled={isPending}
          className="inline-flex min-h-12 items-center justify-center rounded-md bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isPending ? labels.submit + "..." : labels.submit}
        </button>
      </form>
    </div>
  );
}
