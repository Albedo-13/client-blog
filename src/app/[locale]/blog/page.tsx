import { BlogCards } from "@/app/[locale]/blog/components/blog-cards/blog-cards";
import { BlogHeader } from "@/app/[locale]/blog/components/blog-header/blog-header";
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
