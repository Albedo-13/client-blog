import { useState } from "react";

export function useModal() {
  const [showModal, setShowModal] = useState(false);

  const handleModalShow = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const shouldDisableScroll = (isModalOpen: boolean) => {
    document.body.style.overflow = isModalOpen ? "hidden" : "visible";
  };

  return {
    showModal,
    handleModalShow,
    handleModalClose,
    shouldDisableScroll,
  };
}
