export default function ContactPage() {
  const fields = ["Name", "Company", "Email", "Phone", "Message (Product/Volume/Location)"];
  return (
    <div className="mx-auto max-w-xl px-4 py-16">
      <h1 className="mb-4 text-4xl font-bold">Partner With Astra Bio Care</h1>
      <p className="mb-8 text-lg text-muted">
        For bulk orders, institutional supplies, and distribution partnerships, reach out to our team.
      </p>
      <form className="space-y-4">
        {fields.map(f => (
          <div key={f} className="flex flex-col">
            <label className="mb-1 text-sm font-medium text-text">{f}</label>
            {f === "Message (Product/Volume/Location)" ? (
              <textarea className="rounded-md border border-border p-2" rows={4}></textarea>
            ) : (
              <input type="text" className="rounded-md border border-border p-2" />
            )}
          </div>
        ))}
        <button type="submit" className="btn-primary">Send Enquiry</button>
      </form>
    </div>
  );
}
