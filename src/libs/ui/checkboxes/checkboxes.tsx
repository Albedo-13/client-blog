import styles from "./checkboxes.module.scss";

export function CheckboxButton({ id, name, label, checked, onChange }: any) {
  return (
    <label className={styles.checkbox} htmlFor={id}>
      <input
        type="checkbox"
        name={name}
        id={id}
        className={styles.input}
        checked={checked}
        value={label}
        onChange={onChange}
      />
      {label}
    </label>
  );
}
