import { POSTS } from "@/data/blog-posts";

import styles from "./blog-post.module.scss";
import { BlogPostContent } from "./blog-post-content/blog-post-content";
import { BlogPostHeader } from "./blog-post-header/blog-post-header";

export function BlogPost() {
  const post = POSTS[0];
  
  return (
    <section className={styles.section}>
      <BlogPostHeader post={post} />
      <BlogPostContent post={post} />
    </section>
  );
}
