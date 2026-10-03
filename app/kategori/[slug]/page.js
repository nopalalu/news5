import { notFound } from "next/navigation";
import { categories, getCategory, getByCategory } from "../../../lib/articles";
import { ArticleCard } from "../../../components/ArticleCard";
import Reveal from "../../../components/Reveal";

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const cat = getCategory(slug);
  if (!cat) return {};
  return {
    title: `Berita ${cat.name} — News5`,
    description: cat.tagline,
  };
}

export default async function KategoriPage({ params }) {
  const { slug } = await params;
  const cat = getCategory(slug);
  if (!cat) notFound();
  const items = getByCategory(cat.slug);

  return (
    <div className="container" style={{ paddingBottom: 40 }}>
      <div className="page-head">
        <span className="k-label">Kanal Berita</span>
        <h1 style={{ marginTop: 14 }}>{cat.name}</h1>
        <p>
          {cat.tagline} — {items.length} artikel
        </p>
      </div>
      <div className="cards-3" style={{ marginTop: 26 }}>
        {items.map((a, i) => (
          <Reveal key={a.slug} delay={(i % 3) * 110}>
            <ArticleCard article={a} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
