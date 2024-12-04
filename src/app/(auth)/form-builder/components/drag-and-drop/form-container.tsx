'use client';
import React from 'react';
import { FormItemType } from './type';
import RootContainer from '@app/(auth)/form-builder/components/drag-and-drop/root-container';

type PropsType = {
  id: string;
  items: FormItemType[];
  className?: string;
};

function FormContainer({ items, id, className }: PropsType) {
  return <RootContainer id={id} className={className} items={items} />;
}

export default FormContainer;
