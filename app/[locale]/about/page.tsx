// Next.js metadata type.
import type { Metadata } from "next";

// Next.js link component for internal navigation.
import Link from "next/link";

// Shared layout pieces.
import Container from "@/components/shared/container";

// Locale helpers.
import { isValidLocale, locales, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { notFound } from "next/navigation";

// Generate static params for supported locales.
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

// Localized metadata for the About page.
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    return {
      title: "Berlinaround | About",
      description: "About Berlinaround.",
    };
  }

  if (locale === "de") {
    return {
      title: "Berlinaround | Über uns",
      description:
        "Lernen Sie den praktischen Ansatz, die Werte und die Arbeitsweise von Berlinaround kennen.",
    };
  }

  return {
    title: "Berlinaround | About",
    description:
      "Learn about Berlinaround’s practical approach, values, and way of working.",
  };
}

// Localized About page.
// This version reads page-level copy from the dictionary.
export default async function LocalizedAboutPage({
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

  // Load dictionary for shared labels and page content.
  const dict = getDictionary(locale as Locale);

  return (
    <main className="py-16 md:py-20">
      <Container>
        {/* Page intro */}
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
            {dict.pages.about.pageTag}
          </p>

          <h1 className="mt-3 text-4xl font-bold text-neutral-900 md:text-5xl">
            {dict.pages.about.pageTitle}
          </h1>

          <p className="mt-5 text-lg leading-8 text-neutral-600">
            {dict.pages.about.pageText}
          </p>
        </div>

        {/* Main content */}
        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-start">
          {/* Left column */}
          <div>
            <h2 className="text-2xl font-semibold text-neutral-900">
              {dict.pages.about.sectionOneTitle}
            </h2>

            <p className="mt-4 text-base leading-8 text-neutral-600">
              {dict.pages.about.sectionOneText}
            </p>

            <h2 className="mt-10 text-2xl font-semibold text-neutral-900">
              {dict.pages.about.sectionTwoTitle}
            </h2>

            <p className="mt-4 text-base leading-8 text-neutral-600">
              {dict.pages.about.sectionTwoText}
            </p>
          </div>

          {/* Principles card */}
          <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
              {dict.pages.about.principlesTag}
            </p>

            <div className="mt-6 space-y-6">
              {dict.pages.about.principles.map((principle) => (
                <div key={principle.title}>
                  <h3 className="text-xl font-semibold text-neutral-900">
                    {principle.title}
                  </h3>

                  <p className="mt-2 text-base leading-7 text-neutral-600">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 rounded-3xl bg-neutral-900 px-6 py-10 text-white md:px-10 md:py-12">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
              {dict.pages.about.ctaTag}
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              {dict.pages.about.ctaTitle}
            </h2>

            <p className="mt-4 text-lg leading-8 text-white/80">
              {dict.pages.about.ctaText}
            </p>

            <div className="mt-8">
              <Link
                href={`/${locale}/contact`}
                className="inline-flex min-h-12 items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-medium text-neutral-900 transition hover:bg-neutral-100"
              >
                {dict.nav.contact}
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
