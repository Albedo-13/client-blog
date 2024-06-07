import "@testing-library/jest-dom";

import { fireEvent, render } from "@testing-library/react";
import { ReactNode } from "react";

import { POSTS_PER_PAGE } from "@/constants/constants";
import { POSTS } from "@/data/blog-posts";
import { LocaleTestProvider } from "@/tests/helpers/locale-provider";

import { BlogCards } from "./blog-cards";

const localeRender = (ui: ReactNode) =>
  render(ui, {
    wrapper: (props) => (
      <LocaleTestProvider
        {...props}
        messages={{
          BlogCards: {
            allPosts: "All posts",
            prev: "< Prev",
            next: "Next >",
          },
        }}
      />
    ),
  });

describe("BlogCards", () => {
  it("should render the correct number of post cards", () => {
    const { getAllByTestId } = localeRender(<BlogCards />);
    const postCards = getAllByTestId("post-card");
    expect(postCards.length).toBe(POSTS_PER_PAGE);
  });

  it("should disable the previous button on the first page", () => {
    const { getByText } = localeRender(<BlogCards />);
    const prevButton = getByText("< Prev");
    expect(prevButton).toBeDisabled();
  });

  it("should disable the next button on the last page", () => {
    const { getByText } = localeRender(<BlogCards />);
    const nextButton = getByText("Next >");
    fireEvent.click(nextButton, { button: 0 });
    expect(nextButton).toBeDisabled();
  });

  it("should update the page when clicking the previous button", () => {
    const { getByText, getAllByTestId } = localeRender(<BlogCards />);
    const nextButton = getByText("Next >");
    fireEvent.click(nextButton, { button: 0 });
    const prevButton = getByText("< Prev");
    fireEvent.click(prevButton, { button: 0 });
    const postCards = getAllByTestId("post-card");
    expect(postCards.length).toBe(POSTS_PER_PAGE);
  });

  it("should update the page when clicking the next button", () => {
    const { getByText, getAllByTestId } = localeRender(<BlogCards />);
    const nextButton = getByText("Next >");
    fireEvent.click(nextButton, { button: 0 });
    const postCards = getAllByTestId("post-card");
    expect(postCards.length).toBe(POSTS.length % POSTS_PER_PAGE);
  });
});
