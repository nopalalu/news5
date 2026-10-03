"use client";

import { useEffect, useState } from "react";
import { IconLink, IconCheck } from "./icons";

export function ProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      setProgress(max > 0 ? Math.min(100, (el.scrollTop / max) * 100) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="progress">
      <div className="progress-fill" style={{ width: `${progress}%` }} />
    </div>
  );
}

export function ShareButtons({ title }) {
  const [copied, setCopied] = useState(false);

  const share = async (network) => {
    const url = window.location.href;
    if (network === "copy") {
      try {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch {}
      return;
    }
    const text = encodeURIComponent(title);
    const link =
      network === "x"
        ? `https://twitter.com/intent/tweet?text=${text}&url=${encodeURIComponent(url)}`
        : `https://wa.me/?text=${text}%20${encodeURIComponent(url)}`;
    window.open(link, "_blank", "noopener,width=600,height=540");
  };

  return (
    <div className="share-row">
      <span className="share-label">Bagikan:</span>
      <button className="share-btn" onClick={() => share("x")}>
        <b>X</b>
      </button>
      <button className="share-btn" onClick={() => share("wa")}>
        <b>WA</b>
      </button>
      <button
        className={`share-btn ${copied ? "copied" : ""}`}
        onClick={() => share("copy")}
      >
        {copied ? <IconCheck /> : <IconLink />}
        <span>{copied ? "Tersalin!" : "Salin tautan"}</span>
      </button>
    </div>
  );
}
