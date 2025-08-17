export default function TherapeuticAreasPage() {
  const sections = [
    { id: "gynecology", title: "Gynecology", body: "Nutritional and hormonal support including prenatal vitamins, iron & folic acid combinations, and PCOS support." },
    { id: "pediatrics", title: "Pediatrics", body: "Evidence-based formulations for fever, cough & cold, and nutritional supplementation in pediatric populations." },
    { id: "gastro", title: "Gastroenterology", body: "Acid suppression, mucosal protection, and probiotic support with attention to long-term tolerance." },
    { id: "infection", title: "Infection Management", body: "Broad coverage with stewardship-friendly dosing and clarity on indications/contraindications." }
  ];
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="mb-8 text-4xl font-bold">Therapeutic Focus</h1>
      {sections.map(s => (
        <section key={s.id} id={s.id} className="mb-8">
          <h2 className="mb-2 text-2xl font-semibold text-primary">{s.title}</h2>
          <p className="text-lg text-muted">{s.body}</p>
        </section>
      ))}
    </div>
  );
}
