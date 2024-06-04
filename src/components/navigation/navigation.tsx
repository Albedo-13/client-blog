"use client";

import { useLocale, useTranslations } from "next-intl";
import { useEffect } from "react";

import { Routes } from "@/constants/routes";
import { useModal } from "@/hooks/use-modal";
import { Button } from "@/libs/ui/buttons/buttons";
import { Link as LinkI18N } from "@/navigation";

import LocaleSwitcher from "../locale-switcher/locale-switcher";
import { Modal } from "../modal/modal";
import { ModalPortal } from "../modal/modal-portal";
import { YoutubePlayer } from "../modal/yt-player/yt-player";
import styles from "./navigation.module.scss";

type NavigationProps = {
  videoVisible: boolean;
  policyVisible: boolean;
};

export function Navigation({ videoVisible, policyVisible }: NavigationProps) {
  const t = useTranslations("Navigation");
  const locale = useLocale();
  const { showModal, handleModalShow, handleModalClose, shouldDisableScroll } = useModal();

  useEffect(() => {
    shouldDisableScroll(showModal);
  });

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
          <Button variant="secondary" onClick={handleModalShow}>
            {t("videoAboutUs")}
          </Button>
        </div>
      </div>
      {showModal && (
        <ModalPortal>
          <Modal onClose={handleModalClose}>
            <YoutubePlayer />
          </Modal>
        </ModalPortal>
      )}
    </nav>
  );
}
