import { AboutUs } from "@/components/about-us/about-us";
import { AuthorsList } from "@/components/authors-list/authors-list";
import { ChooseCategory } from "@/components/choose-category/choose-category";
import { JoinOurTeam } from "@/components/join-our-team/join-our-team";

import { FeaturedPosts } from "./components/featured-posts/featured-posts";
import { HomeHero } from "./components/home-hero/home-hero";
import { LogosList } from "./components/logos-list/logos-list";
import { Testimonials } from "./components/testimonials/testimonials";
import { WhyWeStarted } from "./components/why-we-started/why-we-started";

export default function Home() {
  return (
    <>
      <HomeHero />
      <FeaturedPosts />
      <AboutUs />
      <ChooseCategory />
      <WhyWeStarted />
      <AuthorsList />
      <LogosList />
      <Testimonials />
      <JoinOurTeam />
    </>
  );
}
