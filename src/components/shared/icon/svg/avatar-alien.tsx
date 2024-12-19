import React, { SVGProps } from "react";

export function AvatarAlienSvg(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.2em"
      height="1.2em"
      viewBox="0 0 64 64"
      {...props}
    >
      <path
        fill="#93bbc5"
        d="M63.361 21.857C63.361 9.778 49.634 0 32.681 0S2 9.778 2 21.857c0 12.067 13.729 41.832 30.681 41.832c16.953-.001 30.68-29.765 30.68-41.832"
      ></path>
      <path
        fill="#25333a"
        d="M23.983 28.554c6.687 9.148 9.1 18.74 5.407 21.445c-3.704 2.704-12.11-2.512-18.794-11.659c-6.68-9.14-9.107-18.739-5.405-21.448c3.698-2.701 12.11 2.527 18.792 11.662"
      ></path>
      <path
        fill="#d1d2d2"
        d="M19.557 29.02c3.89 5.323 5.294 10.904 3.147 12.479c-2.156 1.574-7.04-1.462-10.936-6.782c-3.888-5.321-5.299-10.904-3.145-12.483c2.151-1.57 7.05 1.472 10.934 6.786"
      ></path>
      <path
        fill="#25333a"
        d="M41.21 28.554c-6.688 9.148-9.1 18.74-5.407 21.445c3.704 2.704 12.11-2.512 18.794-11.659c6.681-9.14 9.107-18.739 5.405-21.448c-3.698-2.701-12.12 2.527-18.792 11.662"
      ></path>
      <path
        fill="#d1d2d2"
        d="M46.11 28.999c-3.89 5.321-5.295 10.904-3.146 12.478c2.154 1.572 7.04-1.461 10.937-6.786c3.886-5.316 5.299-10.902 3.145-12.478c-2.152-1.571-7.05 1.469-10.936 6.786"
      ></path>
    </svg>
  );
}
