"use client";

import { useTranslations } from "next-intl";

import { Button } from "@/libs/ui/buttons/buttons";
import { InputText, InputTextArea } from "@/libs/ui/inputs/inputs";

import styles from "./email-form.module.scss";

export function EmailForm() {
  const t = useTranslations("EmailForm");

  return (
    <form className={styles.form}>
      <div className={styles.formWrapper}>
        <InputText placeholder={t("fullName")} />
        <InputText placeholder={t("email")} />
        <InputTextArea placeholder={t("textArea")} />
        <Button type="primary">{t("button")}</Button>
      </div>
    </form>
  );
}
