"use client";

import { Routes } from "@/constants/routes";
import { useRedirect } from "@/hooks/use-redirect";
import { Button } from "@/libs/ui/buttons/buttons";

import styles from "./join-our-team.module.scss";

export function JoinOurTeam() {
  const { handleRedirectClick } = useRedirect(Routes.CONTACT);

  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>Join our team to be a part of our story</h2>
        <p className={styles.subtitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
        </p>
        <Button type="primary" onClick={handleRedirectClick}>
          Join Now
        </Button>
      </div>
    </section>
  );
}
