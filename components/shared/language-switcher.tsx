"use client";

// Client-side routing helpers.
import { usePathname, useRouter } from "next/navigation";

// Locale helpers.
import { defaultLocale, isValidLocale, type Locale } from "@/lib/i18n";

// Props for styling only.
// This component derives the active locale directly from the URL.
type LanguageSwitcherProps = {
  mobile?: boolean;
};

export default function LanguageSwitcher({
  mobile = false,
}: LanguageSwitcherProps) {
  // Router is used to navigate after language change.
  const router = useRouter();

  // Current pathname tells us which locale and page are active.
  const pathname = usePathname();

  // Extract the first path segment.
  // Example:
  // /de/services -> "de"
  // /en/about -> "en"
  const firstSegment = pathname.split("/")[1];

  // Determine the active locale from the URL.
  const activeLocale: Locale = isValidLocale(firstSegment)
    ? firstSegment
    : defaultLocale;

  // Replace only the locale segment while preserving the rest of the path.
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = event.target.value as Locale;

    // Split the current path into segments.
    const segments = pathname.split("/");

    // If the first segment is a valid locale, replace it.
    if (segments[1] && isValidLocale(segments[1])) {
      segments[1] = nextLocale;
    } else {
      // Fallback: insert locale if the path somehow does not start with one.
      segments.splice(1, 0, nextLocale);
    }

    // Rebuild the next localized path.
    const nextPath = segments.join("/") || `/${nextLocale}`;

    // Navigate to the same page in the selected language.
    router.push(nextPath);
  };

  return (
    <div className={mobile ? "w-full" : "relative"}>
      {/* Accessibility label */}
      <label
        htmlFor={mobile ? "language-mobile" : "language-desktop"}
        className="sr-only"
      >
        Select language
      </label>

      {/* Locale selector */}
      <select
        id={mobile ? "language-mobile" : "language-desktop"}
        value={activeLocale}
        onChange={handleChange}
        className={`rounded-md border border-neutral-200 bg-white/80 text-sm font-medium text-neutral-900 outline-none backdrop-blur transition focus:border-neutral-400 ${
          mobile ? "w-full px-4 py-3" : "min-w-[88px] px-3 py-2"
        }`}
      >
        <option value="de">DE</option>
        <option value="en">EN</option>
      </select>
    </div>
  );
}
