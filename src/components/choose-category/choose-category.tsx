"use client";

import { useTranslations } from "next-intl";

import { CATEGORIES } from "@/data/categories";

import { CategoryCard } from "./category-card/category-card";
import styles from "./choose-category.module.scss";

export function ChooseCategory() {
  const t = useTranslations("ChooseCategory");

  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>{t("title")}</h2>
        <div className={styles.cards}>
          {Object.values(CATEGORIES).map((cardData) => (
            <CategoryCard
              key={cardData.id}
              title={cardData.label}
              image={cardData.icon}
              description={cardData.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
