import Link from "next/link";
import { getLocale } from "next-intl/server";

import { POSTS_PER_PAGE } from "@/constants/constants";
import { Routes } from "@/constants/routes";
import { POSTS } from "@/data/blog-posts";
import { Link as LinkI18N } from "@/navigation";

import styles from "./all-posts.module.scss";

export async function AllPosts() {
  const locale = await getLocale();

  const posts = POSTS.slice(0, POSTS_PER_PAGE);

  return (
    <section className={styles.section}>
      <h2 className={styles.head}>All Posts</h2>
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
        View All
      </LinkI18N>
    </section>
  );
}
