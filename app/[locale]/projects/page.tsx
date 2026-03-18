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

// Localized metadata for the Projects page.
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    return {
      title: "Berlinaround | Projects",
      description: "Selected projects by Berlinaround.",
    };
  }

  if (locale === "de") {
    return {
      title: "Berlinaround | Projekte",
      description:
        "Ausgewählte Projekte, Vorher-Nachher-Veränderungen und Raumverbesserungen in Berlin und Umgebung.",
    };
  }

  return {
    title: "Berlinaround | Projects",
    description:
      "Selected projects, before-and-after transformations, and space improvements in Berlin and surrounding areas.",
  };
}

// Localized Projects page.
// This version reads page-level copy from the dictionary.
export default async function LocalizedProjectsPage({
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

  // Reuse project items from the homepage dictionary and append one extra card.
  const projects = [
    ...dict.home.projectsItems,
    {
      title: dict.pages.projects.extraItemTitle,
      description: dict.pages.projects.extraItemDescription,
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  return (
    <main className="py-16 md:py-20">
      <Container>
        {/* Page intro */}
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
            {dict.pages.projects.pageTag}
          </p>

          <h1 className="mt-3 text-4xl font-bold text-neutral-900 md:text-5xl">
            {dict.pages.projects.pageTitle}
          </h1>

          <p className="mt-5 text-lg leading-8 text-neutral-600">
            {dict.pages.projects.pageText}
          </p>
        </div>

        {/* Project cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm"
            >
              <div
                className="h-72 bg-cover bg-center"
                style={{ backgroundImage: `url('${project.image}')` }}
              />

              <div className="p-6">
                <h2 className="text-2xl font-semibold text-neutral-900">
                  {project.title}
                </h2>

                <p className="mt-4 text-base leading-7 text-neutral-600">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Before and after block */}
        <div className="mt-16 rounded-3xl border border-neutral-200 bg-white p-6 md:p-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
              {dict.pages.projects.compareTag}
            </p>

            <h2 className="mt-3 text-3xl font-bold text-neutral-900 md:text-4xl">
              {dict.pages.projects.compareTitle}
            </h2>

            <p className="mt-4 text-lg leading-8 text-neutral-600">
              {dict.pages.projects.compareText}
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {/* Before image */}
            <div className="overflow-hidden rounded-2xl border border-neutral-200">
              <div
                className="h-64 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80')",
                }}
              />

              <div className="p-4">
                <p className="text-sm font-medium text-neutral-700">
                  {dict.pages.projects.beforeLabel}
                </p>
              </div>
            </div>

            {/* After image */}
            <div className="overflow-hidden rounded-2xl border border-neutral-200">
              <div
                className="h-64 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80')",
                }}
              />

              <div className="p-4">
                <p className="text-sm font-medium text-neutral-700">
                  {dict.pages.projects.afterLabel}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 rounded-3xl bg-neutral-900 px-6 py-10 text-white md:px-10 md:py-12">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
              {dict.pages.projects.ctaTag}
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              {dict.pages.projects.ctaTitle}
            </h2>

            <p className="mt-4 text-lg leading-8 text-white/80">
              {dict.pages.projects.ctaText}
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
