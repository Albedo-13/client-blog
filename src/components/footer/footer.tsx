"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";

import facebookNegIcon from "/public/socials/facebook-neg.svg";
import instagramNegIcon from "/public/socials/instagram-neg.svg";
import linkedinNegIcon from "/public/socials/linkedin-neg.svg";
import twitterNegIcon from "/public/socials/twitter-neg.svg";
import { Button } from "@/libs/ui/buttons/buttons";

import { Navigation } from "../navigation/navigation";
import styles from "./footer.module.scss";
import { schema } from "./form-schema";

export function Footer() {
  const t = useTranslations("Footer");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("halo");
  };

  return (
    <footer className={styles.footer} onSubmit={handleSubmit(onSubmit)}>
      <div className="container">
        <Navigation videoVisible={false} policyVisible={true} />
        <form className={styles.wrapper}>
          <h2 className={styles.title}>{t("title")}</h2>
          <div className={styles.inputWrapper}>
            <input {...register("email")} className={styles.input} placeholder={t("inputPlaceholder")} type="text" />
            {errors.email && <p className={styles.error}>{errors.email.message}</p>}
            <Button type="submit" variant="primary">
              {t("button")}
            </Button>
          </div>
        </form>
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
