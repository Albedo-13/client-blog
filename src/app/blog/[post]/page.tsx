import { JoinOurTeam } from "@/components/join-our-team/join-our-team";
import { POSTS } from "@/data/blog-posts";

import { BlogPost } from "./components/blog-post/blog-post";
import { OtherPosts } from "./components/other-posts/other-posts";

type PageProps = { params: { post: string } };

export default function Page({ params }: PageProps) {
  const post = POSTS.find((post) => post.id === +params.post);

  return (
    <>
      {post && (
        <>
          <BlogPost post={post} />
          <OtherPosts category={post.category} />
        </>
      )}
      <JoinOurTeam />
    </>
  );
}
