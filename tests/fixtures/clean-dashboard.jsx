import { Download } from "lucide-react";

export default function Billing() {
  return (
    <main className="min-h-screen bg-neutral-50 p-8">
      <h1 className="text-2xl font-medium text-neutral-900">October 2026</h1>
      <section className="mt-6 grid grid-cols-3 gap-4">
        <div className="rounded-xl bg-white p-6">
          <p className="text-sm text-neutral-600">Billed this month</p>
          <p className="text-3xl font-medium tabular-nums">$48,210</p>
          <p className="text-sm text-neutral-600">+12% vs September</p>
        </div>
      </section>
      <input placeholder="INV-0142" aria-label="Search invoices" />
      <button className="transition-colors hover:bg-neutral-100">
        <Download aria-hidden="true" /> Export invoices
      </button>
    </main>
  );
}
