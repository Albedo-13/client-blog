import Image from "next/image";

import PostImage from "/public/images/man-in-white-dress-shirt-sitting-on-black-rolling-chair-while-facing-black-computer-set-and-smiling.webp";
import { PrimaryButton } from "@/libs/ui/buttons/buttons";

import styles from "./blog-header.module.scss";

export function BlogHeader() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.wrapperLeft}>
            <p className={styles.subtitle}>posted on startup</p>
            <h1 className={styles.title}>Step-by-step guide to choosing great font pairs</h1>
            <p className={styles.creds}>
              By <span>James West</span> | May 23, 2024
            </p>
            <p className={styles.description}>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident.
            </p>

            <PrimaryButton>{"Read More >"}</PrimaryButton>
          </div>
          <div className={styles.wrapperRight}>
            <Image src={PostImage} alt="post image" />
          </div>
        </div>
      </div>
    </section>
  );
}
