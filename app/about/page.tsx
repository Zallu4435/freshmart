// src/app/about/page.tsx
export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* Page header */}
      <section className="border-b bg-slate-50/80 py-14">
        <div className="mx-auto max-w-5xl px-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
            About us
          </p>
          <h1 className="mt-2 text-3xl font-semibold text-slate-900">
            The story behind Fresh Mart
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-slate-600">
            Fresh Mart is a neighborhood supermarket created to bring all your
            daily essentials, fresh produce, and household needs together under
            one friendly, reliable roof.
          </p>
        </div>
      </section>

      {/* Story + values */}
      <section className="py-14">
        <div className="mx-auto flex max-w-5xl flex-col gap-10 px-4 md:flex-row">
          {/* Left: story */}
          <div className="md:w-1/2">
            <h2 className="text-xl font-semibold text-slate-900">
              Our story
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              Started in Kuniyil Pedika, Fresh Mart was built to give families
              a clean, modern grocery experience with fair pricing and
              consistent availability of everyday essentials.
            </p>
            <p className="mt-3 text-sm text-slate-600">
              We carefully curate brands, work with local suppliers, and keep
              our shelves updated so you can complete your shopping in one
              visit—whether it&apos;s a full monthly list or a quick stop for
              tonight&apos;s dinner.
            </p>

            {/* Team / store image */}
            <div className="mt-6 overflow-hidden rounded-2xl">
              <img
                src="/images/store-team.jpg"
                alt="Fresh Mart team inside the store"
                className="h-52 w-full object-cover"
              />
            </div>

            {/* Stats cards */}
            <div className="mt-6 grid gap-4 text-xs text-slate-600 sm:grid-cols-3">
              <div className="rounded-xl bg-slate-50 px-4 py-3">
                <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                  Since
                </p>
                <p className="mt-1 text-lg font-semibold text-slate-900">
                  2025
                </p>
                <p className="mt-1">
                  Built for families, hostels, and small offices nearby.
                </p>
              </div>
              <div className="rounded-xl bg-slate-50 px-4 py-3">
                <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                  Focus
                </p>
                <p className="mt-1 text-lg font-semibold text-slate-900">
                  Fresh & fair
                </p>
                <p className="mt-1">
                  Fresh stock, clear pricing, and a comfortable store layout.
                </p>
              </div>
              <div className="rounded-xl bg-slate-50 px-4 py-3">
                <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                  Location
                </p>
                <p className="mt-1 text-lg font-semibold text-slate-900">
                  Kuniyil Pedika
                </p>
                <p className="mt-1">
                  Easy to reach with convenient access and parking.
                </p>
              </div>
            </div>
          </div>

          {/* Right: what we stand for */}
          <div className="md:w-1/2">
            <h2 className="text-xl font-semibold text-slate-900">
              What we stand for
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              A few simple promises guide how we run Fresh Mart every single
              day.
            </p>

            <div className="mt-5 grid gap-4">
              {[
                {
                  title: "Freshness first",
                  desc: "Daily checks on produce, dairy, and packaged goods so what you pick is always fresh.",
                },
                {
                  title: "Honest pricing",
                  desc: "Clear MRP, visible offers, and transparent billing at the counter—no surprises.",
                },
                {
                  title: "Clean & safe store",
                  desc: "Well‑lit aisles, organised shelves, and hygienic handling of food items.",
                },
                {
                  title: "Neighborhood focus",
                  desc: "A local team that understands what nearby families, hostels, and offices really need.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-slate-100 bg-slate-50/80 p-4 shadow-sm"
                >
                  <h3 className="text-sm font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
