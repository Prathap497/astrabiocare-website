import Link from "next/link";
import { Search } from "lucide-react";

const navItems = [
  { href: "/products", label: "Products" },
  { href: "/therapeutic-areas", label: "Therapeutic Areas" },
  { href: "/quality-compliance", label: "Quality" },
  { href: "/resources", label: "Resources" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-headerFooterBg/80 backdrop-blur border-b border-primary">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 text-headerFooterText">
        <Link href="/" className="font-semibold text-lg">Astra Bio Care</Link>
        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-primary">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/contact" className="rounded-md bg-primary px-3 py-2 text-sm font-medium text-white">
            Enquire for Bulk Orders
          </Link>
          <button aria-label="Search" className="p-2">
            <Search className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
