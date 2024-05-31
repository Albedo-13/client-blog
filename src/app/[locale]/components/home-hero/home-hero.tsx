"use client";

import { Routes } from "@/constants/routes";
import { POSTS } from "@/data/blog-posts";
import { useRedirect } from "@/hooks/use-redirect";
import { Button } from "@/libs/ui/buttons/buttons";

import styles from "./home-hero.module.scss";

export function HomeHero() {
  const post = POSTS[0];
  const { handleRedirectClick } = useRedirect(`${Routes.BLOG}/${post.id}`);

  return (
    <section className={styles.section}>
      <div>
        <div className="container">
          <p className={styles.subtitle}>
            posted on <span>{post.category.label}</span>
          </p>
          <h1 className={styles.title}>{post.title}</h1>
          <p className={styles.creds}>
            By <span>{post.author.name}</span> | {post.date}
          </p>
          <p className={styles.description}>{post.description}</p>

          <Button type="primary" onClick={handleRedirectClick}>
            {"Read More >"}
          </Button>
        </div>
      </div>
    </section>
  );
}