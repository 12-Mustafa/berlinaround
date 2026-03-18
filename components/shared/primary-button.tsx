import Link from "next/link";

type PrimaryButtonProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export default function PrimaryButton({
  href,
  children,
  className = "",
}: PrimaryButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-12 items-center justify-center rounded-md bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition hover:opacity-90 ${className}`}
    >
      {children}
    </Link>
  );
}
