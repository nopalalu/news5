import Link from "next/link";
import Image from "next/image";
import { getCategory, formatDate } from "../lib/articles";
import { IconClock } from "./icons";

/** Kicker editorial — label kategori monokrom + aksen ungu. */
export function CategoryKicker({ slug, link = true }) {
  const cat = getCategory(slug);
  if (!cat) return null;

  if (!link) {
    return <span className="kicker">{cat.name}</span>;
  }
  return (
    <Link href={`/kategori/${cat.slug}`} className="kicker">
      {cat.name}
    </Link>
  );
}

export function Meta({ article }) {
  return (
    <div className="meta">
      <span>{article.author}</span>
      <span>•</span>
      <span>{formatDate(article.date)}</span>
      <span>•</span>
      <span style={{ display: "inline-flex", alignItems: "center", gap: 5 }}>
        <IconClock />
        {article.readMinutes} mnt
      </span>
    </div>
  );
}

export function ArticleCard({ article }) {
  return (
    <article className="card">
      <Link
        href={`/artikel/${article.slug}`}
        className="card-img"
        aria-label={article.title}
        tabIndex={-1}
      >
        <Image
          src={article.image}
          alt={article.title}
          width={640}
          height={400}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </Link>
      <div className="card-body">
        <CategoryKicker slug={article.category} />
        <h3>
          <Link href={`/artikel/${article.slug}`}>{article.title}</Link>
        </h3>
        <Meta article={article} />
      </div>
    </article>
  );
}

export function ArticleRow({ article }) {
  return (
    <article className="hz-card">
      <Link
        href={`/artikel/${article.slug}`}
        className="card-img"
        aria-label={article.title}
        tabIndex={-1}
      >
        <Image
          src={article.image}
          alt={article.title}
          width={440}
          height={300}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </Link>
      <div className="card-body">
        <CategoryKicker slug={article.category} />
        <h3>
          <Link href={`/artikel/${article.slug}`}>{article.title}</Link>
        </h3>
        <Meta article={article} />
      </div>
    </article>
  );
}
