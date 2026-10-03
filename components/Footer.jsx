import Link from "next/link";
import { categories } from "../lib/articles";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="foot-grid">
          <div>
            <div className="foot-brand">
              News<span className="five">5</span>
            </div>
            <p>
              Portal berita modern yang menyajikan liputan hukum, hiburan,
              politik, dan game — cepat, akurat, dan terpercaya.
            </p>
          </div>
          <div>
            <h4>Navigasi</h4>
            <Link href="/">Home</Link>
            <Link href="/artikel">Artikel</Link>
            <Link href="/tentang">Tentang Kami</Link>
            <Link href="/kontak">Kontak</Link>
          </div>
          <div>
            <h4>Kategori</h4>
            {categories.map((c) => (
              <Link key={c.slug} href={`/kategori/${c.slug}`}>
                {c.name}
              </Link>
            ))}
          </div>
          <div>
            <h4>Ikuti Kami</h4>
            <Link href="#">Instagram</Link>
            <Link href="#">X (Twitter)</Link>
            <Link href="#">YouTube</Link>
            <Link href="#">TikTok</Link>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© 2026 News5. Seluruh hak cipta dilindungi.</span>
          <span>Rebuild modern dari proyek portal berita News5.</span>
        </div>
      </div>
    </footer>
  );
}
