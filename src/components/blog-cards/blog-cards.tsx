import { POSTS } from "@/data/blog-posts";

import { PostCard } from "../post-card/post-card";
import styles from "./blog-cards.module.scss";

export function BlogCards() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>All posts</h2>
        <hr className={styles.divider} />
        <div className={styles.cards}>
          {POSTS.map((postData) => (
            <PostCard key={postData.id} {...postData} />
          ))}
        </div>

        <div className={styles.pagination}>
          <button className={styles.arrow} disabled>
            {"< Prev"}
          </button>
          <button className={styles.arrow}>{"Next >"}</button>
        </div>
      </div>
    </section>
  );
}
