import React from "react";
import { cn } from "@/lib/utils";

type NextModalFooterProps = {
  children: React.ReactElement;
  className?: string;
};

function NextModalFooter({ children, className }: NextModalFooterProps) {
  return <div className={cn("px-6 py-3", className)}>{children}</div>;
}

export default NextModalFooter;
