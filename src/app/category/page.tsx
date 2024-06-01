import { Suspense } from "react";

import { CategoryHero } from "./components/category-hero/category-hero";
import { CategorySection } from "./components/category-section/category-section";

export default function Page() {
  return (
    <>
      <CategoryHero />
      <Suspense fallback={"useSearchParams() should be wrapped in a suspense boundary"}>
        <CategorySection />
      </Suspense>
    </>
  );
}
