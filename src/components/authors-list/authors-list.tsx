import { AUTHORS } from "@/data/authors";

import { AuthorCard } from "./author-card/author-card";
import styles from "./authors-list.module.scss";

export function AuthorsList() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>List of Authors</h2>
        <div className={styles.cards}>
          {AUTHORS.map((authorData) => (
            <AuthorCard key={authorData.id} author={authorData} />
          ))}
        </div>
      </div>
    </section>
  );
}