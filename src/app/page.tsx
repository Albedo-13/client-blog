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
      <div style={{ height: "200px", backgroundColor: "gray" }}></div>
    </>
  );
}
