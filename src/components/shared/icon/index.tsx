import { SVGProps } from "react";
import { GithubSvg } from "./svg/github";
import { NextjsSvg } from "./svg/nextjs";
import { ReactSvg } from "./svg/react";
import { HtmlSvg } from "./svg/html";
import { CssSvg } from "./svg/css";
import { TypeScriptSvg } from "./svg/typescript";
import { AvatarBoarSvg } from "./svg/avatar-boar";
import { AvatarCatSvg } from "./svg/avatar-cat";
import { AvatarChickenSvg } from "./svg/avatar-chicken";
import { AvatarAlienSvg } from "./svg/avatar-alien";
import { AvatarDogSvg } from "./svg/avatar-dog";
import { CardSvg } from "./svg/card";
import { ClockSvg } from "./svg/clock";
import { DownloadSvg } from "./svg/download";
import { BarChartSvg } from "./svg/bar-chart";

export const NextIcon = {
  Github: (props?: SVGProps<SVGSVGElement>) => <GithubSvg {...props} />,
  Next: (props?: SVGProps<SVGSVGElement>) => <NextjsSvg {...props} />,
  React: (props?: SVGProps<SVGSVGElement>) => <ReactSvg {...props} />,
  Html: (props?: SVGProps<SVGSVGElement>) => <HtmlSvg {...props} />,
  Css: (props?: SVGProps<SVGSVGElement>) => <CssSvg {...props} />,
  Typescript: (props?: SVGProps<SVGSVGElement>) => <TypeScriptSvg {...props} />,
  Boar: (props?: SVGProps<SVGSVGElement>) => <AvatarBoarSvg {...props} />,
  Cat: (props?: SVGProps<SVGSVGElement>) => <AvatarCatSvg {...props} />,
  Chicken: (props?: SVGProps<SVGSVGElement>) => <AvatarChickenSvg {...props} />,
  Alien: (props?: SVGProps<SVGSVGElement>) => <AvatarAlienSvg {...props} />,
  Dog: (props?: SVGProps<SVGSVGElement>) => <AvatarDogSvg {...props} />,
  Card: (props?: SVGProps<SVGSVGElement>) => <CardSvg {...props}></CardSvg>,
  Clock: (props?: SVGProps<SVGSVGElement>) => <ClockSvg {...props}></ClockSvg>,
  Download: (props?: SVGProps<SVGSVGElement>) => (
    <DownloadSvg {...props}></DownloadSvg>
  ),
  Barchart: (props?: SVGProps<SVGSVGElement>) => (
    <BarChartSvg {...props}></BarChartSvg>
  ),
};
