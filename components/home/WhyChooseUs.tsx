const points = [
  {
    title: "Freshness guaranteed",
    desc: "Stock rotations and daily checks so your groceries are always fresh.",
  },
  {
    title: "Neighborhood convenience",
    desc: "Central Kuniyil Pedika location with easy access and quick checkouts.",
  },
  {
    title: "Straightforward pricing",
    desc: "Transparent MRP, visible offers, and a clear bill‑first policy.",
  },
  {
    title: "Friendly, local team",
    desc: "Staff who recognise regulars, help you find items, and support you on WhatsApp.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold text-slate-900">
            Why families choose Fresh Mart
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            A modern supermarket look with the comfort and honesty of a local
            neighborhood store.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {points.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-emerald-300 hover:shadow-md"
            >
              <h3 className="text-sm font-semibold text-slate-900">
                {p.title}
              </h3>
              <p className="mt-2 text-xs text-slate-600">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
