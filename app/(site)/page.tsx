import Image from "next/image";

export default function HomePage() {
  return (
    <div>
      <section className="bg-mutedBg py-24 text-center">
        <div className="mx-auto max-w-3xl px-4">
          <p className="mb-2 text-sm font-medium text-muted">Trusted Pharmaceutical Partner</p>
          <h1 className="mb-4 text-4xl font-bold">Quality Medicines for Women’s & Child Health</h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted">
            We develop, manufacture, and supply evidence-based formulations across Gynecology, Pediatrics, Gastroenterology, and Infection Management—backed by GMP and rigorous quality systems.
          </p>
          <div className="flex justify-center gap-4">
            <a href="/contact" className="btn-primary">Partner With Us</a>
            <a href="/products" className="rounded-pill border border-border px-5 py-3 text-primary">Explore Products</a>
          </div>
          <ul className="mx-auto mt-12 grid max-w-xl gap-4 text-left md:grid-cols-3">
            {[
              "WHO-GMP aligned quality systems",
              "Robust supply chain and on-time delivery",
              "Regulatory-ready documentation & PV support"
            ].map(b => (
              <li key={b} className="card">
                {b}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-8">
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-6 px-4">
          {['WHO-GMP','ISO 9001:2015','ISO 14001','ISO 45001'].map(t => (
            <span key={t} className="text-sm font-medium text-muted">{t}</span>
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-5xl gap-8 px-4 md:grid-cols-3">
          {[
            {
              title: "Gynecology",
              desc: "Nutritional support, prenatal care, and hormonal balance products designed for women’s health.",
              href: "/therapeutic-areas#gynecology"
            },
            {
              title: "Pediatrics",
              desc: "Palatable, age-appropriate dosing with strong safety profiles for pediatric care.",
              href: "/therapeutic-areas#pediatrics"
            },
            {
              title: "Gastro",
              desc: "PPIs, antacids, and probiotics formulated for efficacy and tolerance.",
              href: "/therapeutic-areas#gastro"
            }
          ].map(tile => (
            <a key={tile.title} href={tile.href} className="card hover:shadow-lg">
              <h3 className="mb-2 text-xl font-semibold text-primary">{tile.title}</h3>
              <p className="text-sm text-muted">{tile.desc}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="bg-primary py-16 text-center text-white">
        <h2 className="mb-2 text-2xl font-semibold">Bulk and Institutional Orders</h2>
        <p className="mb-6">Talk to our procurement team for hospital & distributor partnerships.</p>
        <a href="/contact" className="btn-primary">Contact Sales</a>
      </section>
    </div>
  );
}
