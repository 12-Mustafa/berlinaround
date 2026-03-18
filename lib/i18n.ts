// Supported website locales.
// We keep the website intentionally limited to German and English.
export const locales = ["de", "en"] as const;

// Type for allowed locale values.
// This helps TypeScript understand valid locale strings.
export type Locale = (typeof locales)[number];

// German is the default language for this website.
export const defaultLocale: Locale = "de";

// Helper function to validate whether a string is a supported locale.
export function isValidLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
