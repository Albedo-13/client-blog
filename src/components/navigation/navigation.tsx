import Link from "next/link";

import { SecondaryButton } from "@/libs/ui/buttons/buttons";

import styles from "./navigation.module.scss";

export function Navigation() {
  return (
    <nav className={styles.flex}>
      <a className={styles.logo} href="#">
        Modsen Client Blog
      </a>
      <div className={styles.navWrapper}>
        <ul className={styles.flex}>
          <li>
            <Link className={styles.link} href="#">
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
        </ul>
        <SecondaryButton>Video about us</SecondaryButton>
      </div>
    </nav>
  );
}
