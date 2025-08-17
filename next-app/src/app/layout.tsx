import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.astrabiocare.com"),
  title: "Astra Bio Care | Trusted Therapeutics",
  description:
    "Indian pharmaceutical company delivering essential generics with uncompromising quality, documentation, and service.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Astra Bio Care | Trusted Therapeutics",
    description:
      "Indian pharmaceutical company delivering essential generics with uncompromising quality, documentation, and service.",
    url: "https://www.astrabiocare.com",
    images: [
      {
        url: "/images/brand/og.png",
        width: 1200,
        height: 630,
        alt: "Astra Bio Care",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
