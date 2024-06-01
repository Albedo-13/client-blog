import styles from "./inputs.module.scss";

type InputProps = { placeholder: string };

export function InputText({ placeholder }: InputProps) {
  return <input className={styles.input} placeholder={placeholder} />;
}

export function InputTextArea({ placeholder }: InputProps) {
  return <textarea className={styles.textarea} placeholder={placeholder} />;
}
