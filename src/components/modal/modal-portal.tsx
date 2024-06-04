import { PropsWithChildren } from "react";
import { createPortal } from "react-dom";

import { MODAL_ROOT } from "@/constants/constants";

export function ModalPortal({ children }: PropsWithChildren) {
  return createPortal(
    children,
    MODAL_ROOT as HTMLElement
  );
}
