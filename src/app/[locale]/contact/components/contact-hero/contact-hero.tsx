import { getTranslations } from "next-intl/server";

import styles from "./contact-hero.module.scss";

export async function ContactHero() {
  const t = await getTranslations("ContactHero");

  return (
    <section className={styles.section}>
      <div className="container">
        <p className={styles.subtitle}>{t("subtitle")}</p>
        <h1 className={styles.title}>{t("title")}</h1>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim.
        </p>
      </div>
    </section>
  );
}
