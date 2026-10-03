"use client";

import { useState } from "react";
import Link from "next/link";
import { categories } from "../lib/articles";

export default function Navbar() {
  const [dropOpen, setDropOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container nav-inner">
        <Link href="/" className="brand">
          News<span className="five">5</span>
        </Link>
        <div className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/artikel">Artikel</Link>
          <div
            className={`drop ${dropOpen ? "open" : ""}`}
            onMouseEnter={() => setDropOpen(true)}
            onMouseLeave={() => setDropOpen(false)}
          >
            <button onClick={() => setDropOpen((v) => !v)}>
              Kategori ▾
            </button>
            <div className="drop-menu">
              {categories.map((c) => (
                <Link
                  key={c.slug}
                  href={`/kategori/${c.slug}`}
                  onClick={() => setDropOpen(false)}
                >
                  <span
                    className="cat-dot"
                    style={{ background: c.color }}
                  />
                  {c.name}
                </Link>
              ))}
              <Link href="/artikel" onClick={() => setDropOpen(false)}>
                <span
                  className="cat-dot"
                  style={{ background: "#6d28d9" }}
                />
                Semua Kategori
              </Link>
            </div>
          </div>
          <Link href="/tentang">Tentang</Link>
          <Link href="/kontak">Kontak</Link>
        </div>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <Link href="/artikel" className="nav-search">
            <span>🔍</span> Cari berita…
          </Link>
          <button
            className="burger"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Menu"
          >
            ☰
          </button>
        </div>
      </div>
      <div className={`mobile-menu ${mobileOpen ? "open" : ""}`}>
        <Link href="/" onClick={() => setMobileOpen(false)}>
          Home
        </Link>
        <Link href="/artikel" onClick={() => setMobileOpen(false)}>
          Artikel
        </Link>
        {categories.map((c) => (
          <Link
            key={c.slug}
            href={`/kategori/${c.slug}`}
            onClick={() => setMobileOpen(false)}
          >
            Kategori: {c.name}
          </Link>
        ))}
        <Link href="/tentang" onClick={() => setMobileOpen(false)}>
          Tentang
        </Link>
        <Link href="/kontak" onClick={() => setMobileOpen(false)}>
          Kontak
        </Link>
      </div>
    </nav>
  );
}
