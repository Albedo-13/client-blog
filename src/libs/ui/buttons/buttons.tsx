import styles from "./buttons.module.scss";

type ButtonsProps = {
  variant: "primary" | "secondary";
  type?: "button" | "submit";
  children: React.ReactNode;
  onClick?: VoidFunction;
};

export function Button({ variant, type = "button", children, onClick }: ButtonsProps) {
  return (
    <button className={`${styles.button} ${styles.primaryButton}`} type={type} data-variant={variant} onClick={onClick}>
      {children}
    </button>
  );
}
