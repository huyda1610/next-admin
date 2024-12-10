'use client';
import React from 'react';
import { FormItemType } from './type';
import { cn } from '@lib/utils';
import NextFormInput from '@components/shadcn/components/form/input';

export default function FormItem({ id, type, isDemo, ...rest }: FormItemType) {
  const renderItem = (): React.ReactNode => {
    switch (type) {
      case 'input':
        return (
          <NextFormInput
            label={rest.label}
            fieldName={rest.fieldName}
            description={rest.description}
            componentProps={{
              className: isDemo ? 'p-0' : '',
              placeholder: rest.placeholder,
            }}
          />
        );
      default:
        return <></>;
    }
  };

  return (
    <div
      id={id}
      className={cn(
        'w-full h-full bg-white p-3 border-2 border-solid border-border-color rounded-xl',
        isDemo && 'border-primary border-dashed opacity-50',
      )}
    >
      {renderItem()}
    </div>
  );
}
