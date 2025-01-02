import React from "react";
import { cn } from "@/lib/utils";

type NextModalTitleProps = {
  children?: React.ReactNode;
  extra?: React.ReactNode;
  className?: string;
};

function NextModalTitle({ children, extra, className }: NextModalTitleProps) {
  return (
    <div className={cn("flex justify-between pt-3 px-6", className)}>
      <strong className="text-lg">{children}</strong>
      {extra}
    </div>
  );
}

export default NextModalTitle;
