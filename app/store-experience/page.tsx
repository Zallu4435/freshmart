// src/app/store-experience/page.tsx
export default function StoreExperiencePage() {
  const sections = [
    {
      name: "Fresh produce zone",
      desc: "Bright section for fruits and vegetables with clear labelling and regular restocking.",
    },
    {
      name: "Daily essentials",
      desc: "Grains, flours, oils, and spices arranged so you can complete monthly shopping quickly.",
    },
    {
      name: "Chilled & frozen",
      desc: "Dedicated chillers for milk, curd, paneer, cheese, beverages, and frozen items.",
    },
    {
      name: "Snacks & beverages wall",
      desc: "Chips, biscuits, chocolates, juices, and soft drinks in one long, easy‑browsing aisle.",
    },
    {
      name: "Home & personal care",
      desc: "Detergents, cleaners, soaps, shampoos, and toiletries grouped by daily use.",
    },
    {
      name: "Quick checkout",
      desc: "Multiple billing counters with digital payments and UPI support for a faster exit.",
    },
  ];

  return (
    <main className="bg-white">
      {/* Header */}
      <section className="border-b bg-slate-50/80 py-14">
        <div className="mx-auto max-w-5xl px-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
            Store experience
          </p>
          <h1 className="mt-2 text-3xl font-semibold text-slate-900">
            Inside Fresh Mart
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-slate-600">
            A clean, organised layout designed so you can find everything
            quickly and shop comfortably with your family.
          </p>
        </div>
      </section>

      {/* Gallery + sections */}
      <section className="py-14">
        <div className="mx-auto max-w-5xl px-4">
          {/* Image strip */}
          <div className="mb-8 grid gap-4 sm:grid-cols-3">
            <img
              src="/images/store-front-day.jpg"
              alt="Fresh Mart storefront during the day"
              className="h-40 w-full rounded-xl object-cover"
            />
            <img
              src="/images/store-inside-aisle.jpg"
              alt="Inside aisle of Fresh Mart with groceries"
              className="h-40 w-full rounded-xl object-cover"
            />
            <img
              src="/images/store-billing.jpg"
              alt="Fresh Mart billing counters"
              className="h-40 w-full rounded-xl object-cover"
            />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {sections.map((s) => (
              <article
                key={s.name}
                className="rounded-2xl border border-slate-100 bg-slate-50/80 p-5 shadow-sm transition hover:-translate-y-1 hover:border-emerald-300 hover:bg-white"
              >
                <h2 className="text-sm font-semibold text-slate-900">
                  {s.name}
                </h2>
                <p className="mt-2 text-xs text-slate-600">{s.desc}</p>
              </article>
            ))}
          </div>

          <p className="mt-8 text-xs text-slate-600">
            A full virtual walkthrough of the aisles will be added soon so you
            can explore Fresh Mart before you visit in person.
          </p>
        </div>
      </section>
    </main>
  );
}
