'use client';
import React, { type SVGProps } from 'react';
import { GithubSvg } from '@components/share/icon/svg/github';
import { NextjsSvg } from '@components/share/icon/svg/nextjs';
import { ReactSvg } from '@components/share/icon/svg/react';
import { HtmlSvg } from '@components/share/icon/svg/html';
import { CssSvg } from '@components/share/icon/svg/css';
import { TypeScriptSvg } from '@components/share/icon/svg/typescript';

type IconProps = {
  select: 'github' | 'next' | 'react' | 'html' | 'css' | 'typescript';
  iconProps?: SVGProps<SVGSVGElement>;
};

const iconMap = {
  github: (props?: SVGProps<SVGSVGElement>) => <GithubSvg {...props} />,
  next: (props?: SVGProps<SVGSVGElement>) => <NextjsSvg {...props} />,
  react: (props?: SVGProps<SVGSVGElement>) => <ReactSvg {...props} />,
  html: (props?: SVGProps<SVGSVGElement>) => <HtmlSvg {...props} />,
  css: (props?: SVGProps<SVGSVGElement>) => <CssSvg {...props} />,
  typescript: (props?: SVGProps<SVGSVGElement>) => <TypeScriptSvg {...props} />,
} as any;

function ShareIcon(props: IconProps): React.ReactElement {
  return iconMap[props.select](props.iconProps) || <></>;
}

export default ShareIcon;
