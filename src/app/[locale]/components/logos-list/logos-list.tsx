import Image from "next/image";

import { LOGOS } from "@/data/logos";

import styles from "./logos-list.module.scss";

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
          {LOGOS.map((logo) => (
            <Image key={logo.id} className={styles.image} src={logo.image} alt="" height={32} width={150} />
          ))}
        </div>
      </div>
    </section>
  );
}
