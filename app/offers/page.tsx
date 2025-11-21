export default function OffersPage() {
  const offers = [
    {
      title: "Weekend fresh deals",
      desc: "Special prices on selected fruits, vegetables, and dairy every Friday to Sunday.",
      tag: "In‑store",
    },
    {
      title: "Family saver packs",
      desc: "Combo packs for rice, atta, oil, and pulses to simplify your monthly shopping.",
      tag: "In‑store & online",
    },
    {
      title: "Back to school offers",
      desc: "Discounts on notebooks, pens, and basic stationery during school reopening season.",
      tag: "Seasonal",
    },
  ];

  return (
    <main className="bg-white">
      {/* Header */}
      <section className="border-b bg-slate-50/80 py-14">
        <div className="mx-auto max-w-5xl px-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
            Offers & updates
          </p>
          <h1 className="mt-2 text-3xl font-semibold text-slate-900">
            Promotions from Fresh Mart
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-slate-600">
            Keep an eye on this space for weekend offers, festival specials, and
            stationery deals from your neighborhood supermarket.
          </p>
        </div>
      </section>

      {/* Offers list */}
      <section className="py-14">
        <div className="mx-auto max-w-5xl px-4 space-y-6">
          {offers.map((o) => (
            <article
              key={o.title}
              className="rounded-2xl border border-orange-100 bg-orange-50/50 p-5 shadow-sm"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h2 className="text-sm font-semibold text-slate-900">
                  {o.title}
                </h2>
                <span className="rounded-full bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-orange-500">
                  {o.tag}
                </span>
              </div>
              <p className="mt-2 text-xs text-slate-700">{o.desc}</p>
            </article>
          ))}

          <p className="pt-2 text-xs text-slate-600">
            Latest offers will also appear on our main online store and social
            channels when we go live. In‑store prices and availability may vary.
          </p>
        </div>
      </section>
    </main>
  );
}
