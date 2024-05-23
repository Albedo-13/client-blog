import styles from "./buttons.module.scss";

type ButtonsProps = {
  children: React.ReactNode;
};

export function PrimaryButton() {
  return <button>button</button>;
}

export function SecondaryButton({ children }: ButtonsProps) {
  return <button className={`${styles.button} ${styles.secondaryButton}`}>{children}</button>;
}
