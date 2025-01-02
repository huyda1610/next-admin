import React, { useState } from "react";
import { useStore } from "@/hooks/zustand-store/use-store";
import { useModalStore } from "@/hooks/zustand-store/use-modal-store";

type Size = "sm" | "md" | "lg" | "xl";

export type ModalOptions = {
  size?: Size;
  element?: React.ReactNode | string;
  refId?: string;
  closable?: boolean;
};

function useNextModal() {
  const modalStore = useStore(useModalStore, (x) => x);

  const refId = crypto.randomUUID();
  const [element, setElement] = useState<React.ReactNode | string>(null);

  const open = (options?: ModalOptions) => {
    modalStore?.addModal({
      element: options?.element ?? element,
      refId: refId,
      size: options?.size ?? "sm",
      closable: options?.closable ?? false,
    });
  };

  const close = (): void => {
    modalStore?.removeModal(refId);
  };

  return { open, close, setElement };
}

export default useNextModal;
