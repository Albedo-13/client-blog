"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import whyStartedImage from "/public/images/people-hugging-together.webp";
import { Routes } from "@/constants/routes";
import { PrimaryButton } from "@/libs/ui/buttons/buttons";

import styles from "./why-we-started.module.scss";

export function WhyWeStarted() {
  const router = useRouter();

  const handleRedirectClick = () => {
    router.push(Routes.ABOUT_US);
  };

  return (
    <section className={styles.section}>
      <div className="container">
        <Image className={styles.image} src={whyStartedImage} alt="people hugging together" />
        <div className={styles.card}>
          <p className={styles.subtitle}>why we started</p>
          <h2 className={styles.title}>It started out as a simple idea and evolved into our passion</h2>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
          </p>
          <PrimaryButton onClick={handleRedirectClick}>{"Discover our story >"}</PrimaryButton>
        </div>
      </div>
    </section>
  );
}
