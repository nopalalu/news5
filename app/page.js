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
import {
  ArticleCard,
  ArticleRow,
  CategoryKicker,
  Meta,
} from "../components/ArticleCard";
import NewsletterForm from "../components/NewsletterForm";
import Reveal from "../components/Reveal";
import Ticker from "../components/Ticker";
import { IconFlame, IconMail, IconArrow } from "../components/icons";

function SectionHead({ category }) {
  return (
    <div className="section-head">
      <h2>
        <span className="bar" style={{ background: category.color }} />
        {category.name}
      </h2>
      <Link href={`/kategori/${category.slug}`} className="more">
        Lihat semua <IconArrow />
      </Link>
    </div>
  );
}

export default function Home() {
  const featured = getFeatured();
  const trending = getTrending(5);
  const latest = getLatest(5, featured.slug);

  return (
    <>
      <Ticker />

      {/* HERO */}
      <section className="hero">
        <div className="container hero-grid">
          <Reveal className="hero-reveal">
            <Link href={`/artikel/${featured.slug}`} className="hero-main">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                priority
                style={{ objectFit: "cover" }}
              />
              <div className="hero-text">
                <CategoryKicker
                  slug={featured.category}
                  link={false}
                  onDark
                />
                <h1>{featured.title}</h1>
                <p>{featured.excerpt}</p>
                <Meta article={featured} />
              </div>
            </Link>
          </Reveal>
          <Reveal delay={120}>
            <aside className="trending">
              <h3>
                <span className="flame">
                  <IconFlame />
                </span>
                Terpopuler
              </h3>
              {trending.map((a, i) => (
                <div className="trend-item" key={a.slug}>
                  <span className="trend-num">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <div
                      className="trend-cat"
                      style={{ color: getCategory(a.category)?.color, filter: "brightness(1.7)" }}
                    >
                      {getCategory(a.category)?.name}
                    </div>
                    <Link href={`/artikel/${a.slug}`}>{a.title}</Link>
                  </div>
                </div>
              ))}
            </aside>
          </Reveal>
        </div>
      </section>

      {/* CATEGORY SECTIONS */}
      {categories.map((cat) => {
        const items = getByCategory(cat.slug);
        return (
          <section className="section" key={cat.slug}>
            <div className="container">
              <Reveal>
                <SectionHead category={cat} />
              </Reveal>
              <div className="cards-3">
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

      {/* LATEST */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="section-head">
              <h2>
                <span className="bar" style={{ background: "#6d28d9" }} />
                Berita Terbaru
              </h2>
              <Link href="/artikel" className="more">
                Semua artikel <IconArrow />
              </Link>
            </div>
          </Reveal>
          <div className="latest-grid">
            <div>
              {latest.map((a, i) => (
                <Reveal key={a.slug} delay={Math.min(i, 2) * 90}>
                  <ArticleRow article={a} />
                </Reveal>
              ))}
            </div>
            <Reveal delay={150}>
              <aside className="side-box">
                <h3
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                  }}
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
        </div>
      </section>
    </>
  );
}
