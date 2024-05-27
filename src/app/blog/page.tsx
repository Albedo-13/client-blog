import "./blog.module.scss";

import { BlogHeader } from "@/components/blog-header/blog-header";
import { ChooseCategory } from "@/components/choose-category/choose-category";
import { JoinOurTeam } from "@/components/join-our-team/join-our-team";

export default function Page() {
  return (
    <>
      <BlogHeader />
      {/* TODO: remove line */}
      <div style={{ height: "200px", backgroundColor: "gray" }}></div>
      <ChooseCategory />
      <JoinOurTeam />
    </>
  );
}
