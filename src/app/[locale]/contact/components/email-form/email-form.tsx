"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";

import { Button } from "@/libs/ui/buttons/buttons";

import styles from "./email-form.module.scss";
import { schema } from "./form-schema";
import { InputWithError } from "./input-with-error/input-with-error";

export function EmailForm() {
  const t = useTranslations("EmailForm");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("halo");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.formWrapper}>
        <InputWithError error={errors.fullName}>
          <input {...register("fullName")} className={styles.input} placeholder={t("fullName")} />
        </InputWithError>
        <InputWithError error={errors.email}>
          <input {...register("email")} className={styles.input} placeholder={t("email")} />
        </InputWithError>
        <InputWithError error={errors.message}>
          <textarea {...register("message")} className={styles.textarea} placeholder={t("textArea")} />
        </InputWithError>
        <Button type="submit" variant="primary">
          {t("button")}
        </Button>
      </div>
    </form>
  );
}
