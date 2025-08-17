export default function Quality() {
  return (
    <div className="mx-auto max-w-3xl space-y-6 px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-semibold">Quality &amp; Compliance</h1>
      <p>
        We align with WHO-GMP and national regulations through documented SOPs, validated processes, and batch-wise records.
      </p>
      <ul className="list-disc pl-5 space-y-2">
        {[
          "Vendor qualification and raw material traceability",
          "In-process controls and finished-product testing",
          "Stability studies and change-control governance",
          "Pharmacovigilance and complaint handling",
        ].map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    </div>
  );
}
