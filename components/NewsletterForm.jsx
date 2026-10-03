"use client";

import { useState } from "react";
import { useLang } from "./Lang";

export default function NewsletterForm() {
  const [done, setDone] = useState(false);
  const { t } = useLang();

  if (done) {
    return (
      <p style={{ fontSize: 14, color: "#7fd08a", fontWeight: 600 }}>
        {t("news.done")}
      </p>
    );
  }

  return (
    <form
      className="newsletter-form"
      onSubmit={(e) => {
        e.preventDefault();
        setDone(true);
      }}
    >
      <input
        type="email"
        placeholder={t("news.ph")}
        required
        aria-label="Email"
      />
      <button className="btn" type="submit">
        {t("news.btn")}
      </button>
    </form>
  );
}
