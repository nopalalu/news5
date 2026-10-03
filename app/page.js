import Link from "next/link";
import Image from "next/image";
import {
  categories,
  getFeatured,
  getTrending,
  getByCategory,
  getLatest,
  getCategory,
  formatDate,
} from "../lib/articles";
import { ArticleCard, CategoryKicker } from "../components/ArticleCard";
import NewsletterForm from "../components/NewsletterForm";
import Reveal from "../components/Reveal";
import Ticker from "../components/Ticker";
import { IconArrow } from "../components/icons";

export default function Home() {
  const featured = getFeatured();
  const trending = getTrending(5);
  const wire = getLatest(6, featured.slug);
  const featCat = getCategory(featured.category);

  return (
    <>
      <Ticker />

      {/* COVER — entrance murni CSS, tidak tergantung JS */}
      <section className="cover">
        <div className="container">
          <div className="hero-mask">
            <div className="cover-kicker-row">
              <span className="k-label">Laporan Utama</span>
              <span className="rule" />
              <CategoryKicker slug={featured.category} />
            </div>
            <h1>
              <Link href={`/artikel/${featured.slug}`}>{featured.title}</Link>
            </h1>
          </div>
          <div className="cover-grid">
            <div className="hero-left">
              <div>
                <p className="lede">{featured.excerpt}</p>
                <div className="dateline">
                  <span>
                    Oleh <b>{featured.author}</b>
                  </span>
                  <span>·</span>
                  <span>{featCat?.name}</span>
                  <span>·</span>
                  <span>{formatDate(featured.date)}</span>
                  <span>·</span>
                  <span>{featured.readMinutes} menit baca</span>
                </div>
                <Link
                  href={`/artikel/${featured.slug}`}
                  className="read-btn"
                >
                  Baca Selengkapnya <IconArrow />
                </Link>
              </div>
            </div>
            <div className="hero-wipe">
              <figure className="cover-fig">
                <span className="stamp">Edisi Utama</span>
                <Link
                  href={`/artikel/${featured.slug}`}
                  className="frame"
                  aria-label={featured.title}
                >
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    width={880}
                    height={660}
                    priority
                  />
                </Link>
                <figcaption>
                  {featured.title} — Foto: News5/{featCat?.name}
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* TERPOPULER — indeks bernomor */}
      <section className="index-sec">
        <div className="container">
          <Reveal variant="mask">
            <div className="sec-head">
              <h2>Terpopuler</h2>
              <span className="count">
                {trending.length} artikel · pekan ini
              </span>
            </div>
          </Reveal>
          <div>
            {trending.map((a, i) => (
              <Reveal key={a.slug} delay={i * 70} variant="left">
                <Link href={`/artikel/${a.slug}`} className="idx-row">
                  <span className="idx-num" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="title">{a.title}</span>
                  <span className="idx-cat">
                    {getCategory(a.category)?.name}
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CHAPTERS — tiap kategori jadi bab */}
      {categories.map((cat, ci) => {
        const items = getByCategory(cat.slug);
        return (
          <section className="chapter" key={cat.slug}>
            <div className="container">
              <Reveal variant="mask">
                <div className="chapter-head">
                  <span className="ghost-num" aria-hidden="true">
                    {String(ci + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <span className="k-label">
                      Bab {String(ci + 1).padStart(2, "0")} · Kanal
                    </span>
                    <div className="ch-name">{cat.name}</div>
                    <p className="ch-desc">{cat.tagline}</p>
                  </div>
                  <Link
                    href={`/kategori/${cat.slug}`}
                    className="more"
                  >
                    Indeks {cat.name} <IconArrow />
                  </Link>
                </div>
              </Reveal>
              <div className="chapter-grid">
                {items.map((a, i) => (
                  <Reveal key={a.slug} delay={(i % 3) * 110}>
                    <ArticleCard article={a} />
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* KAWAT BERITA — newswire dengan jam terbit */}
      <section className="index-sec">
        <div className="container">
          <Reveal variant="mask">
            <div className="sec-head">
              <h2>Kawat Berita</h2>
              <span className="count">Langsung dari meja redaksi</span>
            </div>
          </Reveal>
          <div className="wire-list">
            {wire.map((a, i) => (
              <Reveal key={a.slug} delay={Math.min(i, 4) * 60} variant="left">
                <Link href={`/artikel/${a.slug}`} className="wire-row">
                  <span className="wire-time">{a.time} WIB</span>
                  <span>
                    <span className="idx-cat">
                      {getCategory(a.category)?.name}
                    </span>
                    <span className="title">{a.title}</span>
                    <span className="wire-meta">
                      {a.author} · {formatDate(a.date)}
                    </span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal delay={100}>
            <div style={{ marginTop: 26 }}>
              <Link href="/artikel" className="more">
                Semua artikel <IconArrow />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <aside className="news-panel">
              <span className="k-label" style={{ color: "var(--paper)" }}>
                Newsletter
              </span>
              <h2 style={{ marginTop: 14 }}>
                Kabar Pagi News5, langsung ke email kamu.
              </h2>
              <p>
                Ringkasan berita terpenting setiap pagi. Gratis, tanpa spam,
                berhenti kapan saja.
              </p>
              <NewsletterForm />
            </aside>
          </Reveal>
        </div>
      </section>
    </>
  );
}
