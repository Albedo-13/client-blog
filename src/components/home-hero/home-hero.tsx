import { PrimaryButton } from "@/libs/ui/buttons/buttons";

import styles from "./home-hero.module.scss";

export function HomeHero() {
  return (
    <section className={styles.section}>
      <div>
        <div className="container">
          <p className={styles.subtitle}>
            posted on <span>startup</span>
          </p>
          <h1 className={styles.title}>Step-by-step guide to choosing great font pairs</h1>
          <p className={styles.creds}>
            By <span>James West</span> | May 23, 2024
          </p>
          <p className={styles.description}>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident.
          </p>

          <PrimaryButton>{"Read More >"}</PrimaryButton>
        </div>
      </div>
    </section>
  );
}
