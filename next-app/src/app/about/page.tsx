export default function About() {
  return (
    <div className="mx-auto max-w-3xl space-y-6 px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-semibold">Who We Are</h1>
      <p>
        Astra Bio Care Pvt Ltd is an Indian pharmaceutical company focused on essential generics and branded formulations.
      </p>
      <p>
        We invest in robust QA systems, compliant facilities, and people-first operations to ensure consistent, safe, and effective products.
      </p>
      <ul className="mt-4 grid gap-4 md:grid-cols-3">
        {[
          "10+ therapeutic areas",
          "Pan-India partners",
          "Customer-first support",
        ].map((s) => (
          <li key={s} className="rounded-2xl bg-white p-4 text-center shadow">{s}</li>
        ))}
      </ul>
    </div>
  );
}
