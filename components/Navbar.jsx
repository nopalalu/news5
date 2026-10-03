"use client";

import { useState } from "react";
import Link from "next/link";
import { categories } from "../lib/articles";
import { IconSearch, IconMenu, IconClose, IconChevron } from "./icons";
import { useLang, T, LangToggle } from "./Lang";

function CategoryDrop() {
  const [open, setOpen] = useState(false);
  const { t } = useLang();
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
        <T k="nav.category" />
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
            {t(`cat.${c.slug}`)}
          </Link>
        ))}
        <Link href="/artikel" onClick={() => setOpen(false)} role="menuitem">
          <span className="tick" />
          <T k="nav.allCategories" />
        </Link>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang, t } = useLang();
  const today = new Date().toLocaleDateString(lang === "en" ? "en-US" : "id-ID", {
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
            <span>
              <T k="mast.edition" />
            </span>
            <span>news5.id</span>
          </div>
          <Link href="/" className="wordmark" aria-label="News5 — beranda">
            News<span className="five">5</span>
          </Link>
          <div className="wordmark-sub">
            <T k="mast.tagline" />
          </div>
        </div>
      </header>

      <div className="slimnav">
        <div className="container">
          <Link href="/" className="mini-brand" aria-label="News5 — beranda">
            N<span className="five">5</span>
          </Link>
          <nav className="slim-links" aria-label="Navigasi utama">
            <Link href="/">
              <T k="nav.home" />
            </Link>
            <Link href="/artikel">
              <T k="nav.articles" />
            </Link>
            <CategoryDrop />
            <Link href="/tentang">
              <T k="nav.about" />
            </Link>
            <Link href="/kontak">
              <T k="nav.contact" />
            </Link>
          </nav>
          <div className="slim-right">
            <LangToggle />
            <Link
              href="/artikel"
              className="slim-search"
              aria-label={t("nav.search")}
            >
              <IconSearch />
              <span>
                <T k="nav.search" />
              </span>
            </Link>
            <button
              className="burger"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={t("nav.menu")}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <IconClose /> : <IconMenu />}
            </button>
          </div>
        </div>
        <nav
          className={`slim-mobile ${mobileOpen ? "open" : ""}`}
          aria-label={t("nav.menu")}
        >
          <Link href="/" onClick={() => setMobileOpen(false)}>
            <T k="nav.home" />
          </Link>
          <Link href="/artikel" onClick={() => setMobileOpen(false)}>
            <T k="nav.articles" />
          </Link>
          {categories.map((c) => (
            <Link
              key={c.slug}
              href={`/kategori/${c.slug}`}
              onClick={() => setMobileOpen(false)}
            >
              <span className="tick" />
              {t(`cat.${c.slug}`)}
            </Link>
          ))}
          <Link href="/tentang" onClick={() => setMobileOpen(false)}>
            <T k="nav.about" />
          </Link>
          <Link href="/kontak" onClick={() => setMobileOpen(false)}>
            <T k="nav.contact" />
          </Link>
        </nav>
      </div>
    </>
  );
}
