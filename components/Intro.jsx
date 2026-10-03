"use client";

import { useEffect, useState } from "react";
import { T } from "./Lang";

/**
 * Splash intro: dimainkan sekali per sesi, sebelum konten inti tampil.
 */
export default function Intro() {
  const [show, setShow] = useState(false);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("news5-intro")) return;
    setShow(true);
    const t1 = setTimeout(() => setLeaving(true), 1150);
    const t2 = setTimeout(() => {
      setShow(false);
      try {
        sessionStorage.setItem("news5-intro", "1");
      } catch {}
    }, 1700);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (!show) return null;

  return (
    <div className={`intro ${leaving ? "intro-leave" : ""}`} aria-hidden="true">
      <div className="intro-inner">
        <div className="intro-logo">
          {"News".split("").map((ch, i) => (
            <span key={i} style={{ animationDelay: `${i * 70}ms` }}>
              {ch}
            </span>
          ))}
          <span className="intro-five" style={{ animationDelay: "280ms" }}>
            5
          </span>
        </div>
        <div className="intro-tag">
          <span style={{ animationDelay: "450ms" }}>
            <T k="intro.tag" />
          </span>
        </div>
        <div className="intro-bar">
          <div className="intro-bar-fill" />
        </div>
      </div>
    </div>
  );
}
