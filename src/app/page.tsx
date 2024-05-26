import { AboutUs } from "@/components/about-us/about-us";
import { ChooseCategory } from "@/components/choose-category/choose-category";
import { FeaturedPosts } from "@/components/featured-posts/featured-posts";
import { Header } from "@/components/header/header";
import { HomeHero } from "@/components/home-hero/home-hero";
import { ListOfAuthors } from "@/components/list-of-authors/list-of-authors";
import { LogosList } from "@/components/logos-list/logos-list";
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
      <div style={{ height: "200px", backgroundColor: "gray" }}></div>
    </>
  );
}
