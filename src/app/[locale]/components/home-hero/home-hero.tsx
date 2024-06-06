"use client";

import { Button } from "@albedo13/client-blog-ui-kit";
import { useTranslations } from "next-intl";

import { Routes } from "@/constants/routes";
import { POSTS } from "@/data/blog-posts";
import { useRedirect } from "@/hooks/use-redirect";

import styles from "./home-hero.module.scss";

export function HomeHero() {
  const t = useTranslations("HomeHero");
  const post = POSTS[0];
  const { handleRedirectClick } = useRedirect(`${Routes.BLOG}/${post.id}`);

  return (
    <section className={styles.section}>
      <div>
        <div className="container">
          <p className={styles.subtitle}>
            {t("postedOn")} <span>{post.category.label}</span>
          </p>
          <h1 className={styles.title}>{post.title}</h1>
          <p className={styles.creds}>
            By <span>{post.author.name}</span> | {post.date}
          </p>
          <p className={styles.description}>{post.description}</p>

          <Button variant="primary" onClick={handleRedirectClick}>
            {t("readMore")}
          </Button>
        </div>
      </div>
    </section>
  );
}
