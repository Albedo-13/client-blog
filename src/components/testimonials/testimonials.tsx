import Image from "next/image";

import styles from "./testimonials.module.scss";

const TESTIMONIALS_DATA = [
  {
    id: 1,
    name: "Jonathan Vallem",
    image: "/authors/author-1.webp",
    city: "New york, USA",
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    name: "John Doe",
    image: "/authors/author-2.webp",
    city: "Arizona, USA",
    testimonial:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
  },
];

export function Testimonials() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.wrapper}>
          <div>
            <p className={styles.subtitle}>testimonials</p>
            <h2 className={styles.title}>What people say about our blog</h2>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
            </p>
          </div>
          <div className={styles.separator} aria-hidden="true"></div>
          <div className={styles.carousel}>
            <p className={styles.testimonial}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
            <div className={styles.authorWrapper}>
              <Image
                src={TESTIMONIALS_DATA[0].image}
                alt={TESTIMONIALS_DATA[0].name}
                width={48}
                height={48}
                className={styles.authorImage}
              />
              <div>
                <p className={styles.authorName}>{TESTIMONIALS_DATA[0].name}</p>
                <p className={styles.authorCity}>{TESTIMONIALS_DATA[0].city}</p>
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
