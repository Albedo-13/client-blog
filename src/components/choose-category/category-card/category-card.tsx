"use client";

import Image from "next/image";
import { useLocale } from "next-intl";

import { ICON_HEIGHT, ICON_WIDTH } from "@/constants/image-sizes";
import { Routes } from "@/constants/routes";
import { Link as LinkI18N } from "@/navigation";

import styles from "./category-card.module.scss";

type CategoryCardProps = {
  title: string;
  description: string;
  image: string;
};

export function CategoryCard({ title, description, image }: CategoryCardProps) {
  const locale = useLocale();

  return (
    <LinkI18N
      href={{
        pathname: Routes.CATEGORY,
        query: { category: title },
      }}
      locale={locale}
      className={styles.card}
    >
      <div className={styles.imageWrapper}>
        <Image src={image} alt={title} width={ICON_WIDTH} height={ICON_HEIGHT} />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </LinkI18N>
  );
}
