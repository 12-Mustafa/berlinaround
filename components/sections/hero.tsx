// Next.js link component for internal navigation.
import Link from "next/link";

// Shared layout pieces.
import Container from "@/components/shared/container";
import PrimaryButton from "@/components/shared/primary-button";

// Locale and dictionary helpers.
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";

// Props required for localized hero rendering.
type HeroProps = {
  locale: Locale;
};

export default function Hero({ locale }: HeroProps) {
  // Load localized labels for the hero section.
  const dict = getDictionary(locale);

  return (
    <section className="relative overflow-hidden">
      {/* Mobile background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat md:hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80')",
        }}
      />

      {/* Dark overlay on mobile for text readability */}
      <div className="absolute inset-0 bg-black/55 md:hidden" />

      <Container className="relative py-16 md:py-20 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Text content */}
          <div className="relative z-10 max-w-3xl py-8 md:py-0">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/90 md:text-sm md:text-neutral-500">
              {dict.home.heroTag}
            </p>

            <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight text-white sm:text-5xl md:text-neutral-900 lg:text-6xl">
              {dict.home.heroTitle}
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-white/90 sm:text-lg sm:leading-8 md:mt-6 md:text-neutral-600">
              {dict.home.heroText}
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:gap-4">
              {/* Primary CTA */}
              <PrimaryButton href={`/${locale}/contact`}>
                {dict.home.ctaPrimary}
              </PrimaryButton>

              {/* Secondary CTA */}
              <Link
                href={`/${locale}/projects`}
                className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/40 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-white/20 md:border-neutral-300 md:bg-transparent md:text-neutral-800 md:hover:bg-neutral-50"
              >
                {dict.home.ctaSecondary}
              </Link>
            </div>
          </div>

          {/* Desktop image panel */}
          <div className="hidden lg:block">
            <div
              className="h-[480px] rounded-2xl bg-cover bg-center shadow-sm"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80')",
              }}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
