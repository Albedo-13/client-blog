import { AUTHORS } from "@/data/authors";

import { AuthorCard } from "./author-card/author-card";
import styles from "./list-of-authors.module.scss";

export function ListOfAuthors() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>List of Authors</h2>
        <div className={styles.cards}>
          {AUTHORS.map((authorData) => (
            <AuthorCard key={authorData.id} {...authorData} />
          ))}
        </div>
      </div>
    </section>
  );
}
