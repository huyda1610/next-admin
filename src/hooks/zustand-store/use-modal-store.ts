import { create } from "zustand";
import React from "react";

type ModalSettings = {
  refId: string | number;
  element: React.ReactNode;
  size: "sm" | "md" | "lg" | "xl";
  closable: boolean;
};

type ModalStore = {
  modals: ModalSettings[];
  addModal: (modal: ModalSettings) => void;
  removeModal: (refId: string | number) => void;
  removeAllModal: () => void;
};

export const useModalStore = create<ModalStore>((set) => ({
  modals: [],
  addModal: (modal: ModalSettings) => {
    set((state) => {
      if (
        state.modals.some(
          (internalModal) => internalModal.refId === modal.refId,
        )
      )
        return { modals: [...state.modals] };

      return { modals: [...state.modals, modal] };
    });
  },
  removeModal: (refId: string | number) => {
    set((state) => {
      return {
        modals: state.modals.filter((modal) => modal.refId !== refId),
      };
    });
  },
  removeAllModal: () => {
    set(() => {
      return {
        modals: [],
      };
    });
  },
}));
