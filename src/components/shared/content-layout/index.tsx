import { cn } from "@/lib/utils";
import React from "react";

type PropsType = {
  children: React.ReactNode;
  title: string;
  description?: string;
  extra?: React.ReactNode;
  contentClass?: string;
};

function ContentLayout({
  children,
  contentClass,
  title,
  description,
  extra,
}: PropsType) {
  return (
    <article>
      {/*Header*/}
      <section className="px-6 py-4 bg-white">
        <h3 className="text-lg font-bold">{title}</h3>
        <div className="flex items-center justify-between flex-wrap mt-2">
          <span className="text-gray-text">{description}</span>
          {extra}
        </div>
      </section>

      {/*Body*/}
      <section className={cn("p-4", contentClass)}>{children}</section>
    </article>
  );
}

export default ContentLayout;
