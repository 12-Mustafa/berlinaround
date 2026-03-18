// Next.js metadata type.
import type { Metadata } from "next";

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

// Localized metadata for the Blog page.
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    return {
      title: "Berlinaround | Blog",
      description: "Blog articles and insights from Berlinaround.",
    };
  }

  if (locale === "de") {
    return {
      title: "Berlinaround | Blog",
      description:
        "Einblicke, Ideen und hilfreiche Artikel zu Renovierung, Einrichtung und Raumverbesserung.",
    };
  }

  return {
    title: "Berlinaround | Blog",
    description:
      "Insights, ideas, and useful articles about renovation, furnishing, and space improvement.",
  };
}

// Localized Blog page.
// This version reads page-level copy from the dictionary.
export default async function LocalizedBlogPage({
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
        {/* Page intro */}
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
            {dict.pages.blog.pageTag}
          </p>

          <h1 className="mt-3 text-4xl font-bold text-neutral-900 md:text-5xl">
            {dict.pages.blog.pageTitle}
          </h1>

          <p className="mt-5 text-lg leading-8 text-neutral-600">
            {dict.pages.blog.pageText}
          </p>
        </div>

        {/* Blog cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {dict.pages.blog.posts.map((post) => (
            <article
              key={post.title}
              className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
            >
              <h2 className="text-2xl font-semibold text-neutral-900">
                {post.title}
              </h2>

              <p className="mt-4 text-base leading-7 text-neutral-600">
                {post.excerpt}
              </p>

              <span className="mt-6 inline-flex text-sm font-medium text-neutral-900 underline underline-offset-4">
                {dict.pages.blog.readMore}
              </span>
            </article>
          ))}
        </div>
      </Container>
    </main>
  );
}
