export default function ResourcesPage() {
  const posts = [
    {
      title: "Iron Supplementation: Adherence Matters",
      summary: "Formulation strategies to improve tolerability and adherence in anemia management."
    },
    {
      title: "Pediatric Dosing: Getting It Right",
      summary: "Weight-based dosing, palatability, and caregiver guidance."
    }
  ];
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="mb-8 text-4xl font-bold">News & Insights</h1>
      <div className="space-y-6">
        {posts.map(p => (
          <article key={p.title} className="card">
            <h2 className="mb-2 text-xl font-semibold text-primary">{p.title}</h2>
            <p className="text-muted">{p.summary}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
