import styles from "./category-hero.module.scss";

export function CategoryHero() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>Categories</h2>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
        </p>
        <p className={styles.subtitle}>{"blog > categories"}</p>
      </div>
    </section>
  );
}
