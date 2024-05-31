import { getLocale } from "next-intl/server";

import { Routes } from "@/constants/routes";
import { Link as LinkI18N } from "@/navigation";

import styles from "./about-us.module.scss";

export async function AboutUs() {
  const locale = await getLocale();

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.yellowBlock} aria-hidden="true"></div>
        <div className={styles.purpleBlock} aria-hidden="true"></div>
        <div className={styles.wrapper}>
          <div className={styles.wrapperElement}>
            <h2 className={styles.head}>about us</h2>
            <p className={styles.title}>We are a community of content writers who share their learnings</p>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
            <LinkI18N href={`${Routes.ABOUT_US}`} locale={locale} className={styles.link}>
              {"Read More >"}
            </LinkI18N>
          </div>
          <div className={styles.wrapperElement}>
            <h2 className={styles.head}>our mission</h2>
            <p className={styles.content}>Creating valuable content for creatives all around the world</p>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
