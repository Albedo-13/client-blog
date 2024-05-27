import { POSTS } from "@/data/blog-posts";
import { PrimaryButton } from "@/libs/ui/buttons/buttons";

import styles from "./home-hero.module.scss";

export function HomeHero() {
  const post = POSTS[0];

  return (
    <section className={styles.section}>
      <div>
        <div className="container">
          <p className={styles.subtitle}>
            posted on <span>{post.category.label}</span>
          </p>
          <h1 className={styles.title}>{post.title}</h1>
          <p className={styles.creds}>
            By <span>{post.author}</span> | {post.date}
          </p>
          <p className={styles.description}>{post.description}</p>

          <PrimaryButton>{"Read More >"}</PrimaryButton>
        </div>
      </div>
    </section>
  );
}
