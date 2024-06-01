"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

import { TESTIMONIALS } from "@/data/testimonials";

import styles from "./testimonials.module.scss";

export function Testimonials() {
  const t = useTranslations("Testimonials");

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.wrapper}>
          <div>
            <p className={styles.subtitle}>{t("testimonials")}</p>
            <h2 className={styles.title}>{t("title")}</h2>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
            </p>
          </div>
          <div className={styles.separatorVertical} aria-hidden="true"></div>
          <div className={styles.carousel}>
            <p className={styles.testimonial}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
            <div className={styles.authorWrapper}>
              <Image
                src={TESTIMONIALS[0].image}
                alt={TESTIMONIALS[0].name}
                width={48}
                height={48}
                className={styles.authorImage}
              />
              <div>
                <p className={styles.authorName}>{TESTIMONIALS[0].name}</p>
                <p className={styles.authorCity}>{TESTIMONIALS[0].city}</p>
              </div>
            </div>
          </div>
          <div className={styles.carouselArrows}>
            <button className={styles.arrow} aria-label="prev testimonial">
              ←
            </button>
            <button className={styles.arrow} aria-label="next testimonial">
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
