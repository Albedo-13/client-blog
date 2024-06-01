import { ChangeEvent } from "react";

import styles from "./checkboxes.module.scss";

type CheckboxButtonProps = {
  id: string;
  name: string;
  label: string;
  checked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export function CheckboxButton({ id, name, label, checked, onChange }: CheckboxButtonProps) {
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
      <p className={styles.text}>{label}</p>
    </label>
  );
}
