import { IconCheck } from "../../components/icons";

export const metadata = {
  title: "Tentang Kami — News5",
  description: "Mengenal News5: portal berita modern Indonesia.",
};

const team = [
  { name: "Rina Kartika", role: "Redaktur Kanal Hukum" },
  { name: "Salsa Bila", role: "Redaktur Kanal Hiburan" },
  { name: "Andi Nugraha", role: "Redaktur Kanal Politik" },
  { name: "Rizky Ramadhan", role: "Redaktur Kanal Game" },
  { name: "Maya Anggraini", role: "Jurnalis Ekonomi & UMKM" },
  { name: "Bagas Pratama", role: "Jurnalis Hiburan & Game" },
];

const values = [
  {
    title: "Akurasi dulu, kecepatan kemudian",
    desc: "Kami memverifikasi fakta sebelum menekan tombol terbit. Satu koreksi terbuka lebih baik daripada seribu klik dari judul menyesatkan.",
  },
  {
    title: "Tanpa clickbait",
    desc: "Judul kami menggambarkan isi. Pembaca yang kecewa dengan judul tidak akan kembali — kami membangun kepercayaan, bukan sekadar traffic.",
  },
  {
    title: "Terbuka untuk semua",
    desc: "Tanpa login wajib, tanpa paywall. Informasi yang baik seharusnya bisa diakses siapa pun.",
  },
];

function initials(name) {
  return name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

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

      <h2>Prinsip Redaksi</h2>
      <ul className="values">
        {values.map((v) => (
          <li key={v.title}>
            <span className="v-check">
              <IconCheck />
            </span>
            <span>
              <b>{v.title}.</b> {v.desc}
            </span>
          </li>
        ))}
      </ul>

      <h2>Tim Redaksi</h2>
      <p>
        News5 dijalankan oleh tim kecil yang merangkap banyak peran —
        menulis, mengedit, memotret, dan menerbitkan.
      </p>
      <div className="team-grid">
        {team.map((t) => (
          <div className="team-card" key={t.name}>
            <span className="avatar">{initials(t.name)}</span>
            <div>
              <b>{t.name}</b>
              <span>{t.role}</span>
            </div>
          </div>
        ))}
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
