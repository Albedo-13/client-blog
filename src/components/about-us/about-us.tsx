"use client";

import { useLocale, useTranslations } from "next-intl";

import { Routes } from "@/constants/routes";
import { Link as LinkI18N } from "@/navigation";

import styles from "./about-us.module.scss";

export function AboutUs() {
  const t = useTranslations("AboutUs");
  const locale = useLocale();

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.yellowBlock} aria-hidden="true"></div>
        <div className={styles.purpleBlock} aria-hidden="true"></div>
        <div className={styles.wrapper}>
          <div className={styles.wrapperElement}>
            <h2 className={styles.head}>{t("aboutUsTitle")}</h2>
            <p className={styles.title}>{t("aboutUsText")}</p>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
            <LinkI18N href={`${Routes.ABOUT_US}`} locale={locale} className={styles.link}>
              {t("readMore")}
            </LinkI18N>
          </div>
          <div className={styles.wrapperElement}>
            <h2 className={styles.head}>{t("missionTitle")}</h2>
            <p className={styles.content}>{t("missionText")}</p>
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
