import Image from "next/image";

import postImage from "/public/images/white-concrete-building.webp";
import { PrimaryButton } from "@/libs/ui/buttons/buttons";

import styles from "./featured-post.module.scss";

export default function FeaturedPost() {
  return (
    <section className={styles.section}>
      <h2 className={styles.head}>Featured Post</h2>
      <div className={styles.wrapper}>
        <Image className={styles.image} src={postImage} alt="post image" />
        <p className={styles.creds}>
          By <span>John Doe</span> | May 23, 2024
        </p>
        <p className={styles.title}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
        <p className={styles.description}>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident.
        </p>
        <PrimaryButton>{"Read More >"}</PrimaryButton>
      </div>
    </section>
  );
}
