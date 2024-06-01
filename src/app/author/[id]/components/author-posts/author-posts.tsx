import { PostCard } from "@/components/post-card/post-card";
import { POSTS } from "@/data/blog-posts";

import styles from "./author-posts.module.scss";

type AuthorPosts = {
  authorId: number;
};

export function AuthorPosts({ authorId }: AuthorPosts) {
  const authorPosts = POSTS.filter((post) => post.author.id === authorId);

  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>{authorPosts.length ? "My Posts" : "There is no posts..."}</h2>
        {authorPosts.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>
    </section>
  );
}
