"use client";

// import { useRouter } from "next/navigation";

import { BlogPost } from "@/components/blog-post/blog-post";
import { JoinOurTeam } from "@/components/join-our-team/join-our-team";

type PageProps = { params: { post: string } };

export default function Page({ params }: PageProps) {
  return (
    <>
      <BlogPost />
      {/* TODO: remove line */}
      <div style={{ height: "200px", backgroundColor: "gray" }}></div>
      <JoinOurTeam />
    </>
  );
}
