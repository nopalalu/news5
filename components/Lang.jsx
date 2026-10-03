"use client";

import { createContext, useContext, useEffect, useState } from "react";
import Link from "next/link";
import { lookup, interpolate } from "../lib/i18n";

const LangCtx = createContext({
  lang: "id",
  t: (key, vars) => key,
  setLang: () => {},
});

export function LangProvider({ children }) {
  const [lang, setLangState] = useState("id");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("news5-lang");
      if (saved === "en" || saved === "id") setLangState(saved);
    } catch {}
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem("news5-lang", lang);
    } catch {}
  }, [lang]);

  const t = (key, vars) => interpolate(lookup(lang, key), vars);

  return (
    <LangCtx.Provider value={{ lang, t, setLang: setLangState }}>
      {children}
    </LangCtx.Provider>
  );
}

export function useLang() {
  return useContext(LangCtx);
}

/** Render string kamus berdasarkan bahasa aktif. */
export function T({ k, vars }) {
  const { t } = useLang();
  return <>{t(k, vars)}</>;
}

/** Nama kategori mengikuti bahasa aktif. */
export function CatName({ slug }) {
  const { t } = useLang();
  return <>{t(`cat.${slug}`)}</>;
}

/** Tagline kategori mengikuti bahasa aktif. */
export function CatTagline({ slug }) {
  const { t } = useLang();
  return <>{t(`cat.${slug}_tag`)}</>;
}

/** Tanggal artikel mengikuti bahasa aktif. */
export function FDate({ iso }) {
  const { lang } = useLang();
  const d = new Date(iso + "T00:00:00");
  const locale = lang === "en" ? "en-US" : "id-ID";
  return (
    <>
      {d.toLocaleDateString(locale, {
        day: "numeric",
        month: "long",
        year: "numeric",
      })}
    </>
  );
}

/** Toggle ID / EN di navbar. */
export function LangToggle() {  const { lang, setLang, t } = useLang();
  return (
    <div className="lang-toggle" role="group" aria-label={t("nav.lang")}>
      <button
        type="button"
        className={lang === "id" ? "active" : ""}
        onClick={() => setLang("id")}
        aria-pressed={lang === "id"}
      >
        ID
      </button>
      <button
        type="button"
        className={lang === "en" ? "active" : ""}
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
      >
        EN
      </button>
    </div>
  );
}

/** Link "Indeks {Kategori}" dengan nama kategori terjemahan. */
export function IndexLink({ slug, href, arrow }) {
  const { t } = useLang();
  return (
    <Link href={href} className="more">
      {t("ch.indexOf", { name: t(`cat.${slug}`) })} {arrow}
    </Link>
  );
}

/** "Jurnalis News5 — Kanal X" mengikuti bahasa aktif. */
export function ArtJournalist({ slug }) {
  const { t } = useLang();
  return <>{t("art.journalist", { cat: t(`cat.${slug}`) })}</>;
}

/** "Kanal X" (label section artikel terkait) mengikuti bahasa aktif. */
export function ArtChannel({ slug }) {
  const { t } = useLang();
  return <>{t("art.channel", { cat: t(`cat.${slug}`) })}</>;
}
