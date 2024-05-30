import styles from "./inputs.module.scss";

// TODO: any
export function InputText({ placeholder }: any) {
  return (
    <input className={styles.input} placeholder={placeholder} />
  )
}

export function InputTextArea({ placeholder }: any) {
  return (
    <textarea className={styles.textarea} placeholder={placeholder} />
  )
}
