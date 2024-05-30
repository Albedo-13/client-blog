"use client";

import Image from "next/image";

import postImage from "/public/images/white-concrete-building.webp";
import { Routes } from "@/constants/routes";
import { POSTS } from "@/data/blog-posts";
import { useRedirect } from "@/hooks/use-redirect";
import { Button } from "@/libs/ui/buttons/buttons";

import styles from "./featured-post.module.scss";

export default function FeaturedPost() {
  const post = POSTS[0];
  const { handleRedirectClick } = useRedirect(`${Routes.BLOG}/${post.id}`);

  return (
    <section className={styles.section}>
      <h2 className={styles.head}>Featured Post</h2>
      <div className={styles.wrapper}>
        <Image className={styles.image} src={postImage} alt="post image" />
        <p className={styles.creds}>
          By <span>{post.author.name}</span> | {post.date}
        </p>
        <p className={styles.title}>{post.title}</p>
        <p className={styles.description}>{post.description}</p>
        <Button type="primary" onClick={handleRedirectClick}>
          {"Read More >"}
        </Button>
      </div>
    </section>
  );
}
