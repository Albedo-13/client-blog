import { getTranslations } from "next-intl/server";

import { PostCard } from "@/components/post-card/post-card";
import { POSTS } from "@/data/blog-posts";

import styles from "./blog-cards.module.scss";

export async function BlogCards() {
  const t = await getTranslations("BlogCards");

  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>{t("allPosts")}</h2>
        <hr className={styles.divider} />
        <div className={styles.cards}>
          {POSTS.map((postData) => (
            <PostCard key={postData.id} {...postData} />
          ))}
        </div>

        <div className={styles.pagination}>
          <button className={styles.arrow} disabled>
            {t("prev")}
          </button>
          <button className={styles.arrow}>{t("next")}</button>
        </div>
      </div>
    </section>
  );
}
