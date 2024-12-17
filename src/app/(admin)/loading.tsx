"use client";

import NextPageLoading from "@/components/shared/loading";
import { motion } from "framer-motion";
import React from "react";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <motion.div
      initial={{ x: -15, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ ease: "easeOut", duration: 0.5 }}
      className="w-full h-full bg-backgroundDeep relative"
    >
      <NextPageLoading />
    </motion.div>
  );
}
