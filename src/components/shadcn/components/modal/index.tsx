"use client";
import React from "react";
import { useStore } from "@/hooks/zustand-store/use-store";
import { useModalStore } from "@/hooks/zustand-store/use-modal-store";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../../ui/dialog";
import { cn } from "@/lib/utils";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

function NextModal() {
  const modalStore = useStore(useModalStore, (x) => x);

  if (!modalStore) return <></>;

  const modalSize = (size: string) => {
    switch (size) {
      case "sm":
        return 520;
      case "md":
        return 720;
      case "lg":
        return 920;
      case "xl":
        return 1120;
      default:
        return 520;
    }
  };
  return modalStore.modals.map((dialog) => (
    <Dialog
      key={dialog.refId}
      open={true}
      onOpenChange={() => {
        if (!dialog.closable) return;
        modalStore?.removeModal(dialog.refId);
      }}
    >
      <DialogContent
        className={cn("w-full p-0")}
        hiddenCloseBtn={!dialog.closable}
        style={{
          width: `${modalSize(dialog.size)}px`,
        }}
      >
        {/*Header*/}
        <VisuallyHidden>
          <DialogHeader>
            <DialogTitle>{dialog.refId}</DialogTitle>
          </DialogHeader>
        </VisuallyHidden>

        {/*Body*/}
        {dialog.element}
      </DialogContent>
    </Dialog>
  ));
}

export default NextModal;
