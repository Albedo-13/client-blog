import { Navigation } from "../navigation/navigation";
import styles from "./header.module.scss";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Navigation videoVisible={true} policyVisible={false} />
      </div>
    </header>
  );
}
