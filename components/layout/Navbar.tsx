"use client";

import Link from "next/link";
import { useState } from "react";
import { SHOP_URL } from "@/lib/constants";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about" },
  { label: "Store experience", href: "/store-experience" },
  { label: "Offers", href: "/offers" },
  { label: "Visit & contact", href: "/contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
        {/* Brand lockup */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex items-center gap-1 rounded-full bg-slate-900 px-3 py-1">
            <span className="rounded-full bg-green-500 px-2 py-0.5 text-xs font-semibold text-white">
              Fresh
            </span>
            <span className="text-xs font-semibold text-orange-400">
              Mart
            </span>
          </div>
          <div className="hidden flex-col leading-tight sm:flex">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
              Neighborhood supermarket
            </span>
            <span className="text-xs text-slate-400">
              Daily fresh groceries & home essentials
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-2 text-sm font-medium text-slate-700 md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative rounded-full px-3 py-1.5 transition-colors hover:text-slate-900"
            >
              <span>{item.label}</span>
              <span className="pointer-events-none absolute inset-x-1 -bottom-1 h-0.5 scale-x-0 rounded-full bg-orange-400 transition-transform duration-200 ease-out group-hover:scale-x-100 md:group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href={SHOP_URL}
          className="hidden items-center gap-2 rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:translate-y-[1px] hover:bg-orange-600 md:inline-flex"
        >
          <span>Order online</span>
        </a>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate-700 md:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-[2px] w-4 rounded-full bg-slate-800 transition-all duration-200 ${
              open ? "translate-y-[5px] rotate-45" : "-translate-y-[4px]"
            }`}
          />
          <span
            className={`block h-[2px] w-4 rounded-full bg-slate-800 transition-all duration-200 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-[2px] w-4 rounded-full bg-slate-800 transition-all duration-200 ${
              open ? "-translate-y-[5px] -rotate-45" : "translate-y-[4px]"
            }`}
          />
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden transition-[max-height,opacity] duration-200 ease-out ${
          open ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden border-t border-slate-200 bg-white`}
      >
        <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3 text-sm font-medium text-slate-800">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-2 py-2 hover:bg-slate-100"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={SHOP_URL}
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-orange-500 px-4 py-2 text-center text-sm font-semibold text-white shadow-md hover:bg-orange-600"
          >
            Order online
          </a>
        </nav>
      </div>
    </header>
  );
}
