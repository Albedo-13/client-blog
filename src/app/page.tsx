import { AboutUs } from "@/components/about-us/about-us";
import { ChooseCategory } from "@/components/choose-category/choose-category";
import { FeaturedPosts } from "@/components/featured-posts/featured-posts";
import { Header } from "@/components/header/header";
import { HomeHero } from "@/components/home-hero/home-hero";
import { ListOfAuthors } from "@/components/list-of-authors/list-of-authors";
import { WhyWeStarted } from "@/components/why-we-started/why-we-started";

import { styles } from "./page.module.scss";

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
      <div style={{ height: "200px", backgroundColor: "gray" }}></div>
    </>
  );
}
