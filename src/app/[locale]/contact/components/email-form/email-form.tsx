"use client";

import { Button } from "@albedo13/client-blog-ui-kit";
import emailjs from "@emailjs/browser";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";

import { getBuildEnv } from "@/utils/env-mapper";

import styles from "./email-form.module.scss";
import { schema } from "./form-schema";
import { InputWithError } from "./input-with-error/input-with-error";

type FormDataType = {
  fullName?: string;
  email?: string;
  message?: string;
};

const serviceId = getBuildEnv("EMAIL_SERVICE_ID");
const publicKey = getBuildEnv("EMAIL_PUBLIC_KEY");
const templateId = getBuildEnv("EMAIL_CONTACT_TEMPLATE_ID");

export function EmailForm() {
  const t = useTranslations("EmailForm");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormDataType>({
    resolver: yupResolver(schema),
  });

  const sendEmail = (data: FormDataType) => {
    const emailData = {
      fullName: data.fullName,
      email: data.email,
      message: data.message,
    };

    emailjs.send(serviceId!, templateId!, emailData, publicKey).then(
      () => {
        reset();
      },
      (error) => {
        throw new Error(error);
      }
    );
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(sendEmail)}>
      <div className="container">
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
      </div>
    </form>
  );
}
