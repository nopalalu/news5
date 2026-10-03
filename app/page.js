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
import {
  ArticleCard,
  CategoryKicker,
  Meta,
} from "../components/ArticleCard";
import NewsletterForm from "../components/NewsletterForm";
import Reveal from "../components/Reveal";
import Ticker from "../components/Ticker";
import { IconArrow, IconMail } from "../components/icons";

export default function Home() {
  const featured = getFeatured();
  const trending = getTrending(5);
  const latest = getLatest(6, featured.slug);

  return (
    <>
      <Ticker />

      {/* SAMPUL — cover story */}
      <section className="sampul">
        <div className="container sampul-grid">
          <Reveal>
            <div>
              <span className="stamp">Edisi Utama</span>
              <div>
                <CategoryKicker slug={featured.category} link={false} onDark />
              </div>
              <h1>
                <Link href={`/artikel/${featured.slug}`}>
                  {featured.title}
                </Link>
              </h1>
              <p className="lede">{featured.excerpt}</p>
              <Meta article={featured} />
              <Link
                href={`/artikel/${featured.slug}`}
                className="read-btn"
              >
                Baca Selengkapnya <IconArrow />
              </Link>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <Link
              href={`/artikel/${featured.slug}`}
              className="duo"
              aria-label={featured.title}
            >
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                priority
                style={{ objectFit: "cover" }}
              />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* TERPOPULER — index */}
      <section className="pop-sec">
        <div className="container">
          <Reveal>
            <div className="pop-head">
              <h2>Terpopuler</h2>
              <span className="count">5 ARTIKEL · PEKAN INI</span>
            </div>
          </Reveal>
          <div>
            {trending.map((a, i) => (
              <Reveal key={a.slug} delay={i * 70}>
                <div className="idx-row">
                  <span className="idx-num">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <Link
                    href={`/artikel/${a.slug}`}
                    className="title"
                  >
                    {a.title}
                  </Link>
                  <span
                    className="idx-cat"
                    style={{ color: getCategory(a.category)?.color }}
                  >
                    {getCategory(a.category)?.name}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CHAPTERS */}
      {categories.map((cat, ci) => {
        const items = getByCategory(cat.slug);
        return (
          <section className="chapter" key={cat.slug}>
            <div className="container">
              <Reveal>
                <div className="chapter-head">
                  <span className="ghost-num">
                    {String(ci + 1).padStart(2, "0")}
                  </span>
                  <div className="ch-meta">
                    <CategoryKicker slug={cat.slug} variant="sticker" />
                    <p>{cat.tagline}</p>
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

      {/* KABAR TERBARU — index with thumbs */}
      <section className="chapter latest-idx">
        <div className="container">
          <Reveal>
            <div className="chapter-head">
              <span className="ghost-num">05</span>
              <div className="ch-meta">
                <span
                  className="sticker"
                  style={{ background: "#6d28d9" }}
                >
                  Kabar Terbaru
                </span>
                <p>Berita paling segar dari semua kanal</p>
              </div>
              <Link href="/artikel" className="more">
                Semua artikel <IconArrow />
              </Link>
            </div>
          </Reveal>
          <div>
            {latest.map((a, i) => (
              <Reveal key={a.slug} delay={Math.min(i, 3) * 70}>
                <div className="idx-row">
                  <span className="idx-num">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <div style={{ marginBottom: 8 }}>
                      <CategoryKicker slug={a.category} />
                    </div>
                    <Link
                      href={`/artikel/${a.slug}`}
                      className="title"
                    >
                      {a.title}
                    </Link>
                    <div
                      className="meta"
                      style={{ marginTop: 8 }}
                    >
                      <span>{a.author}</span>
                      <span>•</span>
                      <span>{formatDate(a.date)}</span>
                    </div>
                  </div>
                  <Link
                    href={`/artikel/${a.slug}`}
                    className="idx-thumb"
                    aria-label={a.title}
                    tabIndex={-1}
                  >
                    <Image
                      src={a.image}
                      alt=""
                      width={380}
                      height={240}
                    />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <aside
              className="side-box"
              style={{ marginTop: 34, position: "static" }}
            >
              <h3
                style={{ display: "flex", alignItems: "center", gap: 10 }}
              >
                <span style={{ color: "var(--brand)", fontSize: 22 }}>
                  <IconMail />
                </span>
                Kabar Pagi News5
              </h3>
              <p>
                Ringkasan berita terpenting setiap pagi, langsung ke email
                kamu. Gratis, tanpa spam.
              </p>
              <NewsletterForm />
            </aside>
          </Reveal>
        </div>
      </section>
    </>
  );
}
