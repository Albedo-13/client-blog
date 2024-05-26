import AllPosts from "./all-posts/all-posts";
import FeaturedPost from "./featured-post/featured-post";
import styles from "./featured-posts.module.scss";

export function FeaturedPosts() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.wrapper}>
          <FeaturedPost />
          <AllPosts />
        </div>
      </div>
    </section>
  );
}
