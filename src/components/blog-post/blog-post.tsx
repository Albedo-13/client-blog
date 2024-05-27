import styles from "./blog-post.module.scss";
import { BlogPostContent } from "./blog-post-content/blog-post-content";
import { BlogPostHeader } from "./blog-post-header/blog-post-header";

export function BlogPost() {
  return (
    <section className={styles.section}>
      <BlogPostHeader />
      <BlogPostContent />
    </section>
  );
}
