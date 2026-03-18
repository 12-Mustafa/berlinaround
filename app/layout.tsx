// Global stylesheet import.
// This must stay in the root layout so styles apply everywhere.
import "./globals.css";

// Root layout for the entire app.
// In the App Router, the root layout must contain <html> and <body>.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
