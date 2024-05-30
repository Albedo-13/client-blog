import { POSTS } from "@/data/blog-posts";
import { Categories } from "@/types";

import { OtherPost } from "./other-post/other-post";
import styles from "./other-posts.module.scss";

export function OtherPosts({ category }: Categories) {
  const posts = POSTS.filter((post) => post.category.label === category.label).slice(0, 3);

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
