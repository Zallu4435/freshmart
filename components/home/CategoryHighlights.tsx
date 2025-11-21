const categories = [
  {
    name: "Groceries & staples",
    desc: "Rice, atta, pulses, oils, masalas, sugar, salt, and everything for your daily cooking.",
  },
  {
    name: "Fruits & vegetables",
    desc: "Seasonal, everyday produce so your meals stay fresh and colourful.",
  },
  {
    name: "Dairy & frozen",
    desc: "Milk, curd, paneer, cheese, butter, ice creams, and frozen favourites.",
  },
  {
    name: "Snacks & beverages",
    desc: "Biscuits, namkeen, chips, juices, soft drinks, and quick treats.",
  },
  {
    name: "Home & personal care",
    desc: "Detergents, cleaners, soaps, shampoos, and toiletries for home and family.",
  },
  {
    name: "Stationery & more",
    desc: "Notebooks, pens, art supplies, and small office essentials.",
  },
];

export function CategoryHighlights() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold text-slate-900">
            Everything you need in one supermarket
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            From monthly grocery planning to last‑minute snack runs, Fresh Mart
            keeps the shelves ready for homes, hostels, and small offices.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="group rounded-2xl border border-slate-100 bg-slate-50/60 p-5 shadow-sm transition hover:-translate-y-1 hover:border-emerald-300 hover:bg-white"
            >
              <h3 className="text-sm font-semibold text-slate-900">
                {cat.name}
              </h3>
              <p className="mt-2 text-xs text-slate-600">{cat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
