import { IconCheck } from "../../components/icons";
import { T } from "../../components/Lang";

export const metadata = {
  title: "Tentang Kami — News5",
  description: "Mengenal News5: portal berita modern Indonesia.",
};

const team = [
  { name: "Rina Kartika", roleKey: "about.r1" },
  { name: "Salsa Bila", roleKey: "about.r2" },
  { name: "Andi Nugraha", roleKey: "about.r3" },
  { name: "Rizky Ramadhan", roleKey: "about.r4" },
  { name: "Maya Anggraini", roleKey: "about.r5" },
  { name: "Bagas Pratama", roleKey: "about.r6" },
];

const values = [
  { titleKey: "about.v1t", descKey: "about.v1d" },
  { titleKey: "about.v2t", descKey: "about.v2d" },
  { titleKey: "about.v3t", descKey: "about.v3d" },
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
      <h1>
        <T k="about.title" />
      </h1>
      <p>
        <T k="about.p1" />
      </p>
      <p>
        <T k="about.p2" />
      </p>

      <div className="stat-row">
        <div className="stat">
          <div className="num">4</div>
          <div className="lbl">
            <T k="about.s1" />
          </div>
        </div>
        <div className="stat">
          <div className="num">12+</div>
          <div className="lbl">
            <T k="about.s2" />
          </div>
        </div>
        <div className="stat">
          <div className="num">100%</div>
          <div className="lbl">
            <T k="about.s3" />
          </div>
        </div>
      </div>

      <h2>
        <T k="about.valuesTitle" />
      </h2>
      <ul className="values">
        {values.map((v) => (
          <li key={v.titleKey}>
            <span className="v-check">
              <IconCheck />
            </span>
            <span>
              <b>
                <T k={v.titleKey} />.
              </b>{" "}
              <T k={v.descKey} />
            </span>
          </li>
        ))}
      </ul>

      <h2>
        <T k="about.teamTitle" />
      </h2>
      <p>
        <T k="about.teamP" />
      </p>
      <div className="team-grid">
        {team.map((t) => (
          <div className="team-card" key={t.name}>
            <span className="avatar">{initials(t.name)}</span>
            <div>
              <b>{t.name}</b>
              <span>
                <T k={t.roleKey} />
              </span>
            </div>
          </div>
        ))}
      </div>

      <p>
        <T k="about.p3" />
      </p>
      <p>
        <T k="about.p4" />
      </p>
    </div>
  );
}
