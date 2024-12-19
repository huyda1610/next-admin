import type { SVGProps } from "react";
import React from "react";

export function NumberSvg(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      viewBox="0 0 16 16"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        d="M2 4.5h1v7m0 0H2m1 0h1m1-7h4V8H5.5v3.5h4m1-7H14V8m0 0h-3m3 0v3.5h-3.5"
      ></path>
    </svg>
  );
}
