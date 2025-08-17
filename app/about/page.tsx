export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="mb-6 text-4xl font-bold">Science-Led. Compliance-Focused.</h1>
      <p className="mb-4 text-lg text-muted">
        Astra Bio Care is focused on therapies that impact everyday healthcare—women’s health, child health, gastro care, and infection control. We combine strong R&D partnerships with reliable manufacturing to ensure consistent quality.
      </p>
      <p className="mb-8 text-lg text-muted">
        Our operations adhere to GMP, supported by validated processes, stability studies, and batch traceability. We emphasize risk management, continual improvement, and transparent documentation.
      </p>
      <div className="grid grid-cols-3 gap-4 text-center">
        {[
          { label: "Formulations", value: "60+" },
          { label: "States Served", value: "20+" },
          { label: "On-time Delivery", value: "97%" }
        ].map(s => (
          <div key={s.label} className="card">
            <p className="text-2xl font-bold text-primary">{s.value}</p>
            <p className="text-sm text-muted">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
