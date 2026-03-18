// Next.js metadata type.
import type { Metadata } from "next";

// Shared layout pieces.
import Container from "@/components/shared/container";
import PrimaryButton from "@/components/shared/primary-button";

// Locale helpers.
import { isValidLocale, locales, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { notFound } from "next/navigation";

// Generate static params for supported locales.
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

// Localized metadata for the Services page.
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    return {
      title: "Berlinaround | Services",
      description: "Services offered by Berlinaround.",
    };
  }

  if (locale === "de") {
    return {
      title: "Berlinaround | Leistungen",
      description:
        "Praktische Leistungen für Renovierung, Einrichtung und Raumverbesserung in Berlin und Umgebung.",
    };
  }

  return {
    title: "Berlinaround | Services",
    description:
      "Practical renovation, furnishing, and space improvement services in Berlin and surrounding areas.",
  };
}

// Localized Services page.
// This version reads page-level copy from the dictionary
// instead of mixing inline language checks in the component.
export default async function LocalizedServicesPage({
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

  // Load the correct dictionary.
  const dict = getDictionary(locale as Locale);

  // Reuse the same service items already defined in the homepage dictionary.
  const serviceImages = [
    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
  ];

  return (
    <main className="py-16 md:py-20">
      <Container>
        {/* Page intro */}
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
            {dict.pages.services.pageTag}
          </p>

          <h1 className="mt-3 text-4xl font-bold text-neutral-900 md:text-5xl">
            {dict.pages.services.pageTitle}
          </h1>

          <p className="mt-5 text-lg leading-8 text-neutral-600">
            {dict.pages.services.pageText}
          </p>
        </div>

        {/* Service blocks */}
        <div className="mt-14 space-y-12">
          {dict.home.servicesItems.map((service, index) => (
            <section
              key={service.title}
              className="grid gap-8 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm md:p-8 lg:grid-cols-2 lg:items-center lg:gap-10"
            >
              {/* Service image */}
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div
                  className="h-72 rounded-2xl bg-cover bg-center md:h-80"
                  style={{
                    backgroundImage: `url('${serviceImages[index]}')`,
                  }}
                />
              </div>

              {/* Service text */}
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
                  {dict.pages.services.itemTag}
                </p>

                <h2 className="mt-3 text-3xl font-bold text-neutral-900">
                  {service.title}
                </h2>

                <p className="mt-4 text-base leading-8 text-neutral-600">
                  {service.description}
                </p>
              </div>
            </section>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 rounded-3xl bg-neutral-900 px-6 py-10 text-white md:px-10 md:py-12">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
              {dict.pages.services.ctaTag}
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              {dict.pages.services.ctaTitle}
            </h2>

            <p className="mt-4 text-lg leading-8 text-white/80">
              {dict.pages.services.ctaText}
            </p>

            <div className="mt-8">
              <PrimaryButton
                href={`/${locale}/contact`}
                className="bg-white text-neutral-900 hover:opacity-100 hover:bg-neutral-100"
              >
                {dict.nav.contact}
              </PrimaryButton>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
