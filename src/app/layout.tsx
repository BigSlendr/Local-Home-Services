import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { FloatingMobileCTA } from "@/components/FloatingMobileCTA";

export const metadata: Metadata = {
  title: "North Peak Home Services",
  description: "Premium local handyman and home improvement services in Staten Island + South Brooklyn.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingMobileCTA />
      </body>
    </html>
  );
}
