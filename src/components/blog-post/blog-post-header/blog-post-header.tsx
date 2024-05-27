import Image from "next/image";

import { AVATAR_HEIGHT, AVATAR_WIDTH, ICON_HEIGHT, ICON_WIDTH } from "@/constants/image-sizes";
import { BlogPost } from "@/types";

import styles from "./blog-post-header.module.scss";

type BlogPostHeaderProps = {
  post: BlogPost;
};

export function BlogPostHeader({ post }: BlogPostHeaderProps) {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.authorWrapper}>
            <Image
              className={styles.authorImage}
              src={post.authorImage}
              width={AVATAR_WIDTH}
              height={AVATAR_HEIGHT}
              alt="author"
            />
            <div>
              <p className={styles.author}>{post.author}</p>
              <p className={styles.creds}>Posted on {post.date}</p>
            </div>
          </div>
          <h1 className={styles.title}>{post.title}</h1>
          <div className={styles.category}>
            <Image
              className={styles.categoryImage}
              src={post.category.icon}
              width={ICON_WIDTH}
              height={ICON_HEIGHT}
              alt="category"
            />
            <p className={styles.categoryText}>{post.category.label}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
