import { AboutUs } from "@/components/about-us/about-us";
import { ChooseCategory } from "@/components/choose-category/choose-category";
import { FeaturedPosts } from "@/components/featured-posts/featured-posts";
import { Header } from "@/components/header/header";
import { HomeHero } from "@/components/home-hero/home-hero";

import { styles } from "./page.module.scss";

export default function Home() {
  return (
    <>
      <Header />
      <HomeHero />
      <FeaturedPosts />
      <AboutUs />
      <ChooseCategory />
      <div style={{ height: "200px", backgroundColor: "gray" }}></div>
    </>
  );
}
