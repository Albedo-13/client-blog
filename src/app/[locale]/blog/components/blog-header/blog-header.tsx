"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

import { Routes } from "@/constants/routes";
import { POSTS } from "@/data/blog-posts";
import { useRedirect } from "@/hooks/use-redirect";
import { Button } from "@/libs/ui/buttons/buttons";

import styles from "./blog-header.module.scss";

export function BlogHeader() {
  const t = useTranslations("BlogHeader");
  const post = POSTS[0];
  const { handleRedirectClick } = useRedirect(`${Routes.BLOG}/${post.id}`);

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.wrapperLeft}>
            <p className={styles.subtitle}>{t("postedOn", { label: post.category.label })}</p>
            <h1 className={styles.title}>{post.title}</h1>
            <p className={styles.creds}>
              By <span>{post.author.name}</span> | {post.date}
            </p>
            <p className={styles.description}>{post.description}</p>

            <Button type="primary" onClick={handleRedirectClick}>
              {t("readMore")}
            </Button>
          </div>
          <div className={styles.wrapperRight}>
            <Image src={post.image} width={515} height={360} alt="post image" />
          </div>
        </div>
      </div>
    </section>
  );
}
