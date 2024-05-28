import Image from "next/image";

import { ICON_HEIGHT, ICON_WIDTH } from "@/constants/image-sizes";

import styles from "./radios.module.scss";

// TODO: any type
export default function RadioButton({ id, name, icon, label, checked, onChange }: any) {
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
      <Image src={icon} className={styles.image} width={ICON_WIDTH} height={ICON_HEIGHT} alt="radio image" />
      {label}
    </label>
  );
}
