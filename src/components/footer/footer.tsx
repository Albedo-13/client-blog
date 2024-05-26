import { Navigation } from "../navigation/navigation";
import styles from "./footer.module.scss";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <Navigation videoVisible={false} />
      </div>
    </footer>
  );
}
