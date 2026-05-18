import type { Metadata } from "next";
import { Archivo, Prata } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollToTop from "@/components/ScrollToTop";
import Providers from "@/components/Providers";
import LegalModal from "@/components/LegalModal";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-archivo",
  display: "swap",
});

const prata = Prata({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-prata",
  display: "swap",
});

export const metadata: Metadata = {
  title: "QuantRidge Capital",
  description: "Institutional-grade quantitative trading firm combining mathematical rigour with technological innovation to capture alpha in global financial markets.",
  metadataBase: new URL("https://www.quantridge.sg"),
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "QuantRidge Capital",
    description: "Institutional-grade quantitative trading firm combining mathematical rigour with technological innovation to capture alpha in global financial markets.",
    url: "https://www.quantridge.sg",
    siteName: "QuantRidge Capital",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "QuantRidge Capital",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "QuantRidge Capital",
    description: "Institutional-grade quantitative trading firm combining mathematical rigour with technological innovation.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${archivo.variable} ${prata.variable}`}>
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
