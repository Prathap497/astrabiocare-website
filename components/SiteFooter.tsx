import Link from "next/link";

const columns = [
  { title: "Company", links: ["About", "Leadership", "Careers", "Contact"] },
  {
    title: "Therapeutic Areas",
    links: ["Women’s Health", "Child Health", "Gastro", "Infection Mgmt", "Pain & Fever"]
  },
  { title: "Quality", links: ["GMP", "WHO-GMP", "ISO 9001:2015", "Pharmacovigilance"] },
  { title: "Resources", links: ["News & Insights", "Downloads", "Regulatory"] }
];

const bottom = [
  "© Astra Bio Care Pvt Ltd",
  "All trademarks belong to their owners.",
  "Made for healthcare professionals & partners."
];

export default function SiteFooter() {
  return (
    <footer className="mt-16 bg-mutedBg text-sm text-muted">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-12 md:grid-cols-4">
        {columns.map(col => (
          <div key={col.title}>
            <h3 className="mb-4 font-semibold text-text">{col.title}</h3>
            <ul className="space-y-2">
              {col.links.map(l => (
                <li key={l}>
                  <Link href="#" className="hover:text-primary">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border py-4">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 text-center md:flex-row">
          {bottom.map(b => (
            <p key={b} className="text-xs text-muted">
              {b}
            </p>
          ))}
        </div>
      </div>
    </footer>
  );
}
