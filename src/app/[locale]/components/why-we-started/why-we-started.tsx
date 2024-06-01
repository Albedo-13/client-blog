"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

import whyStartedImage from "/public/images/people-hugging-together.webp";
import { Routes } from "@/constants/routes";
import { useRedirect } from "@/hooks/use-redirect";
import { Button } from "@/libs/ui/buttons/buttons";

import styles from "./why-we-started.module.scss";

export function WhyWeStarted() {
  const t = useTranslations("WhyWeStarted");
  const { handleRedirectClick } = useRedirect(Routes.ABOUT_US);

  return (
    <section className={styles.section}>
      <div className="container">
        <Image className={styles.image} src={whyStartedImage} alt="people hugging together" />
        <div className={styles.card}>
          <p className={styles.subtitle}>{t("subtitle")}</p>
          <h2 className={styles.title}>{t("title")}</h2>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
          </p>
          <Button type="primary" onClick={handleRedirectClick}>
            {t("discover")}
          </Button>
        </div>
      </div>
    </section>
  );
}
