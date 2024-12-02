'use client';
import React from 'react';
import CommonPage from '@components/common-ui/page';
import DragAndDrop from './components/drag-and-drop';
import { useCheckClient } from '@hooks/useCheckClient';

function FormBuilderPage() {
  const { isClient } = useCheckClient();

  if (!isClient) return null;

  return (
    <CommonPage
      title="Form Builder"
      description="descriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescription"
    >
      <DragAndDrop />
    </CommonPage>
  );
}

export default FormBuilderPage;
