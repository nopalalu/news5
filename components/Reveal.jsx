"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Bungkus konten agar muncul dengan animasi saat masuk viewport.
 * variant: "up" (default) | "wipe" | "left" | "mask"
 */
export default function Reveal({
  children,
  delay = 0,
  className = "",
  variant = "up",
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const variantClass =
    variant === "up"
      ? ""
      : variant === "wipe"
        ? "reveal-wipe"
        : variant === "left"
          ? "reveal-left"
          : variant === "mask"
            ? "reveal-mask"
            : "";

  return (
    <div
      ref={ref}
      className={`reveal ${variantClass} ${visible ? "visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
