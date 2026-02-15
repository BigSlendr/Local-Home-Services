import type { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

export function Button({ href, children, variant = "primary", className }: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition focus-ring",
        variant === "primary" && "bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/25 hover:bg-amber-400",
        variant === "secondary" && "bg-slate-900 text-white hover:bg-slate-800",
        variant === "ghost" && "border border-slate-300 bg-white hover:bg-slate-100",
        className,
      )}
    >
      {children}
    </Link>
  );
}
