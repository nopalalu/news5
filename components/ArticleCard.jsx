import Link from "next/link";
import Image from "next/image";
import { getCategory, formatDate } from "../lib/articles";
import { IconClock } from "./icons";

/**
 * Kicker editorial — label kategori yang bisa diklik.
 * Varian: "line" (default, teks + kotak warna) atau "sticker".
 */
export function CategoryKicker({
  slug,
  link = true,
  onDark = false,
  variant = "line",
}) {
  const cat = getCategory(slug);
  if (!cat) return null;

  if (variant === "sticker") {
    const el = <span className="sticker" style={{ background: cat.color }}>{cat.name}</span>;
    if (!link) return el;
    return <Link href={`/kategori/${cat.slug}`}>{el}</Link>;
  }

  const inner = (
    <>
      <span className="kicker-sq" style={{ background: cat.color }} />
      {cat.name}
    </>
  );
  const cls = `kicker${onDark ? " on-dark" : ""}`;
  const style = onDark ? undefined : { color: cat.color };
  if (!link) {
    return (
      <span className={cls} style={style}>
        {inner}
      </span>
    );
  }
  return (
    <Link href={`/kategori/${cat.slug}`} className={cls} style={style}>
      {inner}
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
      <span
        style={{ display: "inline-flex", alignItems: "center", gap: 5 }}
      >
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
      >
        <Image
          src={article.image}
          alt={article.title}
          width={640}
          height={360}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </Link>
      <div className="card-body">
        <CategoryKicker slug={article.category} />
        <h3 style={{ marginTop: 10 }}>
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
      <Link
        href={`/artikel/${article.slug}`}
        className="card-img"
        aria-label={article.title}
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
        <h3 style={{ marginTop: 10 }}>
          <Link href={`/artikel/${article.slug}`}>{article.title}</Link>
        </h3>
        <p>{article.excerpt}</p>
        <Meta article={article} />
      </div>
    </article>
  );
}
