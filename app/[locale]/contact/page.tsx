// Next.js metadata type.
import type { Metadata } from "next";

// Shared layout pieces.
import Container from "@/components/shared/container";
import ContactForm from "@/components/sections/contact-form";

// Locale helpers.
import { isValidLocale, locales, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { notFound } from "next/navigation";

// Generate static params for supported locales.
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

// Localized metadata for the Contact page.
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    return {
      title: "Berlinaround | Contact",
      description: "Contact Berlinaround.",
    };
  }

  if (locale === "de") {
    return {
      title: "Berlinaround | Kontakt",
      description:
        "Kontaktieren Sie Berlinaround für Renovierung, Einrichtung und Raumverbesserung in Berlin und Umgebung.",
    };
  }

  return {
    title: "Berlinaround | Contact",
    description:
      "Contact Berlinaround for renovation, furnishing, and space improvement in Berlin and surrounding areas.",
  };
}

// Localized Contact page.
// This version now uses a real server-backed form component.
export default async function LocalizedContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const dict = getDictionary(locale as Locale);

  return (
    <main className="py-16 md:py-20">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          {/* Left column */}
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
              {dict.pages.contact.pageTag}
            </p>

            <h1 className="mt-3 text-4xl font-bold text-neutral-900 md:text-5xl">
              {dict.pages.contact.pageTitle}
            </h1>

            <p className="mt-5 text-lg leading-8 text-neutral-600">
              {dict.pages.contact.pageText}
            </p>

            <div className="mt-10 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm md:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
                {dict.pages.contact.directTag}
              </p>

              <div className="mt-6 space-y-5">
                <div>
                  <h2 className="text-lg font-semibold text-neutral-900">
                    {dict.pages.contact.emailLabel}
                  </h2>
                  <p className="mt-1 text-neutral-600">
                    hello@berlinaround.com
                  </p>
                </div>

                <div>
                  <h2 className="text-lg font-semibold text-neutral-900">
                    {dict.pages.contact.phoneLabel}
                  </h2>
                  <p className="mt-1 text-neutral-600">+49 000 00000000</p>
                </div>

                <div>
                  <h2 className="text-lg font-semibold text-neutral-900">
                    {dict.pages.contact.areaLabel}
                  </h2>
                  <p className="mt-1 text-neutral-600">
                    {dict.pages.contact.areaText}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right column: real wired form */}
          <ContactForm
            locale={locale as Locale}
            labels={{
              formTag: dict.pages.contact.formTag,
              nameLabel: dict.pages.contact.nameLabel,
              namePlaceholder: dict.pages.contact.namePlaceholder,
              emailLabel: dict.pages.contact.emailLabel,
              serviceLabel: dict.pages.contact.serviceLabel,
              servicePlaceholder: dict.pages.contact.servicePlaceholder,
              messageLabel: dict.pages.contact.messageLabel,
              messagePlaceholder: dict.pages.contact.messagePlaceholder,
              submit: dict.pages.contact.submit,
            }}
            serviceOptions={dict.home.servicesItems.map((item) => item.title)}
          />
        </div>
      </Container>
    </main>
  );
}
