import AuthorHero from "@/components/author-hero/author-hero";
import { AUTHORS } from "@/data/authors";

type PageProps = { params: { id: string } };

export default function Page({ params }: PageProps) {
  const author = AUTHORS.find((author) => author.id === +params.id);

  return (
    <>
      {author && <AuthorHero author={author} />}
    </>
  );
}
