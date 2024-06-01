import Image from "next/image";
import { getTranslations } from "next-intl/server";

import image1 from "/public/images/ground-group-growth-hands.webp";
import image2 from "/public/images/three-persons-sitting-on-the-stairs-talking-with-each-other.webp";

import styles from "./know-our-team.module.scss";

export async function KnowOurTeam() {
  const t = await getTranslations('KnowOurTeam');

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.block}>
          <div>
            <h3 className={styles.title}>{t("ourTeam")}</h3>
            <h4 className={styles.subtitle}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
            </h4>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat.
            </p>
          </div>
          <Image src={image1} className={styles.image} alt="ground group growth hands" />
        </div>
        <div className={styles.block}>
          <Image src={image2} className={styles.image} alt="ground group growth hands" />
          <div>
            <h3 className={styles.title}>{t("whyStarted")}</h3>
            <h4 className={styles.subtitle}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
            </h4>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
