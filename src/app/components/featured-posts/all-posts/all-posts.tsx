import Link from "next/link";

import { POSTS_PER_PAGE } from "@/constants/constants";
import { Routes } from "@/constants/routes";
import { POSTS } from "@/data/blog-posts";

import styles from "./all-posts.module.scss";

export default function AllPosts() {
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
      <Link className={styles.link} href={`${Routes.BLOG}`}>
        View All
      </Link>
    </section>
  );
}
