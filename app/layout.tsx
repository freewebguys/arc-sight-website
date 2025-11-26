import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SectionProvider } from "@/context/SectionContext";

export const metadata: Metadata = {
  title: "ArcSight.ai — Structural Stability Records",
  description:
    "ArcSight introduces Structural Stability Records, a governance-grade architectural evidence artifact for scale, due diligence, and institutional memory.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SectionProvider>
          <a href="#main" className="sr-only focus:not-sr-only">
            Skip to content
          </a>
          <Header />
          <main id="main" role="main">
            {children}
          </main>
          <Footer />
        </SectionProvider>
      </body>
    </html>
  );
}
