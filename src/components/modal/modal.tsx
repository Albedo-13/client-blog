import { PropsWithChildren, ReactNode, SyntheticEvent, useEffect } from "react";

import styles from "./modal.module.scss";

type ModalProps = {
  onClose: VoidFunction;
  children: PropsWithChildren<ReactNode>;
};

export function Modal({ onClose, children }: ModalProps) {
  const handleCloseClick = (e: SyntheticEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  const handleEscapeClick = (e: KeyboardEvent) => {
    if ((e as KeyboardEvent).key === "Escape") {
      onClose();
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", handleEscapeClick);
    return () => {
      document.body.removeEventListener("keydown", handleEscapeClick);
    };
  });

  return (
    <aside role="dialog" className={styles.overlay} onMouseDown={handleCloseClick}>
      <div className={styles.modal}>
        <span className={styles.close} onClick={handleCloseClick} tabIndex={0}>
          &times;
        </span>
        {children}
      </div>
    </aside>
  );
}
