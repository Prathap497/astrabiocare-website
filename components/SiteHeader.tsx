"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

type MegaCol = { title: string; links: string[] };
type NavItem =
  | { label: string; type: "mega"; cols: MegaCol[] }
  | { label: string; href: string; cta?: boolean };

const nav: NavItem[] = [
  {
    label: "Products",
    type: "mega",
    cols: [
      { title: "Gynecology", links: ["Prenatal Care", "PCOS Support", "Iron & Folic"] },
      { title: "Pediatrics", links: ["Antipyretics", "Vitamins", "Cough & Cold"] },
      { title: "Gastro", links: ["PPIs", "Antacids", "Probiotics"] },
      { title: "Infection Mgmt", links: ["Antibiotics", "Antifungals"] }
    ]
  },
  { label: "Therapeutic Areas", href: "/therapeutic-areas" },
  { label: "Quality & Compliance", href: "/quality-compliance" },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact", cta: true }
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    const h = document.querySelector(".site-header");
    const onScroll = () => {
      const y = window.scrollY;
      if (y > 20) h?.classList.add("shrink");
      else h?.classList.remove("shrink");
      if (y > lastY && y > 120) h?.classList.add("hidden");
      else h?.classList.remove("hidden");
      lastY = y;
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="site-header py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4">
        <Link href="/" className="font-semibold text-primary text-xl">Astra Bio Care</Link>
        <nav className="hidden md:flex gap-6 text-sm">
          {nav.map((item, idx) => {
            if ("type" in item) {
              return (
                <div
                  key={idx}
                  className="relative"
                  onMouseEnter={() => setOpen(true)}
                  onMouseLeave={() => setOpen(false)}
                >
                  <button className="hover:text-primaryDark">{item.label}</button>
                  {open && (
                    <div className="absolute left-0 mt-3 grid w-screen max-w-3xl grid-cols-4 gap-6 rounded-xl bg-white p-6 shadow-brand">
                      {item.cols.map(col => (
                        <div key={col.title}>
                          <p className="mb-2 font-semibold text-primary">{col.title}</p>
                          <ul className="space-y-1">
                            {col.links.map(link => (
                              <li key={link}>
                                <a href="#" className="block text-muted hover:text-primaryDark">
                                  {link}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            }
            if (item.cta) {
              return (
                <Link
                  key={idx}
                  href={item.href as any}
                  className="btn-primary text-sm font-medium"
                >
                  {item.label}
                </Link>
              );
            }
            return (
              <Link key={idx} href={item.href as any} className="hover:text-primaryDark">
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
