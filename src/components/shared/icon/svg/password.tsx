import type { SVGProps } from "react";
import React from "react";

export function PasswordSvg(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M5.25 5A3.25 3.25 0 0 0 2 8.25v7.5A3.25 3.25 0 0 0 5.25 19h13.5A3.25 3.25 0 0 0 22 15.75v-7.5A3.25 3.25 0 0 0 18.75 5zm1.03 5.22l.72.72l.72-.72a.75.75 0 1 1 1.06 1.06l-.719.72l.72.718A.75.75 0 1 1 7.72 13.78L7 13.06l-.72.72a.75.75 0 0 1-1.06-1.06l.72-.72l-.72-.72a.75.75 0 0 1 1.06-1.06m5.5 0l.72.72l.72-.72a.75.75 0 1 1 1.06 1.06l-.719.72l.72.718a.75.75 0 1 1-1.061 1.061l-.72-.719l-.72.72a.75.75 0 1 1-1.06-1.06l.72-.72l-.72-.72a.75.75 0 0 1 1.06-1.06m3.97 3.03a.75.75 0 0 1 .75-.75h1.75a.75.75 0 0 1 0 1.5H16.5a.75.75 0 0 1-.75-.75"
      ></path>
    </svg>
  );
}
