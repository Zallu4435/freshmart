import { SHOP_URL } from "@/lib/constants";

export function CTASection() {
  return (
    <section className="bg-slate-900 py-14">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-4 px-4 text-white md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl">
          <h2 className="text-xl font-semibold">
            Ready to shop with Fresh Mart online?
          </h2>
          <p className="mt-2 text-sm text-slate-200">
            Continue to our main store to place your order, check offers, and
            see live availability.
          </p>
        </div>

        <a
          href={SHOP_URL}
          className="inline-flex items-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-slate-900 shadow-md transition hover:bg-slate-100"
        >
          Go to online store
        </a>
      </div>
    </section>
  );
}
