import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { ChangeEvent } from "react";

export function useCategoryChanger() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const params = new URLSearchParams(searchParams.toString());

  const getParam = (param: string) => params.get(param);
  const getParamsList = (param: string) => params.get(param)?.split(",") || [];

  const handleCategoryChange = (e: ChangeEvent<HTMLInputElement>) => {
    params.set("category", e.target.value);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const handleTagChange = (e: ChangeEvent<HTMLInputElement>) => {
    const tag = e.target.value;
    let activeTags = params.get("tags")?.split(",") || [];

    if (activeTags.includes(tag)) {
      activeTags = activeTags.filter((t) => t !== tag);
      if (activeTags.length !== 0) {
        params.set("tags", activeTags.join(","));
      } else {
        params.delete("tags");
      }
    } else {
      activeTags = activeTags.concat(tag);
      params.set("tags", activeTags.join(","));
    }

    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const isTagInURL = (tag: string) => {
    const activeTags = params.get("tags")?.split(",") || [];
    return activeTags.includes(tag);
  };

  return {
    searchParams,
    getParam,
    getParamsList,
    handleCategoryChange,
    handleTagChange,
    isTagInURL,
  };
}
