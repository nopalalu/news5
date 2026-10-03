import Link from "next/link";
import Image from "next/image";
import {
  articles,
  categories,
  getFeatured,
  getTrending,
  getByCategory,
  getLatest,
  getCategory,
} from "../lib/articles";
import { ArticleCard, ArticleRow, CategoryBadge, Meta } from "../components/ArticleCard";
import NewsletterForm from "../components/NewsletterForm";

function SectionHead({ category }) {
  return (
    <div className="section-head">
      <h2>
        <span className="bar" style={{ background: category.color }} />
        {category.name}
      </h2>
      <Link href={`/kategori/${category.slug}`} className="more">
        Lihat semua →
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
      {/* HERO */}
      <section className="hero">
        <div className="container hero-grid">
          <Link href={`/artikel/${featured.slug}`} className="hero-main">
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              priority
              style={{ objectFit: "cover" }}
            />
            <div className="hero-text">
              <CategoryBadge slug={featured.category} />
              <h1>{featured.title}</h1>
              <p>{featured.excerpt}</p>
              <Meta article={featured} />
            </div>
          </Link>
          <aside className="trending">
            <h3>
              <span className="flame">🔥</span> Terpopuler
            </h3>
            {trending.map((a, i) => (
              <div className="trend-item" key={a.slug}>
                <span className="trend-num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <div className="trend-cat">
                    {getCategory(a.category)?.name}
                  </div>
                  <Link href={`/artikel/${a.slug}`}>{a.title}</Link>
                </div>
              </div>
            ))}
          </aside>
        </div>
      </section>

      {/* CATEGORY SECTIONS */}
      {categories.map((cat) => {
        const items = getByCategory(cat.slug);
        return (
          <section className="section" key={cat.slug}>
            <div className="container">
              <SectionHead category={cat} />
              <div className="cards-3">
                {items.map((a) => (
                  <ArticleCard key={a.slug} article={a} />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* LATEST */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>
              <span className="bar" style={{ background: "#6d28d9" }} />
              Berita Terbaru
            </h2>
            <Link href="/artikel" className="more">
              Semua artikel →
            </Link>
          </div>
          <div className="latest-grid">
            <div>
              {latest.map((a) => (
                <ArticleRow key={a.slug} article={a} />
              ))}
            </div>
            <aside className="side-box">
              <h3>📬 Kabar Pagi News5</h3>
              <p>
                Ringkasan berita terpenting setiap pagi, langsung ke email
                kamu. Gratis, tanpa spam.
              </p>
              <NewsletterForm />
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
