import Image from "next/image";
import Link from "next/link";

import { Routes } from "@/constants/routes";
import { BlogPost } from "@/types";

import styles from "./other-post.module.scss";

type OtherPostProps = { post: BlogPost };

export function OtherPost({ post }: OtherPostProps) {
  return (
    <Link href={`${Routes.BLOG}/${post.id}`} className={styles.card}>
      <Image src={post.image} className={styles.image} alt={post.title} width={350} height={250} />
      <p className={styles.creds}>
        By <span>{post.author.name}</span> | {post.date}
      </p>
      <p className={styles.title}>{post.title}</p>
      <p className={styles.description}>{post.description}</p>
    </Link>
  );
}
