// Next.js link component for internal navigation.
import Link from "next/link";

// Shared layout pieces.
import Container from "@/components/shared/container";

// Locale and dictionary helpers.
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";

// Props required for localized Projects Preview rendering.
type ProjectsPreviewProps = {
  locale: Locale;
};

export default function ProjectsPreview({ locale }: ProjectsPreviewProps) {
  // Load localized labels and content.
  const dict = getDictionary(locale);

  return (
    <section className="py-16 md:py-20">
      <Container>
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
            {dict.home.projectsTag}
          </p>

          <h2 className="mt-3 text-3xl font-bold text-neutral-900 md:text-4xl">
            {dict.home.projectsTitle}
          </h2>

          <p className="mt-4 text-lg leading-8 text-neutral-600">
            {dict.home.projectsText}
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {dict.home.projectsItems.map((project) => (
            <article
              key={project.title}
              className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm"
            >
              <div
                className="h-64 bg-cover bg-center"
                style={{ backgroundImage: `url('${project.image}')` }}
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold text-neutral-900">
                  {project.title}
                </h3>

                <p className="mt-3 text-base leading-7 text-neutral-600">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8">
          <Link
            href={`/${locale}/projects`}
            className="inline-flex items-center justify-center rounded-md border border-neutral-300 px-6 py-3 text-sm font-medium text-neutral-800 transition hover:bg-neutral-50"
          >
            {dict.home.projectsCta}
          </Link>
        </div>
      </Container>
    </section>
  );
}
