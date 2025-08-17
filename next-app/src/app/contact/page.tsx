'use client';

import { FormEvent, useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(Object.fromEntries(formData)),
      headers: { 'Content-Type': 'application/json' },
    });
    setSubmitted(true);
  }

  return (
    <div className="mx-auto max-w-xl px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-semibold mb-4">Contact &amp; Bulk Enquiries</h1>
      <p className="mb-6">For quotes, distribution partnerships, or regulatory documents, reach out to our team.</p>
      {submitted ? (
        <p className="text-success">Thank you. We will respond within 2 business days.</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input name="name" placeholder="Name" className="w-full rounded-md border px-3 py-2" required />
          <input name="email" type="email" placeholder="Email" className="w-full rounded-md border px-3 py-2" required />
          <input name="phone" placeholder="Phone" className="w-full rounded-md border px-3 py-2" />
          <input name="company" placeholder="Company" className="w-full rounded-md border px-3 py-2" />
          <textarea name="message" placeholder="Message" className="w-full rounded-md border px-3 py-2" rows={4} required />
          <button type="submit" className="rounded-md bg-primary px-5 py-2 text-white">Send</button>
          <p className="text-xs text-gray-600">We respond within 2 business days. Your information is kept confidential.</p>
        </form>
      )}
    </div>
  );
}
