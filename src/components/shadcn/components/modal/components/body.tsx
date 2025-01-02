import React from "react";
import { cn } from "@/lib/utils";

type NextModalBodyProps = {
  children: React.ReactElement;
  className?: string;
};

function NextModalBody({ children, className }: NextModalBodyProps) {
  return <div className={cn("px-6", className)}>{children}</div>;
}

export default NextModalBody;
