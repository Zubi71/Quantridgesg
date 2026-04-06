import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollToTop from "@/components/ScrollToTop";
import Providers from "@/components/Providers";
import LegalModal from "@/components/LegalModal";

export const metadata: Metadata = {
  title: "QuantRidge Capital",
  description: "Institutional Grade Quantitative Trading",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Providers>
          <LegalModal />
          <ScrollProgress />
          <ScrollToTop />
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
