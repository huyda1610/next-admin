'use client';
import React, { type SVGProps } from 'react';
import { GithubSvg } from '@components/share/icon/svg/github';
import { NextjsSvg } from '@components/share/icon/svg/nextjs';
import { ReactSvg } from '@components/share/icon/svg/react';
import { HtmlSvg } from '@components/share/icon/svg/html';
import { CssSvg } from '@components/share/icon/svg/css';
import { TypeScriptSvg } from '@components/share/icon/svg/typescript';
import { AvatarBoarSvg } from '@components/share/icon/svg/avatar-boar';
import { AvatarCatSvg } from '@components/share/icon/svg/avatar-cat';
import { AvatarChickenSvg } from '@components/share/icon/svg/avatar-chicken';
import { AvatarAlienSvg } from '@components/share/icon/svg/avatar-alien';
import { AvatarDogSvg } from '@components/share/icon/svg/avatar-dog';
import { CardSvg } from '@components/share/icon/svg/card';
import { ClockSvg } from '@components/share/icon/svg/clock';
import { DownloadSvg } from '@components/share/icon/svg/download';
import { BarChartSvg } from '@components/share/icon/svg/bar-chart';

export type NextIconType =
  | 'github'
  | 'next'
  | 'react'
  | 'html'
  | 'css'
  | 'typescript'
  | 'boar'
  | 'cat'
  | 'chicken'
  | 'alien'
  | 'dog'
  | 'card'
  | 'clock'
  | 'download'
  | 'barchart';

type IconProps = {
  select: NextIconType;

  iconProps?: SVGProps<SVGSVGElement>;
};

const iconMap = {
  github: (props?: SVGProps<SVGSVGElement>) => <GithubSvg {...props} />,
  next: (props?: SVGProps<SVGSVGElement>) => <NextjsSvg {...props} />,
  react: (props?: SVGProps<SVGSVGElement>) => <ReactSvg {...props} />,
  html: (props?: SVGProps<SVGSVGElement>) => <HtmlSvg {...props} />,
  css: (props?: SVGProps<SVGSVGElement>) => <CssSvg {...props} />,
  typescript: (props?: SVGProps<SVGSVGElement>) => <TypeScriptSvg {...props} />,
  boar: (props?: SVGProps<SVGSVGElement>) => <AvatarBoarSvg {...props} />,
  cat: (props?: SVGProps<SVGSVGElement>) => <AvatarCatSvg {...props} />,
  chicken: (props?: SVGProps<SVGSVGElement>) => <AvatarChickenSvg {...props} />,
  alien: (props?: SVGProps<SVGSVGElement>) => <AvatarAlienSvg {...props} />,
  dog: (props?: SVGProps<SVGSVGElement>) => <AvatarDogSvg {...props} />,
  card: (props?: SVGProps<SVGSVGElement>) => <CardSvg {...props}></CardSvg>,
  clock: (props?: SVGProps<SVGSVGElement>) => <ClockSvg {...props}></ClockSvg>,
  download: (props?: SVGProps<SVGSVGElement>) => <DownloadSvg {...props}></DownloadSvg>,
  barchart: (props?: SVGProps<SVGSVGElement>) => <BarChartSvg {...props}></BarChartSvg>,
} as any;

function NextIcon(props: IconProps): React.ReactElement {
  return iconMap[props.select](props.iconProps) || <></>;
}

export default NextIcon;
