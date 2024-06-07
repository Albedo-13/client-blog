"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { useState } from "react";

import { AVATAR_HEIGHT, AVATAR_WIDTH } from "@/constants/image-sizes";
import { TESTIMONIALS } from "@/data/testimonials";

import styles from "./testimonials.module.scss";

export function Testimonials() {
  const t = useTranslations("Testimonials");
  const testimonials = TESTIMONIALS;

  const [slide, setSlide] = useState(0);
  const LEFT_SLIDE_INDEX = 0;
  const RIGHT_SLIDE_INDEX = testimonials.length - 1;

  const handleNextSlide = () => {
    if (slide + 1 > RIGHT_SLIDE_INDEX) {
      setSlide(LEFT_SLIDE_INDEX);
    } else {
      setSlide((prev) => prev + 1);
    }
  };

  const handlePrevSlide = () => {
    if (slide - 1 < LEFT_SLIDE_INDEX) {
      setSlide(RIGHT_SLIDE_INDEX);
    } else {
      setSlide((prev) => prev - 1);
    }
  };

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.peopleSay}>
            <p className={styles.subtitle}>{t("testimonials")}</p>
            <h2 className={styles.title}>{t("title")}</h2>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
            </p>
          </div>
          <div className={styles.separatorVertical} aria-hidden="true"></div>

          <div className={styles.carousel}>
            <div
              style={{ transform: `translateX(calc(-100% * ${slide}))` }}
              className={styles.carouselWrapper}
              data-testid="carousel-wrapper"
            >
              {testimonials.map((testimonial) => (
                <div className={styles.carouselItem} key={testimonial.id} data-testid="testimonial-item">
                  <p className={styles.testimonial}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                  </p>
                  <div className={styles.authorWrapper}>
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={AVATAR_WIDTH}
                      height={AVATAR_HEIGHT}
                      className={styles.authorImage}
                    />
                    <div>
                      <p className={styles.authorName}>{testimonial.name}</p>
                      <p className={styles.authorCity}>{testimonial.city}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.carouselArrows}>
            <button className={styles.arrow} onClick={handlePrevSlide} aria-label="prev testimonial">
              ←
            </button>
            <button className={styles.arrow} onClick={handleNextSlide} aria-label="next testimonial">
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
