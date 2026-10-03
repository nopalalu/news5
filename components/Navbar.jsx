"use client";

import { useState } from "react";
import Link from "next/link";
import { categories } from "../lib/articles";
import { IconSearch, IconMenu, IconClose, IconChevron } from "./icons";

function CategoryDrop() {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`drop ${open ? "open" : ""}`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="true"
      >
        Kategori
        <span
          style={{
            display: "inline-flex",
            transition: "transform .2s",
            transform: open ? "rotate(180deg)" : "none",
            fontSize: 13,
            marginLeft: 6,
          }}
        >
          <IconChevron />
        </span>
      </button>
      <div className="drop-menu" role="menu">
        {categories.map((c) => (
          <Link
            key={c.slug}
            href={`/kategori/${c.slug}`}
            onClick={() => setOpen(false)}
            role="menuitem"
          >
            <span className="tick" />
            {c.name}
          </Link>
        ))}
        <Link href="/artikel" onClick={() => setOpen(false)} role="menuitem">
          <span className="tick" />
          Semua Kategori
        </Link>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const today = new Date().toLocaleDateString("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <header className="masthead">
        <div className="container">
          <div className="mast-top">
            <span>
              <span className="live-dot" />
              {today}
            </span>
            <span>Edisi Pagi — Terbit Setiap Hari</span>
            <span>news5.id</span>
          </div>
          <Link href="/" className="wordmark" aria-label="News5 — beranda">
            News<span className="five">5</span>
          </Link>
          <div className="wordmark-sub">
            Kabar cepat · Tepat · Terpercaya
          </div>
        </div>
      </header>

      <div className="slimnav">
        <div className="container">
          <Link href="/" className="mini-brand" aria-label="News5 — beranda">
            N<span className="five">5</span>
          </Link>
          <nav className="slim-links" aria-label="Navigasi utama">
            <Link href="/">Home</Link>
            <Link href="/artikel">Artikel</Link>
            <CategoryDrop />
            <Link href="/tentang">Tentang</Link>
            <Link href="/kontak">Kontak</Link>
          </nav>
          <div className="slim-right">
            <Link
              href="/artikel"
              className="slim-search"
              aria-label="Cari berita"
            >
              <IconSearch />
              <span>Cari berita…</span>
            </Link>
            <button
              className="burger"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Menu navigasi"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <IconClose /> : <IconMenu />}
            </button>
          </div>
        </div>
        <nav
          className={`slim-mobile ${mobileOpen ? "open" : ""}`}
          aria-label="Menu navigasi seluler"
        >
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
            >
              <span className="tick" />
              {c.name}
            </Link>
          ))}
          <Link href="/tentang" onClick={() => setMobileOpen(false)}>
            Tentang
          </Link>
          <Link href="/kontak" onClick={() => setMobileOpen(false)}>
            Kontak
          </Link>
        </nav>
      </div>
    </>
  );
}
