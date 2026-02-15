import type { ReactNode } from "react";
import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCtaBar } from "@/components/MobileCtaBar";

export const metadata: Metadata = {
  title: "North Peak Home Services",
  description: "Fast, clean, professional home repairs—done right. Serving Staten Island + South Brooklyn.",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileCtaBar />
      </body>
    </html>
  );
}
