import Image from "next/image";
import Link from "next/link";

import styles from "./blog-card.module.scss";

type BlogCardProps = {
  title: string;
  description: string;
  image: string;
  category: string;
};

export function BlogCard({ title, description, image, category }: BlogCardProps) {
  return (
    <Link href="#" className={styles.card}>
      <Image src={image} alt={title} className={styles.image} width={350} height={250} />
      <div className={styles.wrapper}>
        <p className={styles.category}>{category}</p>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </Link>
  );
}
