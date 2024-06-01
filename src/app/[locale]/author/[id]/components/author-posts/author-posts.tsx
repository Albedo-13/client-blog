import { getTranslations } from "next-intl/server";

import { PostCard } from "@/components/post-card/post-card";
import { POSTS } from "@/data/blog-posts";

import styles from "./author-posts.module.scss";

type AuthorPosts = {
  authorId: number;
};

export async function AuthorPosts({ authorId }: AuthorPosts) {
  const t = await getTranslations("AuthorPosts");
  const authorPosts = POSTS.filter((post) => post.author.id === authorId);

  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>{authorPosts.length ? t("posts") : t("noPosts")}</h2>
        {authorPosts.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>
    </section>
  );
}
