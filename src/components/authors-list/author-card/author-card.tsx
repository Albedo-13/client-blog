"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SyntheticEvent } from "react";

import facebookIcon from "/public/socials/facebook.svg";
import instagramIcon from "/public/socials/instagram.svg";
import linkedinIcon from "/public/socials/linkedin.svg";
import twitterIcon from "/public/socials/twitter.svg";
import { AVATAR_CARD_HEIGHT, AVATAR_CARD_WIDTH, ICON_HEIGHT, ICON_WIDTH } from "@/constants/image-sizes";
import { Routes } from "@/constants/routes";
import { Author } from "@/types";

import styles from "./author-card.module.scss";

type AuthorCardProps = {
  author: Author;
};

export function AuthorCard({ author }: AuthorCardProps) {
  const router = useRouter();
  const { id, name, status, image, facebook, twitter, instagram, linkedin } = author;

  const handleSocialClick = (href?: string) => (e: SyntheticEvent) => {
    e.preventDefault();
    if (href) {
      router.push(href);
    }
  };

  return (
    <Link href={`${Routes.AUTHOR}/${id}`} className={styles.card}>
      <Image
        className={styles.image}
        src={image}
        alt={`${name} ${status}`}
        width={AVATAR_CARD_WIDTH}
        height={AVATAR_CARD_HEIGHT}
      />
      <p className={styles.name}>{name}</p>
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
    </Link>
  );
}
