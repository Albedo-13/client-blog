"use client";

import { Button } from "@albedo13/client-blog-ui-kit";
import emailjs from "@emailjs/browser";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useRef } from "react";
import { useForm } from "react-hook-form";

import facebookNegIcon from "/public/socials/facebook-neg.svg";
import instagramNegIcon from "/public/socials/instagram-neg.svg";
import linkedinNegIcon from "/public/socials/linkedin-neg.svg";
import twitterNegIcon from "/public/socials/twitter-neg.svg";
import { ICON_HEIGHT, ICON_WIDTH } from "@/constants/image-sizes";
import { getBuildEnv } from "@/utils/env-mapper";

import { Navigation } from "../navigation/navigation";
import styles from "./footer.module.scss";
import { schema } from "./form-schema";

type FormDataType = {
  email?: string;
};

const serviceId = getBuildEnv("EMAIL_SERVICE_ID");
const publicKey = getBuildEnv("EMAIL_PUBLIC_KEY");
const templateId = getBuildEnv("EMAIL_FOOTER_TEMPLATE_ID");

export function Footer() {
  const t = useTranslations("Footer");
  const formRef = useRef<HTMLFormElement>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormDataType>({
    resolver: yupResolver(schema),
  });

  const sendEmail = (data: FormDataType) => {
    const emailData = {
      subscriber: data.email,
    };

    emailjs.send(serviceId!, templateId!, emailData, publicKey).then(
      () => {
        reset();
      },
      (error) => {
        throw new Error(error);
      }
    );
  };

  return (
    <footer className={styles.footer} onSubmit={handleSubmit(sendEmail)}>
      <div className="container">
        <Navigation videoVisible={false} policyVisible={true} />
        <form ref={formRef} className={styles.wrapper}>
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
              <Image src={facebookNegIcon} alt="facebook" width={ICON_WIDTH} height={ICON_HEIGHT} />
            </Link>
            <Link href="https://x.com/modsencompany">
              <Image src={twitterNegIcon} alt="twitter" width={ICON_WIDTH} height={ICON_HEIGHT} />
            </Link>
            <Link href="https://www.instagram.com/modsencompany/">
              <Image src={instagramNegIcon} alt="instagram" width={ICON_WIDTH} height={ICON_HEIGHT} />
            </Link>
            <Link href="https://www.linkedin.com/company/modsen/">
              <Image src={linkedinNegIcon} alt="linkedin" width={ICON_WIDTH} height={ICON_HEIGHT} />
            </Link>
          </div>
        </address>
      </div>
    </footer>
  );
}
