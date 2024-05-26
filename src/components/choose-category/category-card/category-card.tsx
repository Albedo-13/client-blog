import Image from "next/image";
import Link from "next/link";

import styles from "./category-card.module.scss";

type CategoryCardProps = {
  title: string;
  description: string;
  image: string;
};

export function CategoryCard({ title, description, image }: CategoryCardProps) {
  return (
    <Link href="#" className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image src={image} alt={title} width={23} height={23}></Image>
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </Link>
  );
}
