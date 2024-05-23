import styles from "./buttons.module.scss";

type ButtonsProps = {
  children: React.ReactNode;
};

// TODO: collapse

export function PrimaryButton({ children }: ButtonsProps) {
  return <button className={`${styles.button} ${styles.primaryButton}`}>{children}</button>;
}

export function SecondaryButton({ children }: ButtonsProps) {
  return <button className={`${styles.button} ${styles.secondaryButton}`}>{children}</button>;
}
