import { Header } from "@/components/header/header";

import styles from "./page.module.scss";

export default function Home() {
  return (
    <>
      <Header />
      <div style={{ height: "200px", backgroundColor: "gray" }}></div>
    </>
  );
}
