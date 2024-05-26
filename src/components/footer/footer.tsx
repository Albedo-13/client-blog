import Image from "next/image";
import Link from "next/link";

import facebookIcon from "/public/socials/facebook.svg";
import instagramIcon from "/public/socials/instagram.svg";
import linkedinIcon from "/public/socials/linkedin.svg";
import twitterIcon from "/public/socials/twitter.svg";
import { PrimaryButton } from "@/libs/ui/buttons/buttons";

import { Navigation } from "../navigation/navigation";
import styles from "./footer.module.scss";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <Navigation videoVisible={false} />
        <div className={styles.wrapper}>
          <h2 className={styles.title}>Subscribe to our news letter to get latest updates and news</h2>
          <div className={styles.inputWrapper}>
            <input className={styles.input} placeholder="Enter Your Email" type="text" />
            <PrimaryButton>Subscribe</PrimaryButton>
          </div>
        </div>
        <address className={styles.address}>
          <div>
            <p>Finstreet 118 2561 Fintown</p>
            <p>Hello@finsweet.com 020 7993 2905</p>
          </div>
          <div className={styles.socials}>
            <Link href="#">
              <Image src={facebookIcon} alt="facebook" width={32} height={32} />
            </Link>
          </div>
        </address>
      </div>
    </footer>
  );
}
