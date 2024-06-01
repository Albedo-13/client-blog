import { getTranslations } from "next-intl/server";

import styles from "./category-hero.module.scss";

export async function CategoryHero() {
  const t = await getTranslations("CategoryHero");

  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>{t("title")}</h2>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
        </p>
        <p className={styles.subtitle}>{t("subtitle")}</p>
      </div>
    </section>
  );
}
