"use client";

import { Fragment, useEffect, useRef, useState } from "react";

import { FeaturedPosts } from "@/app/[locale]/components/featured-posts/featured-posts";
import { LogosList } from "@/app/[locale]/components/logos-list/logos-list";
import { Testimonials } from "@/app/[locale]/components/testimonials/testimonials";
import { WhyWeStarted } from "@/app/[locale]/components/why-we-started/why-we-started";
import { AboutUs } from "@/components/about-us/about-us";
import { AuthorsList } from "@/components/authors-list/authors-list";
import { ChooseCategory } from "@/components/choose-category/choose-category";
import { JoinOurTeam } from "@/components/join-our-team/join-our-team";

const HomeComponents = [
  { component: FeaturedPosts, id: 1 },
  { component: AboutUs, id: 2 },
  { component: ChooseCategory, id: 3 },
  { component: WhyWeStarted, id: 4 },
  { component: AuthorsList, id: 5 },
  { component: LogosList, id: 6 },
  { component: Testimonials, id: 7 },
  { component: JoinOurTeam, id: 8 },
];

export function HomeInfiniteScroll() {
  const [page, setPage] = useState(1);
  const observerTarget = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setPage((prevPage) => prevPage + 1);
        }
      },
      { threshold: 1 }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current);
      }
    };
  }, [observerTarget]);

  return (
    <>
      {HomeComponents.slice(0, page).map(({ component: Component, id }) => (
        <Fragment key={id}>
          <Component />
        </Fragment>
      ))}
      <div ref={observerTarget}></div>
    </>
  );
}
