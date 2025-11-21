// src/app/contact/page.tsx
import { SHOP_URL } from "@/lib/constants";

export default function ContactPage() {
  return (
    <main className="bg-white" id="visit">
      {/* Header */}
      <section className="border-b bg-slate-50/80 py-14">
        <div className="mx-auto max-w-5xl px-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
            Visit & contact
          </p>
          <h1 className="mt-2 text-3xl font-semibold text-slate-900">
            Visit Fresh Mart or reach us directly
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-slate-600">
            Find our location, check store timings, and get in touch for quick
            questions or bulk orders.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-14">
        <div className="mx-auto flex max-w-5xl flex-col gap-10 px-4 md:flex-row">
          {/* Left: info cards */}
          <div className="flex-1 space-y-5 text-sm text-slate-700">
            <div className="rounded-2xl border border-slate-100 bg-slate-50/80 p-4">
              <h2 className="text-base font-semibold text-slate-900">
                Store address
              </h2>
              <p className="mt-2 text-sm">
                Fresh Mart
                <br />
                Kuniyil Pedika
                <br />
                [City, State, PIN]
              </p>
              <p className="mt-2 text-xs text-slate-500">
                Landmark: Near [landmark or junction].
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-100 bg-slate-50/80 p-4">
                <h2 className="text-base font-semibold text-slate-900">
                  Timings
                </h2>
                <p className="mt-2 text-sm">
                  Monday – Sunday
                  <br />
                  7:00 AM – 10:00 PM
                </p>
                <p className="mt-2 text-xs text-slate-500">
                  Festival timings will be announced on our social channels.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-100 bg-slate-50/80 p-4">
                <h2 className="text-base font-semibold text-slate-900">
                  Contact
                </h2>
                <p className="mt-2 text-sm">
                  Phone: +91‑XXXXXXXXXX
                  <br />
                  WhatsApp: +91‑XXXXXXXXXX
                  <br />
                  Email: hello@freshmart.in
                </p>
                <p className="mt-2 text-xs text-slate-500">
                  Call or message for quick queries and bulk orders.
                </p>
              </div>
            </div>

            <a
              href={SHOP_URL}
              className="inline-flex items-center justify-center rounded-full bg-orange-500 px-7 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-orange-600"
            >
              Go to online store
            </a>
          </div>

          {/* Right: storefront + map */}
          <div className="flex-1">
            <div className="mb-4 overflow-hidden rounded-2xl">
              <img
                src="/images/store-front-evening.jpg"
                alt="Fresh Mart storefront in the evening"
                className="h-40 w-full object-cover"
              />
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm">
              <div className="aspect-video">
                <iframe
                  title="Fresh Mart location"
                  src="https://www.google.com/maps/embed?pb="
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full w-full border-0"
                />
              </div>
            </div>

            <p className="mt-3 text-xs text-slate-500">
              Use the map above to get directions to Fresh Mart in Kuniyil
              Pedika.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
