// Metadata type from Next.js.
import type { Metadata } from "next";

// notFound is used to reject unsupported locales.
import { notFound } from "next/navigation";

// Shared layout pieces.
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";

// Locale helpers.
import { isValidLocale, locales, type Locale } from "@/lib/i18n";

// Basic site metadata.
export const metadata: Metadata = {
  title: "Berlinaround",
  description: "Renovation and furnishing services website.",
};

// Pre-generate supported locale routes.
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

// Locale-specific layout.
export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Read the locale from the route.
  const { locale } = await params;

  // Reject unsupported locales.
  if (!isValidLocale(locale)) {
    notFound();
  }

  return (
    <>
      {/* Navbar now reads locale directly from pathname */}
      <Navbar />

      {/* Localized page content */}
      {children}

      {/* Footer still receives locale from the validated route */}
      <Footer locale={locale as Locale} />
    </>
  );
}
