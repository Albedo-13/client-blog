"use client";

// import { useRouter } from "next/navigation";

import { BlogPost } from "@/components/blog-post/blog-post";
import { JoinOurTeam } from "@/components/join-our-team/join-our-team";
import { OtherPosts } from "@/components/other-posts/other-posts";

type PageProps = { params: { post: string } };

export default function Page({ params }: PageProps) {
  return (
    <>
      <BlogPost />
      <OtherPosts />
      {/* TODO: remove line */}
      <div style={{ height: "200px", backgroundColor: "gray" }}></div>
      <JoinOurTeam />
    </>
  );
}
