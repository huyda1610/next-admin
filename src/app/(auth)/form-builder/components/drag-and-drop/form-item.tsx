'use client';
import React from 'react';
import FormInput from '@components/form-ui/form-input';
import { FormItemType } from './type';

function FormItem(props: FormItemType) {
  const renderItem = (): React.ReactNode => {
    switch (props.type) {
      case 'input':
        return <FormInput name="asdasd" label="huyda4" placeholder="test" />;
      default:
        return <></>;
    }
  };

  return (
    <div
      id={props.id}
      className="w-full h-full bg-white p-3 border-2 border-solid border-border-color rounded-xl"
    >
      {renderItem()}
    </div>
  );
}

export default FormItem;
