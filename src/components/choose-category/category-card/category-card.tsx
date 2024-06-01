import Image from "next/image";
import Link from "next/link";

import { ICON_HEIGHT, ICON_WIDTH } from "@/constants/image-sizes";
import { Routes } from "@/constants/routes";

import styles from "./category-card.module.scss";

type CategoryCardProps = {
  title: string;
  description: string;
  image: string;
};

export function CategoryCard({ title, description, image }: CategoryCardProps) {
  return (
    <Link
      href={{
        pathname: Routes.CATEGORY,
        query: { category: title },
      }}
      className={styles.card}
    >
      <div className={styles.imageWrapper}>
        <Image src={image} alt={title} width={ICON_WIDTH} height={ICON_HEIGHT} />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </Link>
  );
}
