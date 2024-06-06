"use client";

import { Button } from "@albedo13/client-blog-ui-kit";
import Image from "next/image";
import { useTranslations } from "use-intl";

import postImage from "/public/images/white-concrete-building.webp";
import { Routes } from "@/constants/routes";
import { POSTS } from "@/data/blog-posts";
import { useRedirect } from "@/hooks/use-redirect";

import styles from "./featured-post.module.scss";

export function FeaturedPost() {
  const t = useTranslations("FeaturedPost");
  const post = POSTS[0];
  const { handleRedirectClick } = useRedirect(`${Routes.BLOG}/${post.id}`);

  return (
    <section className={styles.section}>
      <h2 className={styles.head}>{t("featured")}</h2>
      <div className={styles.wrapper}>
        <Image className={styles.image} src={postImage} alt="post image" />
        <p className={styles.creds}>
          By <span>{post.author.name}</span> | {post.date}
        </p>
        <p className={styles.title}>{post.title}</p>
        <p className={styles.description}>{post.description}</p>
        <Button variant="primary" onClick={handleRedirectClick}>
          {t("readMore")}
        </Button>
      </div>
    </section>
  );
}
