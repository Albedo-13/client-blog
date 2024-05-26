import { CategoryCard } from "./category-card/category-card";
import styles from "./choose-category.module.scss";

const CARDS_DATA = [
  {
    id: 1,
    title: "Business",
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    image: "/categories/building.svg",
  },
  {
    id: 2,
    title: "Startup",
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    image: "/categories/shuttle.svg",
  },
  {
    id: 3,
    title: "Economy",
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    image: "/categories/economy.svg",
  },
  {
    id: 4,
    title: "Technology",
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    image: "/categories/cyborg.svg",
  },
];

export function ChooseCategory() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>Choose A Category</h2>
        <div className={styles.cards}>
          {CARDS_DATA.map((cardData) => (
            <CategoryCard key={cardData.id} {...cardData} />
          ))}
        </div>
      </div>
    </section>
  );
}
