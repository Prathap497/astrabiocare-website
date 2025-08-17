export default function ProductsPage() {
  const groups = [
    {
      name: "Women’s Health",
      items: [
        { name: "FerroFol Plus", form: "Tablets", key: ["Iron + Folic Acid", "Gentle on stomach", "Once-daily dosing"] }
      ]
    },
    {
      name: "Pediatrics",
      items: [
        { name: "ParaKids", form: "Syrup", key: ["Palatable", "Weight-based dosing", "Rapid relief from fever"] }
      ]
    },
    {
      name: "Gastro",
      items: [
        { name: "ProGut", form: "Capsules", key: ["Multistrain probiotics", "Supports gut balance", "Well-tolerated"] }
      ]
    }
  ];
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="mb-4 text-4xl font-bold">Products</h1>
      <p className="mb-8 text-lg text-muted">
        Explore our portfolio across key therapeutic areas. Each product includes regulatory documents on request.
      </p>
      {groups.map(g => (
        <div key={g.name} className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold text-primary">{g.name}</h2>
          {g.items.map(i => (
            <div key={i.name} className="card mb-4">
              <h3 className="text-xl font-semibold">{i.name}</h3>
              <p className="text-sm text-muted">{i.form}</p>
              <ul className="mt-2 list-disc pl-5 text-sm text-muted">
                {i.key.map(k => (
                  <li key={k}>{k}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
      <div className="text-center">
        <a href="/contact" className="btn-primary">Request Product Dossier</a>
      </div>
    </div>
  );
}
