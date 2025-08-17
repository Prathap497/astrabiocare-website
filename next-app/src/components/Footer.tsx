import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-headerFooterBg text-headerFooterText mt-16">
      <div className="mx-auto max-w-6xl px-4 py-10 grid gap-8 md:grid-cols-4">
        <div>
          <h3 className="text-lg font-semibold mb-4">Astra Bio Care Pvt Ltd</h3>
          <p className="text-sm">Trusted Therapeutics. Proven Quality.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            <li><Link href="/products" className="hover:text-primary">Products</Link></li>
            <li><Link href="/quality-compliance" className="hover:text-primary">Quality</Link></li>
            <li><Link href="/about" className="hover:text-primary">About</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Contact</h4>
          <ul className="space-y-1 text-sm">
            <li>Email: sales@astrabiocare.com</li>
            <li>Phone: +91-XXXXXXXXXX</li>
            <li>Location: Tirupati, Andhra Pradesh, India</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Newsletter</h4>
          <p className="text-sm mb-2">Get product updates and dossiers.</p>
          <form className="flex gap-2">
            <input type="email" placeholder="Email" className="flex-1 rounded-md px-2 py-1 text-content" />
            <button type="submit" className="rounded-md bg-primary px-3 py-1 text-sm text-white">Join</button>
          </form>
        </div>
      </div>
      <div className="border-t border-primary py-4 text-center text-sm">&copy; {new Date().getFullYear()} Astra Bio Care Pvt Ltd</div>
    </footer>
  );
}

export default Footer;
