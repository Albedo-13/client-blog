import Image from "next/image";

import authorThumb from "/public/authors/author-1.webp";
import categoryThumb from "/public/categories/shuttle.svg";

import styles from "./blog-post-header.module.scss";

export function BlogPostHeader() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.authorWrapper}>
            <Image className={styles.authorImage} src={authorThumb} alt="author" />
            <div>
              <p className={styles.author}>Andrew Jonson</p>
              <p className={styles.creds}>Posted on ...</p>
            </div>
          </div>
          <h1 className={styles.title}>Step-by-step guide to choosing great font pairs</h1>
          <div className={styles.category}>
            <Image className={styles.categoryImage} src={categoryThumb} alt="category" />
            <p className={styles.categoryText}>Startup</p>
          </div>
        </div>
      </div>
    </div>
  );
}
