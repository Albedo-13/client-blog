"use client";

import { useLocale, useTranslations } from "next-intl";

import { Routes } from "@/constants/routes";
import { Button } from "@/libs/ui/buttons/buttons";
import { Link as LinkI18N } from "@/navigation";

import LocaleSwitcher from "../locale-switcher/locale-switcher";
import styles from "./navigation.module.scss";

type NavigationProps = {
  videoVisible: boolean;
  policyVisible: boolean;
};

export function Navigation({ videoVisible, policyVisible }: NavigationProps) {
  const t = useTranslations("Navigation");
  const locale = useLocale();

  return (
    <nav className={styles.flex}>
      <LinkI18N className={styles.logo} href={Routes.HOME} locale={locale}>
        {t("title")}
      </LinkI18N>
      <LocaleSwitcher />
      <div className={styles.navWrapper}>
        <ul className={styles.flex}>
          <li>
            <LinkI18N className={styles.link} href={Routes.HOME} locale={locale}>
              {t("home")}
            </LinkI18N>
          </li>
          <li>
            <LinkI18N className={styles.link} href={Routes.BLOG} locale={locale}>
              {t("blog")}
            </LinkI18N>
          </li>
          <li>
            <LinkI18N className={styles.link} href={Routes.ABOUT_US} locale={locale}>
              {t("aboutUs")}
            </LinkI18N>
          </li>
          <li>
            <LinkI18N className={styles.link} href={Routes.CONTACT} locale={locale}>
              {t("contactUs")}
            </LinkI18N>
          </li>
          <li className={styles.isVisible} data-visible={policyVisible}>
            <LinkI18N className={styles.link} href={Routes.PRIVACY_POLICY} locale={locale}>
              {t("privacyPolicy")}
            </LinkI18N>
          </li>
        </ul>
        <div className={styles.isVisible} data-visible={videoVisible}>
          <Button variant="secondary">{t("videoAboutUs")}</Button>
        </div>
      </div>
    </nav>
  );
}
