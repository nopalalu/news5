import Link from "next/link";
import Image from "next/image";
import { getCategory, formatDate } from "../lib/articles";

export function CategoryBadge({ slug }) {
  const cat = getCategory(slug);
  if (!cat) return null;
  return (
    <span className="badge">
      <span className="cat-dot" />
      {cat.name}
    </span>
  );
}

export function Meta({ article, light }) {
  return (
    <div className="meta">
      <span>Oleh {article.author}</span>
      <span>•</span>
      <span>{formatDate(article.date)}</span>
      <span>•</span>
      <span>{article.readMinutes} menit baca</span>
    </div>
  );
}

export function ArticleCard({ article }) {
  return (
    <article className="card">
      <Link href={`/artikel/${article.slug}`} className="card-img">
        <Image
          src={article.image}
          alt={article.title}
          width={640}
          height={360}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <CategoryBadge slug={article.category} />
      </Link>
      <div className="card-body">
        <h3>
          <Link href={`/artikel/${article.slug}`}>{article.title}</Link>
        </h3>
        <p>{article.excerpt}</p>
        <Meta article={article} />
      </div>
    </article>
  );
}

export function ArticleRow({ article }) {
  return (
    <article className="hz-card">
      <Link href={`/artikel/${article.slug}`} className="card-img">
        <Image
          src={article.image}
          alt={article.title}
          width={440}
          height={300}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </Link>
      <div className="card-body">
        <CategoryBadge slug={article.category} />
        <h3 style={{ marginTop: 10 }}>
          <Link href={`/artikel/${article.slug}`}>{article.title}</Link>
        </h3>
        <p>{article.excerpt}</p>
        <Meta article={article} />
      </div>
    </article>
  );
}
