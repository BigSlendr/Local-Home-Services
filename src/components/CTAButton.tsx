import Link from "next/link";

type CTAButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  fullWidth?: boolean;
};

export function CTAButton({ href, children, variant = "primary", fullWidth = false }: CTAButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-brand-500 text-white hover:bg-brand-700"
      : "bg-white text-brand-700 ring-1 ring-brand-200 hover:bg-brand-50";

  return (
    <Link
      href={href}
      className={`focus-ring inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold transition ${styles} ${fullWidth ? "w-full" : ""}`}
    >
      {children}
    </Link>
  );
}
