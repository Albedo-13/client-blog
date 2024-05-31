"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { SyntheticEvent } from "react";

import facebookIcon from "/public/socials/facebook.svg";
import instagramIcon from "/public/socials/instagram.svg";
import linkedinIcon from "/public/socials/linkedin.svg";
import twitterIcon from "/public/socials/twitter.svg";
import { ICON_HEIGHT, ICON_WIDTH } from "@/constants/image-sizes";
import { Author } from "@/types";

import styles from "./author-hero.module.scss";

type AuthorHeroProps = {
  author: Author;
};

export default function AuthorHero({ author }: AuthorHeroProps) {
  const router = useRouter();
  const { name, status, image, facebook, twitter, instagram, linkedin } = author;

  const handleSocialClick = (href?: string) => (e: SyntheticEvent) => {
    e.preventDefault();
    if (href) {
      router.push(href);
    }
  };

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.wrapper}>
          <Image src={image} alt="author image" width={150} height={150} />
          <div className={styles.wrapperRight}>
            <p className={styles.name}>Hey there, I’m {name} and welcome to my Blog</p>
            <p className={styles.status}>{status}</p>
            <div className={styles.socials}>
              <div onClick={handleSocialClick(facebook)}>
                <Image src={facebookIcon} alt={`${name} facebook`} width={ICON_WIDTH} height={ICON_HEIGHT} />
              </div>
              <div onClick={handleSocialClick(twitter)}>
                <Image src={twitterIcon} alt={`${name} twitter`} width={ICON_WIDTH} height={ICON_HEIGHT} />
              </div>
              <div onClick={handleSocialClick(instagram)}>
                <Image src={instagramIcon} alt={`${name} instagram`} width={ICON_WIDTH} height={ICON_HEIGHT} />
              </div>
              <div onClick={handleSocialClick(linkedin)}>
                <Image src={linkedinIcon} alt={`${name} linkedin`} width={ICON_WIDTH} height={ICON_HEIGHT} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.yellowBlock} aria-hidden="true"></div>
      <div className={styles.purpleBlock} aria-hidden="true"></div>
    </section>
  );
}
