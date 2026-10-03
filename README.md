# News5 — Portal Berita Modern

Portal berita modern berbahasa Indonesia dengan kanal **Hukum**,
**Hiburan**, **Politik**, dan **Game**. Dibangun ulang dari proyek portal
berita News5 (sebelumnya Laravel + Livewire) menggunakan stack modern.

## Fitur

- 📰 Homepage editorial: hero headline, Terpopuler, kanal per kategori, Berita Terbaru
- 🔍 Pencarian artikel + filter kategori (client-side, instan)
- 📂 Halaman kategori: `/kategori/hukum`, `/kategori/hiburan`, `/kategori/politik`, `/kategori/game`
- 📖 Halaman detail artikel dengan related articles & tags
- 📬 Form newsletter, halaman Tentang & Kontak
- 📱 Responsif penuh (mobile-first)

## Teknologi

- Next.js 16 (App Router) — React 19
- Static export-friendly (seluruh halaman di-prerender)
- Tanpa database & tanpa login — konten dari `lib/articles.js`

## Jalankan lokal

```bash
npm install
npm run dev
```

Buka http://localhost:3000

## Deploy

Terhubung ke Vercel — setiap push ke `main` otomatis deploy ke production.

## Struktur

```
app/
  page.js              → homepage
  artikel/page.js      → daftar + pencarian
  artikel/[slug]/      → detail artikel
  kategori/[slug]/     → artikel per kategori
  tentang/  kontak/    → halaman statis
components/            → Navbar, Footer, ArticleCard, NewsletterForm
lib/articles.js        → data artikel & kategori
public/images/         → cover artikel (AI-generated)
```

Konten artikel adalah data demo untuk keperluan portofolio.
