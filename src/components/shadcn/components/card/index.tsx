import React from "react";
import { Card, CardContent, CardHeader } from "@/components/shadcn/ui/card";

type HeaderType = {
  title?: string;
  className?: string;
};

type PropsType = {
  className?: string;
  header?: HeaderType;
  children?: React.ReactElement;
  contentClassName?: string;
};

function NextCard({
  className,
  header,
  children,
  contentClassName,
}: PropsType) {
  return (
    <Card className={className}>
      {header && (
        <CardHeader className={header.className}>{header.title}</CardHeader>
      )}
      <CardContent className={contentClassName}>{children}</CardContent>
    </Card>
  );
}

export default NextCard;
