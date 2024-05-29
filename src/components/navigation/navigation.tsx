import Link from "next/link";

import { SecondaryButton } from "@/libs/ui/buttons/buttons";

import styles from "./navigation.module.scss";

type NavigationProps = {
  videoVisible: boolean;
  policyVisible: boolean;
};

export function Navigation({ videoVisible, policyVisible }: NavigationProps) {
  return (
    <nav className={styles.flex}>
      <Link className={styles.logo} href="/">
        Modsen Client Blog
      </Link>
      <div className={styles.navWrapper}>
        <ul className={styles.flex}>
          <li>
            <Link className={styles.link} href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={styles.link} href="/blog">
              Blog
            </Link>
          </li>
          <li>
            <Link className={styles.link} href="#">
              About us
            </Link>
          </li>
          <li>
            <Link className={styles.link} href="#">
              Contact us
            </Link>
          </li>
          <li className={styles.isVisible} data-visible={policyVisible}>
            <Link className={styles.link} href="#">
              Privacy Policy
            </Link>
          </li>
        </ul>
        <div className={styles.isVisible} data-visible={videoVisible}>
          <SecondaryButton>Video about us</SecondaryButton>
        </div>
      </div>
    </nav>
  );
}
