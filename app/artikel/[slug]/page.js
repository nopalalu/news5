import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  articles,
  getArticle,
  getRelated,
  getCategory,
  formatDate,
} from "../../../lib/articles";
import { ArticleCard, CategoryBadge } from "../../../components/ArticleCard";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }) {
  const article = getArticle(params.slug);
  if (!article) return {};
  return {
    title: `${article.title} — News5`,
    description: article.excerpt,
  };
}

export default function ArtikelDetail({ params }) {
  const article = getArticle(params.slug);
  if (!article) notFound();
  const cat = getCategory(article.category);
  const related = getRelated(article, 3);

  return (
    <>
      <div className="article-hero">
        <Link
          href={`/kategori/${cat.slug}`}
          style={{
            fontSize: 13,
            fontWeight: 700,
            color: cat.color,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
          }}
        >
          {cat.name}
        </Link>
        <h1>{article.title}</h1>
        <p className="excerpt">{article.excerpt}</p>
        <div className="meta">
          <span>
            <b style={{ color: "var(--ink)" }}>{article.author}</b> — Redaksi
            News5
          </span>
          <span>•</span>
          <span>{formatDate(article.date)}</span>
          <span>•</span>
          <span>{article.readMinutes} menit baca</span>
        </div>
      </div>

      <div className="article-img">
        <Image
          src={article.image}
          alt={article.title}
          width={1000}
          height={560}
          style={{ width: "100%", height: "auto" }}
          priority
        />
      </div>

      <div className="article-body">
        {article.content.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <div className="tags">
        {article.tags.map((t) => (
          <span key={t} className="tag">
            #{t}
          </span>
        ))}
      </div>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>
              <span className="bar" style={{ background: "#6d28d9" }} />
              Baca Juga
            </h2>
          </div>
          <div className="cards-3">
            {related.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
