import type { SVGProps } from "@/components/shared/icon/svg/react";
import React from "@/components/shared/icon/svg/react";

export function AvatarDogSvg(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.2em"
      height="1.2em"
      viewBox="0 0 64 64"
      {...props}
    >
      <g fill="#d1d2d3">
        <path d="M5.193 40.562c0 10.824 12.08 19.589 27 19.589s27-8.765 27-19.589c0-10.816-12.08-37.5-27-37.5s-27 26.684-27 37.5"></path>
        <path d="M46.2 12.161C46.2 6.545 39.932 2 32.19 2c-7.736 0-14 4.545-14 10.161c0 5.609 6.269 19.446 14 19.446c7.737 0 14.01-13.837 14.01-19.446"></path>
      </g>
      <path
        fill="#bcbdbf"
        d="M28.12 51.23c-8.406-6.323-15.04-16.08-11.373-27.09c2.536-7.604 7.224-14.13 10.197-21.42c-4.547 1.301-7.931 4.274-8.7 7.884c-7.893 8.726-13.18 22.812-13.18 29.964c0 10.824 12.08 19.589 27 19.589c4.433 0 8.604-.789 12.294-2.159c-6.02-1.07-11.751-3.39-16.24-6.766"
      ></path>
      <path
        fill="#c2986b"
        d="M12.6 43.995c0-9.266 7.885-9.09 18.635-9.09c10.756 0 20.308-.173 20.308 9.09c0 9.276-8.721 16.793-19.47 16.793S12.6 53.271 12.6 43.995"
      ></path>
      <g fill="#25333a" transform="translate(0 2)">
        <path d="M26.663 37.854c0-2.633 2.239-2.584 5.294-2.584c3.057 0 5.772-.049 5.772 2.584c0 2.636-2.479 4.771-5.534 4.771s-5.532-2.135-5.532-4.771"></path>
        <ellipse cx={22.812} cy={27.333} rx={4.266} ry={5.171}></ellipse>
        <ellipse cx={40.33} cy={27.333} rx={4.265} ry={5.171}></ellipse>
      </g>
      <path
        fill="#424143"
        d="M.015 20.31C-.528 14.811 13.858 5.464 17.72 5.081c3.866-.389.573 10.764-.471 17.12c-1.074 6.543-1.819 13.21-5.686 13.591C7.704 36.172.553 25.795.015 20.31"
      ></path>
      <path
        fill="#2c2c2d"
        d="M13.624 6.658C7.958 9.622-.406 16.091.015 20.31c.541 5.485 7.688 15.862 11.549 15.482c.351-.034.667-.138.968-.27c-.592-.668-13.158-15.08 1.092-28.864"
      ></path>
      <path
        fill="#424143"
        d="M64.13 20.31c.543-5.499-13.843-14.846-17.705-15.229c-3.867-.389-.573 10.764.471 17.12c1.073 6.543 1.818 13.21 5.685 13.591c3.859.38 11.01-9.997 11.549-15.482"
      ></path>
      <path
        fill="#a98461"
        d="M38.887 56.673c-.244-.725-1.302-1.025-2.359-.669l-4.253 1.435l-.936-3.687c-.252-.997-.967-1.683-1.596-1.522c-.629.16-.934 1.102-.681 2.104l1.078 4.247c.088.345.242.629.418.878c.002.008-.002.016 0 .023c.245.726 1.302 1.021 2.362.661l4.493-1.515c1.058-.357 1.719-1.233 1.474-1.955"
      ></path>
    </svg>
  );
}
