"use client";

import { ChangeEvent, useEffect, useState } from "react";
import { useTranslations } from "use-intl";

import { PostCard } from "@/components/post-card/post-card";
import { POSTS_PER_PAGE } from "@/constants/constants";
import { POSTS } from "@/data/blog-posts";
import { CATEGORIES } from "@/data/categories";
import { TAGS } from "@/data/tags";
import { useRouteChanger } from "@/hooks/use-route-changer";
import { CheckboxButton } from "@/libs/ui/checkboxes/checkboxes";
import { RadioButton } from "@/libs/ui/radios/radios";
import { BlogPost } from "@/types";

import styles from "./category-section.module.scss";

export function CategorySection() {
  const t = useTranslations("CategorySection");
  const [searchText, setSearchText] = useState("");
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const { searchParams, getParam, getParamsList, handleCategoryChange, handleTagChange, isTagInURL } =
    useRouteChanger();

  useEffect(() => {
    filterPosts();
  }, [searchParams]);

  const filterPosts = () => {
    const categoryFilter = getParam("category");
    const tagsFilter = getParamsList("tags") || [];

    let filteredPosts = POSTS;

    if (categoryFilter) {
      filteredPosts = filteredPosts.filter((post) => post.category.label === categoryFilter);
    }
    if (tagsFilter.length > 0) {
      filteredPosts = filteredPosts.filter((post) => post.tags.some((tag) => tagsFilter.includes(tag)));
    }
    if (searchText) {
      filteredPosts = filteredPosts.filter(
        (post) =>
          post.title.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()) ||
          post.description.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()) ||
          post.content.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
      );
    }

    setFilteredPosts(filteredPosts.slice(0, POSTS_PER_PAGE));
  };

  const handleTextInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.cards}>
            {filteredPosts.length ? (
              filteredPosts.map((postData) => <PostCard key={postData.id} {...postData} />)
            ) : (
              <h3 className={styles.notFound}>{t("noPosts")}</h3>
            )}
          </div>
          <div className={styles.filters}>
            <div className={styles.searchWrapper}>
              <input
                type="text"
                className={styles.searchInput}
                value={searchText}
                onChange={handleTextInputChange}
                placeholder={t("inputPlaceholder")}
              />
              <button className={styles.searchButton} onClick={filterPosts}>
                {t("search")}
              </button>
            </div>
            <h3 className={styles.title}>{t("categories")}</h3>
            <div className={styles.categoryWrapper}>
              {Object.values(CATEGORIES).map((category) => (
                <RadioButton
                  key={category.id}
                  id={category.id.toString()}
                  name={"category"}
                  icon={category.icon}
                  label={category.label}
                  checked={searchParams.get("category") === category.label}
                  onChange={handleCategoryChange}
                />
              ))}
            </div>
            <h3 className={styles.title}>{t("tags")}</h3>
            <div className={styles.tagWrapper}>
              {(Object.keys(TAGS) as Array<keyof typeof TAGS>).map((tag) => (
                <CheckboxButton
                  key={tag}
                  id={tag}
                  name={"tag"}
                  label={tag}
                  checked={isTagInURL(tag)}
                  onChange={handleTagChange}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
