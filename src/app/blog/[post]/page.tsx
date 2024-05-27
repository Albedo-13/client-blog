import { BlogPost } from "@/components/blog-post/blog-post";
import { JoinOurTeam } from "@/components/join-our-team/join-our-team";
import { OtherPosts } from "@/components/other-posts/other-posts";

type PageProps = { params: { post: string } };

export default function Page({ params }: PageProps) {
  // TODO: get post by url id
  return (
    <>
      <BlogPost />
      <OtherPosts />
      <JoinOurTeam />
    </>
  );
}
