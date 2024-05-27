import Image from "next/image";

import { BlogPost } from "@/types";

import styles from "./blog-post-content.module.scss";

type BlogPostContentProps = {
  post: BlogPost;
};

export function BlogPostContent({ post }: BlogPostContentProps) {
  return (
    <div>
      <div className="container">
        <Image src={post.image} className={styles.image} alt="blog post content" width={1280} height={900} />
      </div>
      <div className={styles.container}>
        <div className={styles.text}>{post.content}</div>
      </div>
    </div>
  );
}
