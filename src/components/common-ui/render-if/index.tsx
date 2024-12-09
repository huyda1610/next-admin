'use client';
import React, { ReactNode } from 'react';

type PropsType = {
  ifTrue: any;
  children: ReactNode;
};

function NextRenderIf({ ifTrue, children }: PropsType) {
  return ifTrue ? <>{children}</> : null;
}

export default NextRenderIf;
