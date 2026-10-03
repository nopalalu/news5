export const metadata = {
  title: "Tentang Kami — News5",
  description: "Mengenal News5: portal berita modern Indonesia.",
};

export default function TentangPage() {
  return (
    <div className="prose-narrow">
      <h1>Tentang News5</h1>
      <p>
        <b>News5</b> adalah portal berita modern yang lahir dari proyek
        perkuliahan dan dibangun ulang dengan teknologi terkini. Kami
        menyajikan liputan dalam empat kanal utama: <b>Hukum</b>,{" "}
        <b>Hiburan</b>, <b>Politik</b>, dan <b>Game</b> — topik-topik yang
        paling relevan dengan keseharian pembaca Indonesia.
      </p>
      <p>
        Misi kami sederhana: menyajikan berita yang <b>cepat</b>,{" "}
        <b>akurat</b>, dan <b>mudah dibaca</b>. Tanpa clickbait berlebihan,
        tanpa login wajib, tanpa paywall — cukup buka dan baca.
      </p>

      <div className="stat-row">
        <div className="stat">
          <div className="num">4</div>
          <div className="lbl">Kanal Berita</div>
        </div>
        <div className="stat">
          <div className="num">12+</div>
          <div className="lbl">Artikel Terbit</div>
        </div>
        <div className="stat">
          <div className="num">100%</div>
          <div className="lbl">Gratis Dibaca</div>
        </div>
      </div>

      <p>
        Versi ini merupakan <i>rebuild</i> modern dari aplikasi portal berita
        News5 yang sebelumnya dibangun dengan Laravel + Livewire. Kini
        dibangun ulang dengan Next.js agar lebih cepat, responsif, dan mudah
        diakses dari perangkat apa pun.
      </p>
      <p>
        Punya masukan, koreksi, atau ide liputan? Jangan ragu menghubungi
        redaksi melalui halaman kontak.
      </p>
    </div>
  );
}
