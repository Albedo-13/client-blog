import "@testing-library/jest-dom";

import { fireEvent, render, screen } from "@testing-library/react";
import { AbstractIntlMessages, NextIntlClientProvider } from "next-intl";
import { ReactNode } from "react";

import { TESTIMONIALS } from "@/data/testimonials";

import { Testimonials } from "./testimonials";

const LocaleTestProvider = ({
  children,
  messages,
}: {
  children: React.ReactNode;
  messages?: AbstractIntlMessages | undefined;
}) => (
  <NextIntlClientProvider messages={messages} locale="en">
    {children}
  </NextIntlClientProvider>
);

const localeRender = (ui: ReactNode) =>
  render(ui, {
    wrapper: (props) => (
      <LocaleTestProvider
        {...props}
        messages={{
          Testimonials: {
            testimonials: "Testimonials",
            title: "What people say about our blog",
          },
        }}
      />
    ),
  });

describe("Testimonials", () => {
  it("should render the correct number of testimonials", () => {
    const { getAllByTestId } = localeRender(<Testimonials />);
    const testimonialItems = getAllByTestId("testimonial-item");
    expect(testimonialItems.length).toBe(TESTIMONIALS.length);
  });

  it("should render the correct testimonial name", () => {
    const { getByText } = localeRender(<Testimonials />);
    const testimonialText = TESTIMONIALS[0].name;
    expect(getByText(testimonialText)).toBeInTheDocument();
  });

  it("should render the correct author name and city", () => {
    const { getByText } = localeRender(<Testimonials />);
    const author = TESTIMONIALS[0];
    expect(getByText(author.name)).toBeInTheDocument();
    expect(getByText(author.city)).toBeInTheDocument();
  });

  it("should move to the next slide when clicking the next button", () => {
    const { getByLabelText } = localeRender(<Testimonials />);

    const nextButton = getByLabelText("next testimonial");
    fireEvent.click(nextButton);
    const carouselWrapper = screen.getByTestId("carousel-wrapper");
    expect(carouselWrapper).toHaveStyle("transform: translateX(calc(-100% * 1))");
  });

  it("should loop back to the first slide when clicking next on the last slide", () => {
    const { getByLabelText } = localeRender(<Testimonials />);
    const nextButton = getByLabelText("next testimonial");
    for (let i = 0; i < TESTIMONIALS.length; i++) {
      fireEvent.click(nextButton);
    }
    const carouselWrapper = screen.getByTestId("carousel-wrapper");
    expect(carouselWrapper).toHaveStyle("transform: translateX(calc(-100% * 0))");
  });

  it("should move to the previous slide when clicking the prev button", () => {
    const { getByLabelText } = localeRender(<Testimonials />);
    const prevButton = getByLabelText("prev testimonial");
    fireEvent.click(prevButton);
    const carouselWrapper = screen.getByTestId("carousel-wrapper");
    expect(carouselWrapper).toHaveStyle("transform: translateX(calc(-100% * 3))");
  });

  it("should loop back to the last slide when clicking prev on the first slide", () => {
    const { getByLabelText } = localeRender(<Testimonials />);
    const prevButton = getByLabelText("prev testimonial");
    fireEvent.click(prevButton);
    const carouselWrapper = screen.getByTestId("carousel-wrapper");
    expect(carouselWrapper).toHaveStyle(`transform: translateX(calc(-100% * ${TESTIMONIALS.length - 1}))`);
  });
});
