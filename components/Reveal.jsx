"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Reveal anti-gagal: konten KELIHATAN by default.
 * IntersectionObserver hanya menambahkan class "play" untuk memicu
 * animasi masuk. Kalau JS/IO gagal, konten tetap tampil.
 *
 * variant: "up" (default) | "left" | "mask" | "wipe" | "stamp" (kartu)
 */
export default function Reveal({
  children,
  delay = 0,
  className = "",
  variant = "up",
}) {
  const ref = useRef(null);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setPlay(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const v =
    variant === "left"
      ? "rv-left"
      : variant === "mask"
        ? "rv-mask"
        : variant === "wipe"
          ? "rv-wipe"
          : variant === "stamp"
            ? "rv-stamp"
            : "rv-up";

  return (
    <div
      ref={ref}
      className={`rv ${v}${play ? " play" : ""} ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
