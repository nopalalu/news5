import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Intro from "../components/Intro";

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "900"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata = {
  title: "News5 — Berita Terupdate Setiap Hari",
  description:
    "News5 adalah portal berita modern: liputan hukum, hiburan, politik, dan game yang cepat, akurat, dan terpercaya.",
};

export default function RootLayout({ children }) {
  const today = new Date().toLocaleDateString("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return (
    <html lang="id" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        <Intro />
        <div className="topbar">
          <div className="container">
            <span>
              <span className="live-dot" />
              {today} — Edisi Pagi
            </span>
            <span>Berita terupdate hanya di News5</span>
          </div>
        </div>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
