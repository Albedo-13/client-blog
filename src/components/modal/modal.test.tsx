import "@testing-library/jest-dom";

import { fireEvent, render } from "@testing-library/react";
import { ReactNode } from "react";

import { LocaleTestProvider } from "@/tests/helpers/locale-provider";

import { Modal } from "./modal";

const localeRender = (ui: ReactNode) =>
  render(ui, {
    wrapper: (props) => <LocaleTestProvider {...props} />,
  });

describe("Modal", () => {
  it("should call onClose when clicking outside the modal", () => {
    const onClose = jest.fn();
    const { getByRole } = localeRender(
      <Modal onClose={onClose}>
        <div>Modal Content</div>
      </Modal>
    );
    const overlay = getByRole("dialog");
    fireEvent.mouseDown(overlay);
    expect(onClose).toHaveBeenCalled();
  });

  it("should not call onClose when clicking inside the modal", () => {
    const onClose = jest.fn();
    const { getByText } = localeRender(
      <Modal onClose={onClose}>
        <div>Modal Content</div>
      </Modal>
    );
    const modalContent = getByText("Modal Content");
    fireEvent.mouseDown(modalContent);
    expect(onClose).not.toHaveBeenCalled();
  });

  it("should call onClose when pressing the Escape key", () => {
    const onClose = jest.fn();
    localeRender(
      <Modal onClose={onClose}>
        <div>Modal Content</div>
      </Modal>
    );
    fireEvent.keyDown(document.body, { key: "Escape", code: "Escape" });
    expect(onClose).toHaveBeenCalled();
  });

  it("should not call onClose when pressing a different key", () => {
    const onClose = jest.fn();
    localeRender(
      <Modal onClose={onClose}>
        <div>Modal Content</div>
      </Modal>
    );
    fireEvent.keyDown(document.body, { key: "Enter", code: "Enter" });
    expect(onClose).not.toHaveBeenCalled();
  });

  it("should render the children inside the modal", () => {
    const { getByText } = localeRender(
      <Modal onClose={jest.fn()}>
        <div>Modal Content</div>
      </Modal>
    );
    const modalContent = getByText("Modal Content");
    expect(modalContent).toBeInTheDocument();
  });
});
