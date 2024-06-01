import Image from "next/image";
import { ChangeEvent } from "react";

import { ICON_HEIGHT, ICON_WIDTH } from "@/constants/image-sizes";

import styles from "./radios.module.scss";

type CheckboxButtonProps = {
  id: string;
  name: string;
  icon: string;
  label: string;
  checked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};


export function RadioButton({ id, name, icon, label, checked, onChange }: CheckboxButtonProps) {
  return (
    <label className={styles.radio} htmlFor={id}>
      <input
        type="radio"
        id={id}
        name={name}
        className={styles.input}
        value={label}
        checked={checked}
        onChange={onChange}
      />
      <div className={styles.imageWrapper}>
        <Image src={icon} className={styles.image} width={ICON_WIDTH} height={ICON_HEIGHT} alt="radio image" />
      </div>
      <p className={styles.text}>{label}</p>
    </label>
  );
}
