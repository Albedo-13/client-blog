import { Header } from "@/components/header/header";
import { HomeHero } from "@/components/home-hero/home-hero";

import styles from "./page.module.scss";

export default function Home() {
  return (
    <>
      <Header />
      <HomeHero />
      <div style={{ height: "200px", backgroundColor: "gray" }}></div>
    </>
  );
}
