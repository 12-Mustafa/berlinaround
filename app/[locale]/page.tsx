// Next.js metadata type.
import type { Metadata } from "next";

// Localized homepage sections.
import FinalCta from "@/components/sections/final-cta";
import Hero from "@/components/sections/hero";
import ProcessSection from "@/components/sections/process-section";
import ProjectsPreview from "@/components/sections/projects-preview";
import ServicesOverview from "@/components/sections/services-overview";

// Locale helpers.
import { isValidLocale, locales, type Locale } from "@/lib/i18n";
import { notFound } from "next/navigation";

// Generate static params for supported locales.
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

// Localized metadata for the homepage.
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    return {
      title: "Berlinaround",
      description: "Berlinaround website",
    };
  }

  if (locale === "de") {
    return {
      title: "Berlinaround | Renovierung & Einrichtung",
      description:
        "Renovierung, Einrichtung und Raumverbesserung für Privat- und Geschäftskunden in Berlin und Umgebung.",
    };
  }

  return {
    title: "Berlinaround | Renovation & Furnishing",
    description:
      "Renovation, furnishing, and space improvement for private and business clients in Berlin and surrounding areas.",
  };
}

// Localized homepage.
// This renders the full homepage structure in a locale-aware form.
export default async function LocalizedHomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  // Read locale from the route.
  const { locale } = await params;

  // Reject unsupported locales.
  if (!isValidLocale(locale)) {
    notFound();
  }

  return (
    <main>
      <Hero locale={locale as Locale} />
      <ServicesOverview locale={locale as Locale} />
      <ProjectsPreview locale={locale as Locale} />
      <ProcessSection locale={locale as Locale} />
      <FinalCta locale={locale as Locale} />
    </main>
  );
}
