import Image from "next/image";

import { POSTS } from "@/data/blog-posts";
import { PrimaryButton } from "@/libs/ui/buttons/buttons";

import styles from "./blog-header.module.scss";

export function BlogHeader() {
  const post = POSTS[0];

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.wrapperLeft}>
            <p className={styles.subtitle}>posted on {post.category.label}</p>
            <h1 className={styles.title}>{post.title}</h1>
            <p className={styles.creds}>
              By <span>{post.author}</span> | {post.date}
            </p>
            <p className={styles.description}>{post.description}</p>

            <PrimaryButton>{"Read More >"}</PrimaryButton>
          </div>
          <div className={styles.wrapperRight}>
            <Image src={post.image} width={515} height={360} alt="post image" />
          </div>
        </div>
      </div>
    </section>
  );
}
