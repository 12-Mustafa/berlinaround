// Shared layout pieces.
import Container from "@/components/shared/container";
import SectionCard from "@/components/shared/section-card";

// Locale and dictionary helpers.
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";

// Props required for localized Services Overview rendering.
type ServicesOverviewProps = {
  locale: Locale;
};

export default function ServicesOverview({ locale }: ServicesOverviewProps) {
  // Load localized labels and content.
  const dict = getDictionary(locale);

  return (
    <section className="py-16 md:py-20">
      <Container>
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
            {dict.home.servicesTag}
          </p>

          <h2 className="mt-3 text-3xl font-bold text-neutral-900 md:text-4xl">
            {dict.home.servicesTitle}
          </h2>

          <p className="mt-4 text-lg leading-8 text-neutral-600">
            {dict.home.servicesText}
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {dict.home.servicesItems.map((service) => (
            <SectionCard key={service.title}>
              <h3 className="text-xl font-semibold text-neutral-900">
                {service.title}
              </h3>

              <p className="mt-3 text-base leading-7 text-neutral-600">
                {service.description}
              </p>
            </SectionCard>
          ))}
        </div>
      </Container>
    </section>
  );
}
