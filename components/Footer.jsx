"use client";

import Link from "next/link";
import { categories } from "../lib/articles";
import { T, CatName, useLang } from "./Lang";

function CatLinks() {
  const { t } = useLang();
  return (
    <>
      {categories.map((c) => (
        <Link key={c.slug} href={`/kategori/${c.slug}`}>
          {t(`cat.${c.slug}`)}
        </Link>
      ))}
    </>
  );
}

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="foot-word" aria-hidden="true">
          News<span className="five">5</span>
        </div>
        <div className="foot-tag">
          <T k="mast.tagline" />
        </div>
        <div className="foot-grid">
          <div>
            <div className="foot-brand">
              News<span className="five">5</span>
            </div>
            <p>
              <T k="foot.about" />
            </p>
          </div>
          <div>
            <h4>
              <T k="foot.nav" />
            </h4>
            <Link href="/">
              <T k="nav.home" />
            </Link>
            <Link href="/artikel">
              <T k="nav.articles" />
            </Link>
            <Link href="/tentang">
              <T k="nav.about" />
            </Link>
            <Link href="/kontak">
              <T k="nav.contact" />
            </Link>
          </div>
          <div>
            <h4>
              <T k="foot.cats" />
            </h4>
            <CatLinks />
          </div>
          <div>
            <h4>
              <T k="foot.follow" />
            </h4>
            <Link href="#">Instagram</Link>
            <Link href="#">X (Twitter)</Link>
            <Link href="#">YouTube</Link>
            <Link href="#">TikTok</Link>
          </div>
        </div>
        <div className="foot-bottom">
          <span>
            <T k="foot.rights" />
          </span>
          <span>
            <T k="foot.rebuild" />
          </span>
        </div>
      </div>
    </footer>
  );
}
