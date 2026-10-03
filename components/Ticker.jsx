import Link from "next/link";
import { articles, getCategory } from "../lib/articles";
import { IconFlame } from "./icons";
import { T, CatName } from "./Lang";

export default function Ticker() {
  const items = articles.slice(0, 8);
  const loop = [...items, ...items];

  return (
    <div className="ticker" aria-label="Berita terkini">
      <div className="container ticker-inner">
        <span className="ticker-label">
          <IconFlame />
          <T k="ticker.latest" />
        </span>
        <div className="ticker-viewport">
          <div className="ticker-track">
            {loop.map((a, i) => (
              <Link
                key={`${a.slug}-${i}`}
                href={`/artikel/${a.slug}`}
                className="ticker-item"
              >
                <span className="ticker-cat">
                  <CatName slug={a.category} />
                </span>
                {a.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
