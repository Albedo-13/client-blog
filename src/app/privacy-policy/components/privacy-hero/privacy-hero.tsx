import styles from "./privacy-hero.module.scss";

export default function PrivacyHero() {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>Privacy Policy</h1>
      <p className={styles.description}>Last Updated on 27th January 2022</p>
    </section>
  );
}
