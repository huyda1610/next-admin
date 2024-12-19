import React, { SVGProps } from "react";

export function DownloadSvg(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.2em"
      height="1.2em"
      viewBox="0 0 36 36"
      {...props}
    >
      <path
        fill="#3b88c3"
        d="M36 32a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4z"
      ></path>
      <path fill="#fff" d="M22 7v9h7L18 29L7 16h7V7z"></path>
    </svg>
  );
}
