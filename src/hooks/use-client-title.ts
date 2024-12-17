"use client";
import { useEffect } from "react";
import { APP_NAME } from "@/@core/const";

export const useClientTitle = (title: string) => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title + " - " + APP_NAME;
    return () => {
      document.title = prevTitle;
    };
  });
};
