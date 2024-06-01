import { getTranslations } from "next-intl/server";

import styles from "./working-hours.module.scss";

export async function WorkingHours() {
  const t = await getTranslations("WorkingHours");

  return (
    <section className={styles.section}>
      <div className={styles.card}>
        <div className={styles.column}>
          <h3 className={styles.title}>{t("workHours")}</h3>
          <hr className={styles.separator} />
          <p className={styles.text}>{t("monToFri")}</p>
          <p className={styles.text}>{t("time")}</p>
          <p className={styles.cellar}>{t("support")}</p>
        </div>
        <div className={styles.column}>
          <h3 className={styles.title}>{t("contactUs")}</h3>
          <hr className={styles.separator} />
          <p className={styles.text}>020 7993 2905</p>
          <p className={styles.cellar}>hello@finsweet.com</p>
        </div>
      </div>
    </section>
  );
}
