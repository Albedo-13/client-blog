import Image from "next/image";
import { getTranslations } from "next-intl/server";

import hugging from "/public/images/people-hugging-together-wide.webp";
import { AboutUs } from "@/components/about-us/about-us";

import styles from "./mission-vision.module.scss";

export async function MissionVision() {
  const t = await getTranslations("MissionVision");

  return (
    <section className="container">
      <div className={styles.wrapper}>
        <div className={styles.aboutUsHeader}>
          <div className={styles.aboutUsHeaderLeft}>
            <p className={styles.subtitle}>{t("aboutUs")}</p>
            <h2 className={styles.title}>{t("sharingTeam")}</h2>
          </div>
          <div className={styles.aboutUsHeaderRight}>
            <p className={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </p>
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <div className={styles.stats}>
            <div>
              <h3 className={styles.value}>12+</h3>
              <p className={styles.description}>{t("blogsPublished")}</p>
            </div>
            <div>
              <h3 className={styles.value}>18K+</h3>
              <p className={styles.description}>{t("viewsOnFinsweet")}</p>
            </div>
            <div>
              <h3 className={styles.value}>30K+</h3>
              <p className={styles.description}>{t("totalUsers")}</p>
            </div>
          </div>
          <Image src={hugging} className={styles.image} alt="people hugging" />
        </div>
        <AboutUs />
      </div>
    </section>
  );
}
