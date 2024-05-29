import styles from "./contact-hero.module.scss";

export function ContactHero() {
  return (
    <section className={styles.section}>
      <div className="container">
        <p className={styles.subtitle}>contact us</p>
        <h1 className={styles.title}>Let’s Start a Conversation</h1>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim.
        </p>
      </div>
    </section>
  );
}
