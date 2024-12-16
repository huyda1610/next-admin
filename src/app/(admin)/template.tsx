"use client";
import React from "react";
import { motion } from "framer-motion";

type PropsType = {
  children: React.ReactNode;
};

function AuthTemplate({ children }: PropsType) {
  return (
    <motion.div
      initial={{ x: -15, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ ease: "easeOut", duration: 0.35 }}
      className="w-full h-full bg-white-background relative"
    >
      {children}
    </motion.div>
  );
}

export default AuthTemplate;
