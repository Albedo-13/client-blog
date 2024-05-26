import Link from "next/link";

import { SecondaryButton } from "@/libs/ui/buttons/buttons";

import { Navigation } from "../navigation/navigation";
import styles from "./header.module.scss";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        {/* TODO: */}
        <Navigation></Navigation>
      </div>
    </header>
  );
}
