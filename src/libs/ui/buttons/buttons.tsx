import styles from "./buttons.module.scss";

type ButtonsProps = {
  type: "primary" | "secondary";
  children: React.ReactNode;
  onClick: VoidFunction;
};

export function Button({ type, children, onClick }: ButtonsProps) {
  return (
    <button className={`${styles.button} ${styles.primaryButton}`} data-type={type} onClick={onClick}>
      {children}
    </button>
  );
}
