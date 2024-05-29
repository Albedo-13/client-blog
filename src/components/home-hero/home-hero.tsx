"use client";

import { useRouter } from "next/navigation";

import { Routes } from "@/constants/routes";
import { POSTS } from "@/data/blog-posts";
import { PrimaryButton } from "@/libs/ui/buttons/buttons";

import styles from "./home-hero.module.scss";

export function HomeHero() {
  const router = useRouter();
  const post = POSTS[0];

  const handleRedirectClick = () => {
    router.push(`/${Routes.BLOG}/${post.id}`);
  };

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

          <PrimaryButton onClick={handleRedirectClick}>{"Read More >"}</PrimaryButton>
        </div>
      </div>
    </section>
  );
}
