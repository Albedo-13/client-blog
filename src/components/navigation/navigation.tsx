"use client";

import { Button } from "@albedo13/client-blog-ui-kit";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";

import burgerImage from "/public/burger-menu.svg";
import { ICON_HEIGHT, ICON_WIDTH } from "@/constants/image-sizes";
import { Routes } from "@/constants/routes";
import { useModal } from "@/hooks/use-modal";
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
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);
  const pathname = usePathname();

  const handleNavigationToggle = () => {
    setIsNavigationOpen(!isNavigationOpen);
    shouldDisableScroll(!isNavigationOpen);
  };

  useEffect(() => {
    if (!isNavigationOpen) {
      shouldDisableScroll(showModal);
    }
  }, [showModal]);

  useEffect(() => {
    setIsNavigationOpen(false);
    shouldDisableScroll(false);
  }, [locale, pathname]);

  return (
    <nav className={styles.flex}>
      <LinkI18N className={styles.logo} href={Routes.HOME} locale={locale}>
        {t("title")}
      </LinkI18N>
      <div className={styles.navWrapper} data-visible={isNavigationOpen}>
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
        <LocaleSwitcher />
      </div>
      <button className={styles.burger} onClick={handleNavigationToggle}>
        <Image src={burgerImage} alt="navigation menu" width={ICON_WIDTH} height={ICON_HEIGHT} />
      </button>
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
