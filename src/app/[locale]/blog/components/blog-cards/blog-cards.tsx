"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";

import { PostCard } from "@/components/post-card/post-card";
import { POSTS_PER_PAGE } from "@/constants/constants";
import { POSTS } from "@/data/blog-posts";

import styles from "./blog-cards.module.scss";

const MIN_PAGE = 1;
const MAX_PAGE = Math.ceil(POSTS.length / POSTS_PER_PAGE);

export function BlogCards() {
  const t = useTranslations("BlogCards");
  const [page, setPage] = useState(MIN_PAGE);

  const handlePrevClick = () => {
    if (page - 1 < MIN_PAGE) return;
    setPage(page - 1);
  };

  const handleNextClick = () => {
    if (page + 1 > MAX_PAGE) return;
    setPage(() => page + 1);
  };

  const filteredPosts = POSTS.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE);
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>{t("allPosts")}</h2>
        <hr className={styles.divider} />
        <div className={styles.cards}>
          {filteredPosts.map((postData) => (
            <PostCard key={postData.id} {...postData} />
          ))}
        </div>

        <div className={styles.pagination}>
          <button className={styles.arrow} onClick={handlePrevClick} disabled={page === MIN_PAGE}>
            {t("prev")}
          </button>
          <button className={styles.arrow} onClick={handleNextClick} disabled={page === MAX_PAGE}>
            {t("next")}
          </button>
        </div>
      </div>
    </section>
  );
}
