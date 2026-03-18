"use client";

// Next.js link component.
import Link from "next/link";

// Client-side pathname reader.
import { usePathname } from "next/navigation";

// React hooks for mobile menu behavior.
import { useEffect, useState } from "react";

// Shared layout pieces.
import Container from "@/components/shared/container";
import LanguageSwitcher from "@/components/shared/language-switcher";

// Locale helpers.
import { defaultLocale, isValidLocale, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";

// Localized navbar.
// This component derives the active locale directly from the URL.
export default function Navbar() {
  // Current pathname is used for:
  // 1. locale detection
  // 2. active link styling
  const pathname = usePathname();

  // Mobile menu open/close state.
  const [isOpen, setIsOpen] = useState(false);

  // Keeps the menu mounted briefly so the close animation can finish.
  const [isMounted, setIsMounted] = useState(false);

  // Extract the first route segment.
  // Examples:
  // /de/services -> "de"
  // /en/about -> "en"
  const firstSegment = pathname.split("/")[1];

  // Determine the active locale directly from the URL.
  const activeLocale: Locale = isValidLocale(firstSegment)
    ? firstSegment
    : defaultLocale;

  // Load translated labels for the active locale.
  const dict = getDictionary(activeLocale);

  // Locale-aware navigation links.
  const navLinks = [
    { label: dict.nav.services, href: `/${activeLocale}/services` },
    { label: dict.nav.projects, href: `/${activeLocale}/projects` },
    { label: dict.nav.blog, href: `/${activeLocale}/blog` },
    { label: dict.nav.about, href: `/${activeLocale}/about` },
    { label: dict.nav.contact, href: `/${activeLocale}/contact` },
  ];

  // Lock background page scrolling while the mobile menu is open.
  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
      document.body.style.overflow = "hidden";
      return;
    }

    document.body.style.overflow = "";
    const timeout = setTimeout(() => setIsMounted(false), 200);

    return () => clearTimeout(timeout);
  }, [isOpen]);

  // Allow Escape key to close the menu and always restore body scroll on unmount.
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-md">
        <Container className="py-4">
          <div className="flex items-center justify-between">
            {/* Brand link always points to the current locale homepage */}
            <Link
              href={`/${activeLocale}`}
              className="text-xl font-semibold text-neutral-900"
            >
              Berlinaround
            </Link>

            {/* Desktop navigation */}
            <div className="hidden items-center gap-3 lg:flex">
              <nav className="flex items-center gap-2">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`rounded-md px-3 py-2 text-sm font-medium transition ${
                        isActive
                          ? "bg-neutral-900 text-white"
                          : "text-neutral-700 hover:bg-neutral-100 hover:text-black"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>

              {/* Desktop language switcher */}
              <LanguageSwitcher />
            </div>

            {/* Mobile menu toggle */}
            <button
              type="button"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
              onClick={() => {
                setIsMounted(true);
                setIsOpen((prev) => !prev);
              }}
              className="relative inline-flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 bg-white/80 text-neutral-900 backdrop-blur transition hover:bg-white lg:hidden"
            >
              <span className="sr-only">Open menu</span>

              <span
                className={`absolute h-0.5 w-5 bg-current transition duration-200 ease-out ${
                  isOpen ? "rotate-45" : "-translate-y-1.5"
                }`}
              />
              <span
                className={`absolute h-0.5 w-5 bg-current transition duration-200 ease-out ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute h-0.5 w-5 bg-current transition duration-200 ease-out ${
                  isOpen ? "-rotate-45" : "translate-y-1.5"
                }`}
              />
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile overlay menu */}
      {isMounted && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <button
            type="button"
            aria-label="Close menu overlay"
            onClick={() => setIsOpen(false)}
            className={`absolute inset-0 bg-black/30 transition-opacity duration-200 ease-out ${
              isOpen ? "opacity-100" : "opacity-0"
            }`}
          />

          <div
            className={`absolute right-0 top-0 h-full w-1/2 min-w-[260px] max-w-[420px] transform transition-transform duration-200 ease-out ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex h-full flex-col border-l border-white/30 bg-white/30 shadow-2xl backdrop-blur-2xl">
              <div className="flex items-center justify-between border-b border-black/10 px-6 py-5">
                <p className="text-lg font-semibold text-neutral-900">
                  {dict.nav.menu}
                </p>

                <button
                  type="button"
                  aria-label="Close navigation menu"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-black/10 bg-white/40 text-neutral-900 backdrop-blur transition hover:bg-white/70"
                >
                  <span className="text-xl leading-none">×</span>
                </button>
              </div>

              <div className="flex flex-1 flex-col justify-between px-4 py-4">
                <nav className="flex flex-col gap-2">
                  {navLinks.map((link) => {
                    const isActive = pathname === link.href;

                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`rounded-xl px-4 py-4 text-base font-medium transition ${
                          isActive
                            ? "bg-neutral-900 text-white"
                            : "bg-white/20 text-neutral-900 hover:bg-white/40"
                        }`}
                      >
                        {link.label}
                      </Link>
                    );
                  })}
                </nav>

                <div className="mt-6 space-y-4 px-2">
                  {/* Mobile language switcher */}
                  <LanguageSwitcher mobile />

                  {/* Mobile localized CTA */}
                  <Link
                    href={`/${activeLocale}/contact`}
                    onClick={() => setIsOpen(false)}
                    className="inline-flex min-h-12 w-full items-center justify-center rounded-md bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
                  >
                    {dict.nav.requestQuote}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
