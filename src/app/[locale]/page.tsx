import { HomeInfiniteScroll } from "@/components/home-infinite-scroll/home-infinite-scroll";

import { HomeHero } from "./components/home-hero/home-hero";

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeInfiniteScroll />
    </>
  );
}
