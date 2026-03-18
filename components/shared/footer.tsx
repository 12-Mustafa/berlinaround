// Next.js link component for internal navigation.
import Link from "next/link";

// Shared layout container.
import Container from "@/components/shared/container";

// Locale type and dictionary helper.
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";

// Footer receives the current locale from the localized layout.
type FooterProps = {
  locale: Locale;
};

export default function Footer({ locale }: FooterProps) {
  // Load the correct dictionary for the current locale.
  const dict = getDictionary(locale);

  // Locale-aware footer links.
  const footerLinks = [
    { label: dict.nav.services, href: `/${locale}/services` },
    { label: dict.nav.projects, href: `/${locale}/projects` },
    { label: dict.nav.blog, href: `/${locale}/blog` },
    { label: dict.nav.about, href: `/${locale}/about` },
    { label: dict.nav.contact, href: `/${locale}/contact` },
  ];

  return (
    <footer className="border-t bg-white">
      <Container className="py-10 md:py-12">
        <div className="grid gap-8 md:grid-cols-3 md:gap-10">
          {/* Brand and short description */}
          <div>
            <p className="text-lg font-semibold text-neutral-900">
              Berlinaround
            </p>

            <p className="mt-3 max-w-sm text-sm leading-7 text-neutral-600">
              {dict.footer.description}
            </p>
          </div>

          {/* Footer navigation */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
              {dict.footer.navigation}
            </p>

            <div className="mt-4 flex flex-col gap-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-neutral-700 transition hover:text-black"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact information */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
              {dict.footer.contact}
            </p>

            <div className="mt-4 space-y-3 text-sm text-neutral-700">
              <p>hello@berlinaround.com</p>
              <p>+49 000 00000000</p>
              <p>{dict.footer.area}</p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t pt-6">
          <p className="text-sm text-neutral-500">
            © Berlinaround. {dict.footer.rights}
          </p>
        </div>
      </Container>
    </footer>
  );
}
