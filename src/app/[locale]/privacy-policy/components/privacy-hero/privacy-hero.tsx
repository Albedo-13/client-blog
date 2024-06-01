import { getTranslations } from "next-intl/server";

import styles from "./privacy-hero.module.scss";

export async function PrivacyHero() {
  const t = await getTranslations("PrivacyHero");

  return (
    <section className={styles.section}>
      <h1 className={styles.title}>{t("title")}</h1>
      <p className={styles.description}>{t("description")}</p>
    </section>
  );
}
