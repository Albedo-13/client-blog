import { BlogPost } from "@/components/blog-post/blog-post";
import { JoinOurTeam } from "@/components/join-our-team/join-our-team";
import { OtherPosts } from "@/components/other-posts/other-posts";
import { POSTS } from "@/data/blog-posts";

type PageProps = { params: { post: string } };

export default function Page({ params }: PageProps) {
  const post = POSTS.find((post) => post.id === +params.post);

  return (
    <>
      {post && <BlogPost post={post} />}
      <OtherPosts />
      <JoinOurTeam />
    </>
  );
}
