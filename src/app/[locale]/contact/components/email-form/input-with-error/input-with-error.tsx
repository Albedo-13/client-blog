import { FieldError } from "react-hook-form";

import styles from "./input-with-error.module.scss";

type InputWithErrorProps = { children: React.ReactNode; error?: FieldError };

export function InputWithError({ children, error }: InputWithErrorProps) {
  return (
    <div className={styles.inputWrapper}>
      {children}
      {error && <p className={styles.error}>{error.message}</p>}
    </div>
  );
}
