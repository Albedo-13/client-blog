import Image from "next/image";

import styles from "./logos-list.module.scss";

const LOGOS_DATA = [
  {
    id: 1,
    alternative: "alt text 1",
    image: "/logos/logo-1.svg",
  },
  {
    id: 2,
    alternative: "alt text 2",
    image: "/logos/logo-2.svg",
  },
  {
    id: 3,
    alternative: "alt text 3",
    image: "/logos/logo-3.svg",
  },
  {
    id: 4,
    alternative: "alt text 4",
    image: "/logos/logo-4.svg",
  },
  {
    id: 5,
    alternative: "alt text 5",
    image: "/logos/logo-5.svg",
  },
];

export function LogosList() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.prefix}>
            We are
            <br />
            <span>Featured in</span>
          </div>
          {LOGOS_DATA.map((logo) => (
            <Image
              key={logo.id}
              className={styles.image}
              src={logo.image}
              alt=""
              height={32}
              width={150}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
