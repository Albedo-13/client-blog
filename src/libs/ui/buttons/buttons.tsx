import styles from "./buttons.module.scss";

type ButtonsProps = {
  children: React.ReactNode;
  onClick: VoidFunction;
};

// TODO: collapse

export function PrimaryButton({ children, onClick }: ButtonsProps) {
  return (
    <button className={`${styles.button} ${styles.primaryButton}`} onClick={onClick}>
      {children}
    </button>
  );
}

export function SecondaryButton({ children, onClick }: ButtonsProps) {
  return (
    <button className={`${styles.button} ${styles.secondaryButton}`} onClick={onClick}>
      {children}
    </button>
  );
}
