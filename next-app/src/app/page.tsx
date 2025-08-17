import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-16">
      <section className="bg-gradient-to-r from-accent-from to-accent-to text-white py-20">
        <div className="mx-auto max-w-4xl text-center space-y-6 px-4">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Advancing Everyday Care with Trusted Therapeutics
          </h1>
          <p className="text-lg md:text-xl">
            From discovery to delivery, Astra Bio Care builds reliable, affordable medicines with uncompromising quality and compliance.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/products" className="rounded-md bg-primary px-5 py-3 font-medium">Explore Products</Link>
            <Link href="/contact" className="rounded-md bg-white/20 px-5 py-3 font-medium">Enquire for Bulk Orders</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4">
        <ul className="grid gap-4 text-center md:grid-cols-4">
          {[
            "WHO-GMP aligned processes",
            "Stringent QC & QA",
            "Pan-India distribution network",
            "Responsive customer support",
          ].map((item) => (
            <li key={item} className="rounded-2xl bg-white p-4 shadow">{item}</li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-4xl space-y-10 px-4">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-semibold">Therapeutic Strengths</h2>
          <p>
            Our portfolio spans antibiotics, analgesics, gastro care, pediatrics, women’s health, and vitamins & supplements—crafted to meet the needs of clinicians and patients.
          </p>
        </div>
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-semibold">Quality Without Compromise</h2>
          <p>
            Every batch is validated, traceable, and released under strict SOPs. Stability, sterility, and impurity profiles are continuously monitored.
          </p>
        </div>
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-semibold">Partner With Us</h2>
          <p>
            Hospitals, pharmacies, and distributors rely on our reliable supply, transparent documentation, and dependable service.
          </p>
        </div>
      </section>
    </div>
  );
}
