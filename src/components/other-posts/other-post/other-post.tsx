import Image from "next/image";
import Link from "next/link";

import { BlogPost } from "@/types";

import styles from "./other-post.module.scss";

export function OtherPost({ post }: { post: BlogPost }) {
  return (
    <Link href="#" className={styles.card}>
      <Image src={post.image} className={styles.image} alt={post.title} width={350} height={250} />
      <p className={styles.creds}>
        By <span>{post.author.name}</span> | {post.date}
      </p>
      <p className={styles.title}>{post.title}</p>
      <p className={styles.description}>{post.description}</p>
    </Link>
  );
}
