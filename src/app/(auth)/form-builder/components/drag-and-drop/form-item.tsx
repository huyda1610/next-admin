'use client';
import React from 'react';
import { FormItemType } from './type';
import { cn } from '@lib/utils';
import NextFormInput from '@components/shadcn/components/form/input';

type FormItemProps = FormItemType & {
  isRoot?: boolean;
};

export default function FormItem({ id, type, isDemo, isRoot, ...rest }: FormItemProps) {
  const renderItem = (): React.ReactNode => {
    switch (type) {
      case 'input':
        return (
          <NextFormInput
            className="p-0"
            label={rest.label}
            fieldName={rest.fieldName}
            description={rest.description}
            componentProps={{
              placeholder: rest.placeholder,
              disabled: isRoot,
              maxLength: 20,
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
        'w-full h-full bg-white p-4 border-2 border-solid border-border-color rounded-xl',
        isDemo && 'border-primary border-dashed opacity-50',
      )}
    >
      {renderItem()}
    </div>
  );
}
