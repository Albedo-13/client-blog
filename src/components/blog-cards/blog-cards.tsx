import { BlogCard } from "./blog-card/blog-card";
import styles from "./blog-cards.module.scss";

const CATEGORIES_DATA = {
  BUSINESS: "Business",
  STARTUP: "Startup",
  ECONOMY: "Economy",
  TECHNOLOGY: "Technology",
};

const POSTS_DATA = [
  {
    id: 1,
    title: "Design tips for designers that cover everything you need.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
    image: "/images/people-hugging-together.webp",
    date: "12.06.2021",
    category: CATEGORIES_DATA.BUSINESS,
    author: "<NAME>",
  },
  {
    id: 2,
    title: "How to build rapport with your web design clients",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
    image: "/images/people-hugging-together.webp",
    date: "07.01.2024",
    category: CATEGORIES_DATA.STARTUP,
    author: "<NAME>",
  },
  {
    id: 3,
    title: "Logo design trends to avoid in 2023",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
    image: "/images/people-hugging-together.webp",
    date: "25.02.2023",
    category: CATEGORIES_DATA.TECHNOLOGY,
    author: "<NAME>",
  },
];

export function BlogCards() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>All posts</h2>
        <hr className={styles.divider} />
        <div className={styles.cards}>
          {POSTS_DATA.map((postData) => (
            <BlogCard key={postData.id} {...postData} />
          ))}
        </div>

        <div className={styles.pagination}>
          <button className={styles.arrow} disabled>
            {"< Prev"}
          </button>
          <button className={styles.arrow}>{"Next >"}</button>
        </div>
      </div>
    </section>
  );
}
