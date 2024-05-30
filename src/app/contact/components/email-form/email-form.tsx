"use client";

import { Button } from "@/libs/ui/buttons/buttons";
import { InputText, InputTextArea } from "@/libs/ui/inputs/inputs";

import styles from "./email-form.module.scss";

export function EmailForm() {
  return (
    <form className={styles.form}>
      <div className={styles.formWrapper}>
        <InputText placeholder={"Full Name"} />
        <InputText placeholder={"Your Email"} />
        <InputTextArea placeholder={"Message"} />
        <Button type="primary" onClick={() => {}}>Send Message</Button>
      </div>
    </form>
  );
}
