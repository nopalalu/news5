import { notFound } from "next/navigation";
import { categories, getCategory, getByCategory } from "../../../lib/articles";
import { ArticleCard } from "../../../components/ArticleCard";

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }) {
  const cat = getCategory(params.slug);
  if (!cat) return {};
  return {
    title: `Berita ${cat.name} — News5`,
    description: cat.tagline,
  };
}

export default function KategoriPage({ params }) {
  const cat = getCategory(params.slug);
  if (!cat) notFound();
  const items = getByCategory(cat.slug);

  return (
    <div className="container" style={{ paddingBottom: 40 }}>
      <div className="page-head">
        <h1>
          <span
            className="cat-dot"
            style={{
              background: cat.color,
              width: 14,
              height: 14,
              display: "inline-block",
              marginRight: 12,
            }}
          />
          {cat.name}
        </h1>
        <p>
          {cat.tagline} — {items.length} artikel
        </p>
      </div>
      <div className="cards-3" style={{ marginTop: 26 }}>
        {items.map((a) => (
          <ArticleCard key={a.slug} article={a} />
        ))}
      </div>
    </div>
  );
}
