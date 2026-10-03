import Link from "next/link";
import Image from "next/image";
import {
  categories,
  getFeatured,
  getTrending,
  getByCategory,
  getLatest,
  getCategory,
} from "../lib/articles";
import { ArticleCard, CategoryKicker } from "../components/ArticleCard";
import NewsletterForm from "../components/NewsletterForm";
import Reveal from "../components/Reveal";
import Ticker from "../components/Ticker";
import { T, CatName, CatTagline, FDate, IndexLink } from "../components/Lang";
import { IconArrow } from "../components/icons";

export default function Home() {
  const featured = getFeatured();
  const trending = getTrending(5);
  const wire = getLatest(6, featured.slug);
  const featCat = getCategory(featured.category);

  return (
    <>
      <Ticker />

      {/* COVER — muat satu layar, headline tersingkap topeng */}
      <section className="cover">
        <div className="container">
          <Reveal variant="mask">
            <div className="cover-kicker-row">
              <span className="k-label">
                <T k="hero.kicker" />
              </span>
              <span className="rule" />
              <CategoryKicker slug={featured.category} />
            </div>
            <h1>
              <Link href={`/artikel/${featured.slug}`}>{featured.title}</Link>
            </h1>
          </Reveal>
          <div className="cover-grid">
            <Reveal variant="left">
              <div>
                <p className="lede">{featured.excerpt}</p>
                <div className="dateline">
                  <span>
                    <T k="hero.by" /> <b>{featured.author}</b>
                  </span>
                  <span>·</span>
                  <span>
                    <CatName slug={featured.category} />
                  </span>
                  <span>·</span>
                  <span>
                    <FDate iso={featured.date} />
                  </span>
                  <span>·</span>
                  <span>
                    <T k="hero.minRead" vars={{ n: featured.readMinutes }} />
                  </span>
                </div>
                <Link
                  href={`/artikel/${featured.slug}`}
                  className="read-btn"
                >
                  <T k="hero.readMore" /> <IconArrow />
                </Link>
              </div>
            </Reveal>
            <Reveal variant="wipe" delay={140}>
              <figure className="cover-fig">
                <span className="stamp">
                  <T k="hero.kicker" />
                </span>
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
                  {featured.title} — Foto: News5/
                  <CatName slug={featured.category} />
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* TERPOPULER — indeks bernomor, masuk dari kiri */}
      <section className="index-sec">
        <div className="container">
          <Reveal variant="mask">
            <div className="sec-head">
              <h2>
                <T k="pop.title" />
              </h2>
              <span className="count">
                <T k="pop.count" vars={{ n: trending.length }} />
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
                    <CatName slug={a.category} />
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
                      <T k="ch.bab" /> {String(ci + 1).padStart(2, "0")} ·{" "}
                      <T k="ch.kanal" />
                    </span>
                    <div className="ch-name">
                      <CatName slug={cat.slug} />
                    </div>
                    <p className="ch-desc">
                      <CatTagline slug={cat.slug} />
                    </p>
                  </div>
                  <IndexLink
                    slug={cat.slug}
                    href={`/kategori/${cat.slug}`}
                    arrow={<IconArrow />}
                  />
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
              <h2>
                <T k="wire.title" />
              </h2>
              <span className="count">
                <T k="wire.sub" />
              </span>
            </div>
          </Reveal>
          <div className="wire-list">
            {wire.map((a, i) => (
              <Reveal key={a.slug} delay={Math.min(i, 4) * 60} variant="left">
                <Link href={`/artikel/${a.slug}`} className="wire-row">
                  <span className="wire-time">{a.time} WIB</span>
                  <span>
                    <span className="idx-cat">
                      <CatName slug={a.category} />
                    </span>
                    <span className="title">{a.title}</span>
                    <span className="wire-meta">
                      {a.author} · <FDate iso={a.date} />
                    </span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal delay={100}>
            <div style={{ marginTop: 26 }}>
              <Link href="/artikel" className="more">
                <T k="wire.all" /> <IconArrow />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <aside className="news-panel">
              <span className="k-label" style={{ color: "var(--paper)" }}>
                <T k="news.kicker" />
              </span>
              <h2 style={{ marginTop: 14 }}>
                <T k="news.title" />
              </h2>
              <p>
                <T k="news.desc" />
              </p>
              <NewsletterForm />
            </aside>
          </Reveal>
        </div>
      </section>
    </>
  );
}
