"use client";

import { useState } from "react";
import { IconMail, IconPin, IconCheck } from "../../components/icons";
import { useLang } from "../../components/Lang";

export default function KontakPage() {
  const [sent, setSent] = useState(false);
  const { t } = useLang();

  return (
    <div className="prose-narrow">
      <h1>{t("contact.title")}</h1>
      <p>{t("contact.p1")}</p>

      <div className="contact-grid">
        <div className="contact-card">
          <h3 style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ color: "var(--brand)", fontSize: 22 }}>
              <IconMail />
            </span>
            {t("contact.email")}
          </h3>
          <p>redaksi@news5.id</p>
        </div>
        <div className="contact-card">
          <h3 style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ color: "var(--brand)", fontSize: 22 }}>
              <IconPin />
            </span>
            {t("contact.address")}
          </h3>
          <p>{t("contact.addressVal")}</p>
        </div>
      </div>

      {sent ? (
        <div
          className="contact-card"
          style={{ marginTop: 26, borderColor: "#047857" }}
        >
          <h3
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              color: "#047857",
            }}
          >
            <IconCheck />
            {t("contact.sentTitle")}
          </h3>
          <p>{t("contact.sentDesc")}</p>
        </div>
      ) : (
        <form
          className="form contact-card"
          style={{ marginTop: 26 }}
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          <h3>{t("contact.formTitle")}</h3>
          <label>{t("contact.name")}</label>
          <input type="text" placeholder={t("contact.namePh")} required />
          <label>Email</label>
          <input type="email" placeholder={t("contact.emailPh")} required />
          <label>{t("contact.topic")}</label>
          <input type="text" placeholder={t("contact.topicPh")} />
          <label>{t("contact.message")}</label>
          <textarea placeholder={t("contact.messagePh")} required />
          <div style={{ marginTop: 18 }}>
            <button className="btn" type="submit">
              {t("contact.send")}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
