"use client";

import { useMemo, useState } from "react";
import {
  articles,
  categories,
  searchArticles,
  getCategory,
} from "../../lib/articles";
import { ArticleCard } from "../../components/ArticleCard";
import { IconNews } from "../../components/icons";
import { useLang } from "../../components/Lang";
import Reveal from "../../components/Reveal";

export default function ArtikelPage() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState("semua");
  const { t } = useLang();

  const results = useMemo(() => {
    let list = searchArticles(query);
    if (cat !== "semua") list = list.filter((a) => a.category === cat);
    return list;
  }, [query, cat]);

  return (
    <div className="container" style={{ paddingBottom: 40 }}>
      <div className="page-head">
        <h1>{t("idx.title")}</h1>
        <p>{t("idx.desc", { n: articles.length, m: categories.length })}</p>
      </div>

      <div className="search-row">
        <input
          type="text"
          placeholder={t("idx.ph")}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label={t("idx.ph")}
        />
      </div>

      <div className="filter-chips">
        <button
          className={`chip ${cat === "semua" ? "active" : ""}`}
          onClick={() => setCat("semua")}
        >
          {t("idx.all")}
        </button>
        {categories.map((c) => (
          <button
            key={c.slug}
            className={`chip ${cat === c.slug ? "active" : ""}`}
            onClick={() => setCat(c.slug)}
          >
            {t(`cat.${c.slug}`)}
          </button>
        ))}
      </div>

      {results.length === 0 ? (
        <div className="empty">
          <div className="big" style={{ color: "var(--faint)", fontSize: 52 }}>
            <IconNews />
          </div>
          <p>
            {t("idx.empty")} “<b>{query}</b>”.<br />
            {t("idx.emptyHint")}
          </p>
        </div>
      ) : (
        <>
          <p style={{ color: "var(--muted)", fontSize: 14, margin: "0 0 18px" }}>
            {t("idx.showing", { n: results.length })}
            {query && (
              <>
                {" "}
                {t("idx.for")} “<b>{query}</b>”
              </>
            )}
          </p>
          <div className="cards-3">
            {results.map((a, i) => (
              <Reveal key={a.slug} delay={(i % 3) * 90}>
                <ArticleCard article={a} />
              </Reveal>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
