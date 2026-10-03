"use client";

import { useState } from "react";
import Link from "next/link";
import { categories } from "../lib/articles";
import { IconSearch, IconMenu, IconClose, IconChevron } from "./icons";

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
            <button
              onClick={() => setDropOpen((v) => !v)}
              aria-expanded={dropOpen}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                minHeight: 44,
              }}
            >
              Kategori
              <span
                style={{
                  display: "inline-flex",
                  transition: "transform .2s",
                  transform: dropOpen ? "rotate(180deg)" : "none",
                  fontSize: 13,
                }}
              >
                <IconChevron />
              </span>
            </button>
            <div className="drop-menu">
              {categories.map((c) => (
                <Link
                  key={c.slug}
                  href={`/kategori/${c.slug}`}
                  onClick={() => setDropOpen(false)}
                >
                  <span className="cat-dot" style={{ background: c.color }} />
                  {c.name}
                </Link>
              ))}
              <Link href="/artikel" onClick={() => setDropOpen(false)}>
                <span className="cat-dot" style={{ background: "#6d28d9" }} />
                Semua Kategori
              </Link>
            </div>
          </div>
          <Link href="/tentang">Tentang</Link>
          <Link href="/kontak">Kontak</Link>
        </div>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <Link href="/artikel" className="nav-search" aria-label="Cari berita">
            <IconSearch />
            <span>Cari berita…</span>
          </Link>
          <button
            className="burger"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Menu navigasi"
            style={{ minWidth: 46, minHeight: 46 }}
          >
            {mobileOpen ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </div>
      <div className={`mobile-menu ${mobileOpen ? "open" : ""}`}>
        <Link href="/" onClick={() => setMobileOpen(false)}>
          Home
        </Link>
        <Link href="/artikel" onClick={() => setMobileOpen(false)}>
          Semua Artikel
        </Link>
        {categories.map((c) => (
          <Link
            key={c.slug}
            href={`/kategori/${c.slug}`}
            onClick={() => setMobileOpen(false)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              minHeight: 52,
            }}
          >
            <span className="cat-dot" style={{ background: c.color }} />
            {c.name}
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
