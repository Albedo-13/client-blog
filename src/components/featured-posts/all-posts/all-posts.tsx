import Link from "next/link";
import React from "react";

import styles from "./all-posts.module.scss";

export default function AllPosts() {
  return (
    <section className={styles.section}>
      <h2 className={styles.head}>All Posts</h2>
      {Array.from({ length: 5 }).map((_, index) => (
        <div className={styles.card} key={index}>
          <div className={styles.wrapper}>
            <p className={styles.creds}>
              By <span>John Doe</span> | May 23, 2024
            </p>
            <p className={styles.title}>8 Figma design systems that you can download for free today.</p>
          </div>
        </div>
      ))}
      <Link className={styles.link} href="#">View All</Link>
    </section>
  );
}
