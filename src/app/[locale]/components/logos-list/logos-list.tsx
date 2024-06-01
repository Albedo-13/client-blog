import Image from "next/image";
import { getTranslations } from "next-intl/server";

import { LOGOS } from "@/data/logos";

import styles from "./logos-list.module.scss";

export async function LogosList() {
  const t = await getTranslations("LogosList");

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.prefix}>
            {t("weAre")}
            <br />
            <span>{t("featured")}</span>
          </div>
          {LOGOS.map((logo) => (
            <Image
              key={logo.id}
              className={styles.image}
              src={logo.image}
              alt={logo.alternative}
              height={32}
              width={150}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
