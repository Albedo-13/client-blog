import Image from "next/image";
import Link from "next/link";

import facebookNegIcon from "/public/socials/facebook-neg.svg";
import instagramNegIcon from "/public/socials/instagram-neg.svg";
import linkedinNegIcon from "/public/socials/linkedin-neg.svg";
import twitterNegIcon from "/public/socials/twitter-neg.svg";
import { Button } from "@/libs/ui/buttons/buttons";

import { Navigation } from "../navigation/navigation";
import styles from "./footer.module.scss";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <Navigation videoVisible={false} policyVisible={true} />
        <div className={styles.wrapper}>
          <h2 className={styles.title}>Subscribe to our news letter to get latest updates and news</h2>
          <div className={styles.inputWrapper}>
            <input className={styles.input} placeholder="Enter Your Email" type="text" />
            <Button type="primary">Subscribe</Button>
          </div>
        </div>
        <address className={styles.address}>
          <div className={styles.contacts}>
            <p>Finstreet 118 2561 Fintown</p>
            <p>Hello@finsweet.com 020 7993 2905</p>
          </div>
          <div className={styles.socials}>
            <Link href="https://www.facebook.com/ModsenSoftware/">
              <Image src={facebookNegIcon} alt="facebook" width={24} height={24} />
            </Link>
            <Link href="https://x.com/modsencompany">
              <Image src={twitterNegIcon} alt="twitter" width={24} height={24} />
            </Link>
            <Link href="https://www.instagram.com/modsencompany/">
              <Image src={instagramNegIcon} alt="instagram" width={24} height={24} />
            </Link>
            <Link href="https://www.linkedin.com/company/modsen/">
              <Image src={linkedinNegIcon} alt="linkedin" width={24} height={24} />
            </Link>
          </div>
        </address>
      </div>
    </footer>
  );
}
