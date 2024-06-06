import styles from "./blog-post.module.scss";
import { BlogPostContent } from "./blog-post-content/blog-post-content";
import { BlogPostHeader } from "./blog-post-header/blog-post-header";

export function BlogPost({ post }: any) {
  return (
    <section className={styles.section}>
      <div className="container">
        <BlogPostHeader post={post} />
        <BlogPostContent post={post} />
      </div>
    </section>
  );
}
