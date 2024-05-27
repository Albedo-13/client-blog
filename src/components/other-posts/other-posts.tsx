import { POSTS } from "@/data/blog-posts";

import { OtherPost } from "./other-post/other-post";
import styles from "./other-posts.module.scss";

export function OtherPosts() {
  // TODO: filter by current post' category
  const posts = POSTS.slice(0, 3);

  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>What to read next</h2>
        <div className={styles.wrapper}>
          {posts.map((post) => (
            <OtherPost key={post.id} post={post} />
          ))}
        </div>
        <hr className={styles.separator} />
      </div>
    </section>
  );
}
