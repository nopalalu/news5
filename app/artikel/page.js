"use client";

import { useMemo, useState } from "react";
import {
  articles,
  categories,
  searchArticles,
} from "../../lib/articles";
import { ArticleCard } from "../../components/ArticleCard";
import { IconNews } from "../../components/icons";
import Reveal from "../../components/Reveal";

export default function ArtikelPage() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState("semua");

  const results = useMemo(() => {
    let list = searchArticles(query);
    if (cat !== "semua") list = list.filter((a) => a.category === cat);
    return list;
  }, [query, cat]);

  return (
    <div className="container" style={{ paddingBottom: 40 }}>
      <div className="page-head">
        <h1>Semua Artikel</h1>
        <p>
          Jelajahi {articles.length} artikel dari {categories.length} kategori
          — cari berdasarkan judul, isi, atau topik.
        </p>
      </div>

      <div className="search-row">
        <input
          type="text"
          placeholder="Cari artikel… mis. pemilu, konser, esports"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Cari artikel"
        />
      </div>

      <div className="filter-chips">
        <button
          className={`chip ${cat === "semua" ? "active" : ""}`}
          onClick={() => setCat("semua")}
        >
          Semua
        </button>
        {categories.map((c) => (
          <button
            key={c.slug}
            className={`chip ${cat === c.slug ? "active" : ""}`}
            onClick={() => setCat(c.slug)}
          >
            {c.name}
          </button>
        ))}
      </div>

      {results.length === 0 ? (
        <div className="empty">
          <div className="big" style={{ color: "var(--faint)", fontSize: 52 }}>
            <IconNews />
          </div>
          <p>
            Tidak ada artikel yang cocok dengan “<b>{query}</b>”.
            <br />
            Coba kata kunci lain.
          </p>
        </div>
      ) : (
        <>
          <p style={{ color: "var(--muted)", fontSize: 14, margin: "0 0 18px" }}>
            Menampilkan {results.length} artikel
            {query && (
              <>
                {" "}
                untuk “<b>{query}</b>”
              </>
            )}
          </p>
          <div className="cards-3">
            {results.map((a, i) => (
              <Reveal key={a.slug} delay={(i % 3) * 90} variant="stamp">
                <ArticleCard article={a} />
              </Reveal>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
