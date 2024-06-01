import { AUTHORS } from "@/data/authors";

import { AuthorHero } from "./components/author-hero/author-hero";
import { AuthorPosts } from "./components/author-posts/author-posts";

type PageProps = { params: { id: string } };

export default function Page({ params }: PageProps) {
  const author = AUTHORS.find((author) => author.id === +params.id);

  return (
    <>
      {author && (
        <>
          <AuthorHero author={author} />
          <AuthorPosts authorId={author.id} />
        </>
      )}
    </>
  );
}
