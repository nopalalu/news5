"use client";

import { useState } from "react";
import { IconMail, IconPin, IconCheck } from "../../components/icons";

export default function KontakPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="prose-narrow">
      <h1>Kontak Redaksi</h1>
      <p>
        Ada koreksi berita, usulan liputan, atau sekadar ingin menyapa?
        Kirim pesan ke redaksi News5 melalui formulir di bawah ini.
      </p>

      <div className="contact-grid">
        <div className="contact-card">
          <h3
            style={{ display: "flex", alignItems: "center", gap: 10 }}
          >
            <span style={{ color: "var(--brand)", fontSize: 22 }}>
              <IconMail />
            </span>
            Email
          </h3>
          <p>redaksi@news5.id</p>
        </div>
        <div className="contact-card">
          <h3
            style={{ display: "flex", alignItems: "center", gap: 10 }}
          >
            <span style={{ color: "var(--brand)", fontSize: 22 }}>
              <IconPin />
            </span>
            Alamat
          </h3>
          <p>Purwokerto, Jawa Tengah, Indonesia</p>
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
            Pesan terkirim!
          </h3>
          <p>
            Terima kasih, pesan kamu sudah kami terima. Redaksi akan
            menindaklanjuti secepatnya.
          </p>
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
          <h3>Kirim Pesan</h3>
          <label>Nama</label>
          <input type="text" placeholder="Nama kamu" required />
          <label>Email</label>
          <input type="email" placeholder="alamat@email.com" required />
          <label>Topik</label>
          <input type="text" placeholder="cth. Koreksi berita, usulan liputan…" />
          <label>Pesan</label>
          <textarea placeholder="Tulis pesan kamu di sini…" required />
          <div style={{ marginTop: 18 }}>
            <button className="btn" type="submit">
              Kirim Pesan
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
