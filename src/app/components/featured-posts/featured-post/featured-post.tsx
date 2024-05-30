"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import postImage from "/public/images/white-concrete-building.webp";
import { Routes } from "@/constants/routes";
import { POSTS } from "@/data/blog-posts";
import { PrimaryButton } from "@/libs/ui/buttons/buttons";

import styles from "./featured-post.module.scss";

export default function FeaturedPost() {
  const router = useRouter();
  const post = POSTS[0];

  const handleRedirectClick = () => {
    router.push(`${Routes.BLOG}/${post.id}`);
  };

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
        <PrimaryButton onClick={handleRedirectClick}>{"Read More >"}</PrimaryButton>
      </div>
    </section>
  );
}
