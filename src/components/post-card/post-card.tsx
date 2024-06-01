import Image from "next/image";
import Link from "next/link";

import { Routes } from "@/constants/routes";

import styles from "./post-card.module.scss";

type BlogCardProps = {
  id: number,
  title: string;
  description: string;
  image: string;
  category: {
    label: string;
    icon: string;
    description: string;
  };
};

export function PostCard({ id, title, description, image, category }: BlogCardProps) {
  return (
    <Link href={`${Routes.BLOG}/${id}`} className={styles.card}>
      <Image src={image} alt={title} className={styles.image} width={350} height={250} />
      <div className={styles.wrapper}>
        <p className={styles.category}>{category.label}</p>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </Link>
  );
}
