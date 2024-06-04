import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

import { POSTS_PER_PAGE } from "@/constants/constants";
import { Routes } from "@/constants/routes";
import { POSTS } from "@/data/blog-posts";
import { Link as LinkI18N } from "@/navigation";

import styles from "./all-posts.module.scss";

export function AllPosts() {
  const t = useTranslations("AllPosts");
  const locale = useLocale();

  const posts = POSTS.slice(0, POSTS_PER_PAGE);

  return (
    <section className={styles.section}>
      <h2 className={styles.head}>{t("allPosts")}</h2>
      {posts.map((post, index) => (
        <Link href={`${Routes.BLOG}/${post.id}`} className={styles.card} key={index}>
          <div className={styles.wrapper}>
            <p className={styles.creds}>
              By <span>{post.author.name}</span> | {post.date}
            </p>
            <p className={styles.title}>{post.title}</p>
          </div>
        </Link>
      ))}
      <LinkI18N href={`${Routes.BLOG}`} className={styles.link} locale={locale}>
        {t("viewAll")}
      </LinkI18N>
    </section>
  );
}
