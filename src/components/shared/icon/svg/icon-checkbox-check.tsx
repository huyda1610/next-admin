import type { SVGProps } from "@/components/shared/icon/svg/react";

const IconCheckboxCheck = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="6"
      height="6"
      viewBox="0 0 6 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1 3.00008L2.33333 4.33341L5 1.66675"
        stroke="currentcolor"
        strokeWidth="1.42222"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default IconCheckboxCheck;
