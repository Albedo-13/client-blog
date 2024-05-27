import Link from "next/link";

import { SecondaryButton } from "@/libs/ui/buttons/buttons";

import styles from "./navigation.module.scss";

export function Navigation({ videoVisible }: any) {
  console.log(videoVisible);
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
        </ul>
        <div className={styles.isVisible} data-visible={videoVisible}>
          <SecondaryButton>Video about us</SecondaryButton>
        </div>
      </div>
    </nav>
  );
}
