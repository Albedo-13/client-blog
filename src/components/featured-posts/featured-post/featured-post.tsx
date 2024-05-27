import Image from "next/image";

import postImage from "/public/images/white-concrete-building.webp";
import { POSTS } from "@/data/blog-posts";
import { PrimaryButton } from "@/libs/ui/buttons/buttons";

import styles from "./featured-post.module.scss";

export default function FeaturedPost() {
  const post = POSTS[0];

  return (
    <section className={styles.section}>
      <h2 className={styles.head}>Featured Post</h2>
      <div className={styles.wrapper}>
        <Image className={styles.image} src={postImage} alt="post image" />
        <p className={styles.creds}>
          By <span>{post.author}</span> | {post.date}
        </p>
        <p className={styles.title}>{post.title}</p>
        <p className={styles.description}>{post.description}</p>
        <PrimaryButton>{"Read More >"}</PrimaryButton>
      </div>
    </section>
  );
}
