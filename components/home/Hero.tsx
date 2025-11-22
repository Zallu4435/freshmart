"use client";

import { useRef, useState, useEffect } from "react";
import { SHOP_URL } from "@/lib/constants";

export function Hero() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    // Try to start playback when mounted
    const playSafe = () => {
      const p = v.play();
      if (p && typeof p.then === "function") {
        // Suppress autoplay rejection noise; we'll rely on UI state instead
        p.catch(() => {});
      }
    };

    if (v.readyState >= 2) {
      setIsVideoLoaded(true);
      playSafe();
    }

    const onCanPlay = () => {
      setIsVideoLoaded(true);
      playSafe();
    };

    v.addEventListener("canplay", onCanPlay);
    return () => v.removeEventListener("canplay", onCanPlay);
  }, []);

  return (
    <section className="relative min-h-dvh overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-slate-950" />

        <video
          ref={videoRef}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
            isVideoLoaded ? "opacity-100" : "opacity-0"
          }`}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          controls={false}
          poster="/hero-poster.jpg"
        >
          <source src="/Fresh_Mart_Hero_Video_Generation.mp4" type="video/mp4" />
        </video>

        {/* Overlay for text contrast */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content – Lulu style */}
      <div className="relative z-10 flex min-h-screen items-end pb-24 md:pb-32">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-light leading-tight text-white md:text-5xl lg:text-6xl">
              Fresh Mart – your neighborhood grocery destination
            </h1>

            <a
              href={SHOP_URL}
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-white/20 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition-all hover:bg-white/30"
            >
              EXPLORE OUR STORE
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
