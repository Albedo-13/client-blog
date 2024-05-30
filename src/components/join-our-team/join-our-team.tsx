"use client";

import { useRouter } from "next/navigation";

import { Routes } from "@/constants/routes";
import { PrimaryButton } from "@/libs/ui/buttons/buttons";

import styles from "./join-our-team.module.scss";

export function JoinOurTeam() {
  const router = useRouter();

  const handleRedirectClick = () => {
    router.push(Routes.CONTACT);
  };

  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>Join our team to be a part of our story</h2>
        <p className={styles.subtitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
        </p>
        <PrimaryButton onClick={handleRedirectClick}>Join Now</PrimaryButton>
      </div>
    </section>
  );
}
