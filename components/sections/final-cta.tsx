// Next.js link component for internal navigation.
import Link from "next/link";

// Shared layout pieces.
import Container from "@/components/shared/container";
import PrimaryButton from "@/components/shared/primary-button";

// Locale and dictionary helpers.
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";

// Props required for localized Final CTA rendering.
type FinalCtaProps = {
  locale: Locale;
};

export default function FinalCta({ locale }: FinalCtaProps) {
  // Load localized labels and content.
  const dict = getDictionary(locale);

  return (
    <section className="py-16 md:py-20">
      <Container>
        <div className="rounded-3xl bg-neutral-900 px-6 py-12 text-white md:px-10 md:py-16">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
              {dict.home.finalCtaTag}
            </p>

            <h2 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">
              {dict.home.finalCtaTitle}
            </h2>

            <p className="mt-4 text-lg leading-8 text-white/80">
              {dict.home.finalCtaText}
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              {/* Primary CTA button */}
              <PrimaryButton
                href={`/${locale}/contact`}
                className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                {dict.home.finalCtaPrimary}
              </PrimaryButton>

              {/* Secondary CTA button */}
              <Link
                href={`/${locale}/contact`}
                className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                {dict.home.finalCtaSecondary}
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
