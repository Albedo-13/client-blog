import { AuthorCard } from "./author-card/author-card";
import styles from "./list-of-authors.module.scss";

const AUTHORS_DATA = [
  {
    id: 1,
    name: "Floyd Miles",
    status: "Content Writer @Company",
    image: "/authors/author-1.webp",
    facebook: "https://www.facebook.com/john-doe",
    twitter: "https://www.twitter.com/john-doe",
    instagram: "https://www.instagram.com/john-doe",
    linkedin: "https://www.linkedin.com/john-doe",
  },
  {
    id: 2,
    name: "Dianne Russell",
    status: "Content Writer @Company",
    image: "/authors/author-2.webp",
    facebook: "https://www.facebook.com/john-doe",
    twitter: "https://www.twitter.com/john-doe",
    instagram: "https://www.instagram.com/john-doe",
    linkedin: "https://www.linkedin.com/john-doe",
  },
  {
    id: 3,
    name: "Jenny Wilson",
    status: "Content Writer @Company",
    image: "/authors/author-3.webp",
    facebook: "https://www.facebook.com/john-doe",
    twitter: "https://www.twitter.com/john-doe",
    instagram: "https://www.instagram.com/john-doe",
    linkedin: "https://www.linkedin.com/john-doe",
  },
  {
    id: 4,
    name: "Leslie Alexander",
    status: "Content Writer @Company",
    image: "/authors/author-4.webp",
    facebook: "https://www.facebook.com/john-doe",
    twitter: "https://www.twitter.com/john-doe",
    instagram: "https://www.instagram.com/john-doe",
    linkedin: "https://www.linkedin.com/john-doe",
  },
];

export function ListOfAuthors() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>List of Authors</h2>
        <div className={styles.cards}>
          {AUTHORS_DATA.map((authorData) => (
            <AuthorCard key={authorData.id} {...authorData} />
          ))}
        </div>
      </div>
    </section>
  );
}
