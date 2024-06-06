import { Dispatch, MutableRefObject, SetStateAction, useEffect } from "react";

export function useInfiniteScroll(
  observerTarget: MutableRefObject<HTMLDivElement | null>,
  setter: Dispatch<SetStateAction<number>>
) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setter((prev: number) => prev + 1);
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
}
