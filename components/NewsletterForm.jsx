"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <p style={{ fontSize: 14, color: "#7fd08a", fontWeight: 600 }}>
        Terima kasih! Cek email kamu untuk konfirmasi.
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
        placeholder="alamat@email.com"
        required
        aria-label="Email"
      />
      <button className="btn" type="submit">
        Daftar
      </button>
    </form>
  );
}
