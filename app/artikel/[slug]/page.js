import { notFound } from "next/navigation";
import Image from "next/image";
import {
  articles,
  getArticle,
  getRelated,
  getCategory,
} from "../../../lib/articles";
import { ArticleCard, CategoryKicker } from "../../../components/ArticleCard";
import { ProgressBar, ShareButtons } from "../../../components/ArticleExtras";
import Reveal from "../../../components/Reveal";
import { T, CatName, FDate, ArtJournalist, ArtChannel } from "../../../components/Lang";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: `${article.title} — News5`,
    description: article.excerpt,
  };
}

function initials(name) {
  return name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default async function ArtikelDetail({ params }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();
  const cat = getCategory(article.category);
  const related = getRelated(article, 3);

  const paras = article.content || [];
  const firstHalf = paras.slice(0, 2);
  const rest = paras.slice(2);

  return (
    <>
      <ProgressBar />
      <div className="article-hero">
        <CategoryKicker slug={cat.slug} />
        <h1>{article.title}</h1>
        <p className="excerpt">{article.excerpt}</p>
        <div className="meta">
          <span>
            <b style={{ color: "var(--ink)" }}>{article.author}</b> — Redaksi
            News5
          </span>
          <span>•</span>
          <span>
            <FDate iso={article.date} />
          </span>
          <span>•</span>
          <span>
            <T k="hero.minRead" vars={{ n: article.readMinutes }} />
          </span>
        </div>
      </div>

      <figure className="article-img">
        <span className="frame" style={{ display: "block" }}>
          <Image
            src={article.image}
            alt={article.title}
            width={1000}
            height={560}
            style={{ width: "100%", height: "auto" }}
            priority
          />
        </span>
        <figcaption>
          {article.title} — Foto: News5/<CatName slug={cat.slug} />
        </figcaption>
      </figure>

      <div className="article-body">
        {firstHalf.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
        <aside className="pullquote">“{article.excerpt}”</aside>
        {rest.map((p, i) => (
          <p key={i + 2}>{p}</p>
        ))}
      </div>

      <div className="tags">
        {article.tags.map((t) => (
          <span key={t} className="tag">
            #{t}
          </span>
        ))}
      </div>

      <ShareButtons title={article.title} />

      <div className="author-box">
        <div className="inner">
          <span className="avatar">{initials(article.author)}</span>
          <div className="who">
            <b>{article.author}</b>
            <span>
              <ArtJournalist slug={cat.slug} />
            </span>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <Reveal variant="mask">
            <div className="sec-head" style={{ marginBottom: 30 }}>
              <h2>
                <T k="art.related" />
              </h2>
              <span className="count">
                <ArtChannel slug={cat.slug} />
              </span>
            </div>
          </Reveal>
          <div className="cards-3">
            {related.map((a, i) => (
              <Reveal key={a.slug} delay={(i % 3) * 110}>
                <ArticleCard article={a} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
