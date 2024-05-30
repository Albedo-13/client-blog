import styles from "./working-hours.module.scss";

export function WorkingHours() {
  return (
    <section className={styles.section}>
      <div className={styles.card}>
        <div className={styles.column}>
          <h3 className={styles.title}>Working hours</h3>
          <hr className={styles.separator} />
          <p className={styles.text}>Monday To Friday</p>
          <p className={styles.text}>9:00 AM to 8:00 PM </p>
          <p className={styles.cellar}>Our Support Team is available 24/7</p>
        </div>
        <div className={styles.column}>
          <h3 className={styles.title}>Contact Us</h3>
          <hr className={styles.separator} />
          <p className={styles.text}>020 7993 2905</p>
          <p className={styles.cellar}>hello@finsweet.com</p>
        </div>
      </div>
    </section>
  );
}
