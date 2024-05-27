import { AboutUs } from "@/components/about-us/about-us";
import { ChooseCategory } from "@/components/choose-category/choose-category";
import { FeaturedPosts } from "@/components/featured-posts/featured-posts";
import { Footer } from "@/components/footer/footer";
import { Header } from "@/components/header/header";
import { HomeHero } from "@/components/home-hero/home-hero";
import { JoinOurTeam } from "@/components/join-our-team/join-our-team";
import { ListOfAuthors } from "@/components/list-of-authors/list-of-authors";
import { LogosList } from "@/components/logos-list/logos-list";
import { Testimonials } from "@/components/testimonials/testimonials";
import { WhyWeStarted } from "@/components/why-we-started/why-we-started";

export default function Home() {
  return (
    <>
      <Header />
      <HomeHero />
      <FeaturedPosts />
      <AboutUs />
      <ChooseCategory />
      <WhyWeStarted />
      <ListOfAuthors />
      <LogosList />
      <Testimonials />
      <JoinOurTeam />
      <Footer />
    </>
  );
}
