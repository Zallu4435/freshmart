import Link from "next/link";
import { SHOP_URL } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-200">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8 md:flex-row md:justify-between">
        {/* Brand + tagline */}
        <div className="space-y-3 md:max-w-sm">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 rounded-full bg-slate-900 px-3 py-1">
              <span className="rounded-full bg-green-500 px-2 py-0.5 text-xs font-semibold text-white">
                Fresh
              </span>
              <span className="text-xs font-semibold text-orange-400">
                Mart
              </span>
            </div>
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
              Neighborhood supermarket
            </span>
          </div>
          <p className="text-xs text-slate-400">
            Daily fresh groceries, snacks, and home essentials at your
            friendly corner mart in Kuniyil Pedika.
          </p>
          <a
            href={SHOP_URL}
            className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-4 py-2 text-xs font-semibold text-white shadow-md transition hover:translate-y-[1px] hover:bg-orange-600"
          >
            Order online
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        {/* Quick links */}
        <div className="grid flex-1 gap-6 text-xs sm:grid-cols-2 md:grid-cols-3">
          <div className="space-y-2">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-300">
              Store
            </h3>
            <ul className="space-y-1">
              <li>
                <Link href="/about" className="hover:text-orange-300">
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href="/store-experience"
                  className="hover:text-orange-300"
                >
                  Store experience
                </Link>
              </li>
              <li>
                <Link href="/offers" className="hover:text-orange-300">
                  Offers & updates
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-orange-300">
                  Visit & contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-300">
              Info
            </h3>
            <ul className="space-y-1">
              <li>
                <Link href="/privacy" className="hover:text-orange-300">
                  Privacy policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-orange-300">
                  Terms & conditions
                </Link>
              </li>
              <li>
                <span className="text-slate-400">
                  Open daily: 7:00 AM – 10:00 PM
                </span>
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-300">
              Connect
            </h3>
            <ul className="space-y-1">
              <li>
                <a href="tel:+91XXXXXXXXXX" className="hover:text-orange-300">
                  Call: +91‑XXXXXXXXXX
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/91XXXXXXXXXX"
                  className="hover:text-orange-300"
                >
                  WhatsApp us
                </a>
              </li>
              <li className="flex gap-3 pt-1">
                <a
                  href="#"
                  aria-label="Instagram"
                  className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-800 text-xs hover:bg-orange-500"
                >
                  IG
                </a>
                <a
                  href="#"
                  aria-label="Facebook"
                  className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-800 text-xs hover:bg-orange-500"
                >
                  Fb
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-4 text-[11px] text-slate-500 sm:flex-row">
          <p>© {year} Fresh Mart. All rights reserved.</p>
          <p className="text-[11px]">
            Built with Next.js & Tailwind CSS for a fast, modern shopping
            experience.
          </p>
        </div>
      </div>
    </footer>
  );
}
