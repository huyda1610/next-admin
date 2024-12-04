'use client';
import React from 'react';
import { FormItemType } from './type';
import RootContainer from '@app/(auth)/form-builder/components/drag-and-drop/root-container';

type PropsType = {
  id: string;
  items: FormItemType[];
};

function FormContainer({ items, id }: PropsType) {
  return <RootContainer id={id} items={items} />;
}

export default FormContainer;
