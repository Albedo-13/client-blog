import Image from "next/image";

import { BlogPost } from "@/types";

import styles from "./blog-post-content.module.scss";

type BlogPostContentProps = {
  post: BlogPost;
};

export function BlogPostContent({ post }: BlogPostContentProps) {
  return (
    <div>
      <Image src={post.image} className={styles.image} alt="blog post content" width={1280} height={900} />
      <div className={styles.content}>
        <div className={styles.text}>{post.content}</div>
      </div>
    </div>
  );
}
