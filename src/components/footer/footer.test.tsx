import "@testing-library/jest-dom";

import { fireEvent, render, screen } from "@testing-library/react";
import { useParams } from "next/navigation";
import { ReactNode } from "react";

import { LocaleTestProvider } from "@/tests/helpers/locale-provider";

import { Navigation } from "../navigation/navigation";
import { Footer } from "./footer";

const localeRender = (ui: ReactNode) =>
  render(ui, {
    wrapper: (props) => (
      <LocaleTestProvider
        {...props}
        messages={{
          Footer: {
            title: "Subscribe to our news letter to get latest updates and news",
            inputPlaceholder: "Enter Your Email",
            button: "Subscribe",
          },
          Navigation: {
            title: "Modsen Client Blog",
            home: "Home",
            blog: "Blog",
            aboutUs: "About Us",
            contactUs: "Contact Us",
            privacyPolicy: "Privacy Policy",
            videoAboutUs: "Video about us",
          },
        }}
      />
    ),
  });

// jest.mock("next/navigation", async () => {
//   return {
//     useRouter: jest.fn(() => ({
//       push: jest.fn(),
//       replace: jest.fn(),
//     })),
//     useSearchParams: jest.fn(() => ({
//       // get: vi.fn(),
//     })),
//     useParams: jest.fn(() => "/blog/hello-world"),
//     usePathname: jest.fn(),
//   };
// });

jest.mock("../navigation/navigation", () => ({ Navigation: () => "mocked navigation" }));

export function mockFetch(data: any) {
  return jest.fn().mockImplementation(() =>
    Promise.resolve({
      ok: true,
      json: () => data,
    })
  );
}

describe("Footer", () => {
  it("should render the footer component", () => {
    localeRender(<Footer />);
    const footerElement = screen.getByRole("contentinfo");
    expect(footerElement).toBeInTheDocument();
  });

  // it("should render the navigation component", () => {
  //   localeRender(<Footer />);
  //   const navigationElement = screen.getByRole("navigation");
  //   expect(navigationElement).toBeInTheDocument();
  // });

  // it("should render the form with input and button", () => {
  //   localeRender(<Footer />);
  //   const formElement = screen.getByRole("form");
  //   const inputElement = screen.getByPlaceholderText("Enter your email");
  //   const buttonElement = screen.getByRole("button", { name: "Subscribe" });
  //   expect(formElement).toBeInTheDocument();
  //   expect(inputElement).toBeInTheDocument();
  //   expect(buttonElement).toBeInTheDocument();
  // });

  // it("should display an error message when the email input is invalid", async () => {
  //   localeRender(<Footer />);
  //   const inputElement = screen.getByPlaceholderText("Enter your email");
  //   const buttonElement = screen.getByRole("button", { name: "Subscribe" });
  //   fireEvent.change(inputElement, { target: { value: "invalid-email" } });
  //   fireEvent.click(buttonElement);
  //   const errorElement = await screen.findByText("Invalid email address");
  //   expect(errorElement).toBeInTheDocument();
  // });

  // it("should call the sendEmail function when the form is submitted with a valid email", async () => {
  //   const sendEmailMock = jest.fn();
  //   localeRender(<Footer />);
  //   const inputElement = screen.getByPlaceholderText("Enter Your Email");
  //   const buttonElement = screen.getByRole("button", { name: "Subscribe" });
  //   fireEvent.change(inputElement, { target: { value: "valid@email.com" } });
  //   // TODO: mock fetch request in footer (not working)
  //   await fireEvent.click(buttonElement);
  //   expect(sendEmailMock).toHaveBeenCalledWith({ email: "valid@email.com" });
  // });

  // it("should render the address section with contact information and social links", () => {
  //   render(<Footer />);
  //   const addressElement = screen.getByRole("contentinfo");
  //   const contactsElement = screen.getByText(/Finstreet 118 2561 Fintown/i);
  //   const emailElement = screen.getByText(/Hello@finsweet.com/i);
  //   const phoneElement = screen.getByText(/020 7993 2905/i);
  //   const facebookLink = screen.getByRole("link", { name: "facebook" });
  //   const twitterLink = screen.getByRole("link", { name: "twitter" });
  //   const instagramLink = screen.getByRole("link", { name: "instagram" });
  //   const linkedinLink = screen.getByRole("link", { name: "linkedin" });
  //   expect(addressElement).toBeInTheDocument();
  //   expect(contactsElement).toBeInTheDocument();
  //   expect(emailElement).toBeInTheDocument();
  //   expect(phoneElement).toBeInTheDocument();
  //   expect(facebookLink).toBeInTheDocument();
  //   expect(twitterLink).toBeInTheDocument();
  //   expect(instagramLink).toBeInTheDocument();
  //   expect(linkedinLink).toBeInTheDocument();
  // });
});
