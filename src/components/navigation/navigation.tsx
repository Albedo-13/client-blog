"use client";

import Link from "next/link";

import { Routes } from "@/constants/routes";
import { Button } from "@/libs/ui/buttons/buttons";

import styles from "./navigation.module.scss";

type NavigationProps = {
  videoVisible: boolean;
  policyVisible: boolean;
};

export function Navigation({ videoVisible, policyVisible }: NavigationProps) {
  return (
    <nav className={styles.flex}>
      <Link className={styles.logo} href={Routes.HOME}>
        Modsen Client Blog
      </Link>
      <div className={styles.navWrapper}>
        <ul className={styles.flex}>
          <li>
            <Link className={styles.link} href={Routes.HOME}>
              Home
            </Link>
          </li>
          <li>
            <Link className={styles.link} href={Routes.BLOG}>
              Blog
            </Link>
          </li>
          <li>
            <Link className={styles.link} href={Routes.ABOUT_US}>
              About us
            </Link>
          </li>
          <li>
            <Link className={styles.link} href={Routes.CONTACT}>
              Contact us
            </Link>
          </li>
          <li className={styles.isVisible} data-visible={policyVisible}>
            <Link className={styles.link} href={Routes.PRIVACY_POLICY}>
              Privacy Policy
            </Link>
          </li>
        </ul>
        <div className={styles.isVisible} data-visible={videoVisible}>
          <Button type="secondary">Video about us</Button>
        </div>
      </div>
    </nav>
  );
}
