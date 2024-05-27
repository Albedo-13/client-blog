import "./blog.module.scss";

import { BlogCards } from "@/components/blog-cards/blog-cards";
import { BlogHeader } from "@/components/blog-header/blog-header";
import { ChooseCategory } from "@/components/choose-category/choose-category";
import { JoinOurTeam } from "@/components/join-our-team/join-our-team";

export default function Page() {
  return (
    <>
      <BlogHeader />
      <BlogCards />
      <ChooseCategory />
      <JoinOurTeam />
    </>
  );
}
