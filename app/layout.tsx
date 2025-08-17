import "../styles/globals.css";
import type { ReactNode } from "react";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="description" content="Astra Bio Care develops and supplies high-quality formulations across Gynecology, Pediatrics, Gastroenterology, and Infection Management. Partner with us for reliable pharma supply." />
      </head>
      <body className="font-sans text-text">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
