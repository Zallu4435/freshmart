// src/components/home/CategoryGallery.tsx

export function CategoryGallery() {
  return (
    <section className="bg-white pb-14">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="overflow-hidden rounded-xl">
            <img
              src="/images/store-aisle-groceries.jpg"
              alt="Grocery aisles with staples neatly arranged"
              className="h-40 w-full object-cover transition hover:scale-105"
            />
          </div>
          <div className="overflow-hidden rounded-xl">
            <img
              src="/images/store-fresh-produce.jpg"
              alt="Fresh fruits and vegetables section in Fresh Mart"
              className="h-40 w-full object-cover transition hover:scale-105"
            />
          </div>
          <div className="overflow-hidden rounded-xl">
            <img
              src="/images/store-dairy-snacks.jpg"
              alt="Dairy chillers and snack shelves in Fresh Mart"
              className="h-40 w-full object-cover transition hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
