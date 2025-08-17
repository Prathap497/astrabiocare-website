export default function QualityCompliancePage() {
  const pillars = [
    { title: "GMP Practices", desc: "SOP-driven manufacturing with in-process controls, deviation handling, and CAPA tracking." },
    { title: "Validation", desc: "Process and cleaning validation, equipment qualification, and stability programs." },
    { title: "Documentation", desc: "Comprehensive COAs, batch MFR/BMR, and regulatory dossiers available on request." },
    { title: "Pharmacovigilance", desc: "Adverse event capture and signal detection with periodic safety updates." }
  ];
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="mb-8 text-4xl font-bold">Quality & Compliance</h1>
      <div className="grid gap-6">
        {pillars.map(p => (
          <div key={p.title} className="card">
            <h2 className="mb-2 text-xl font-semibold text-primary">{p.title}</h2>
            <p className="text-muted">{p.desc}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <a href="/resources" className="btn-primary">View Certificates</a>
      </div>
    </div>
  );
}
