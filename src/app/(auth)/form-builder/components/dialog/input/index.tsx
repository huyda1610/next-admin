import React, { useState } from 'react';
import { Button } from '@components/shadcn/ui/button';
import { Pencil } from 'lucide-react';
import InputForm from './form';
import { FormInputType } from '@components/shadcn/components/form/input';

type PropsType = {
  componentControls: FormInputType;
};

function InputDialog({ componentControls }: PropsType) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <Button variant="outline-general" className="p-2 rounded-full" onClick={() => setOpen(true)}>
        <Pencil className="size-2" />
      </Button>

      <InputForm setOpen={setOpen} open={open} componentControls={componentControls} />
    </>
  );
}

export default InputDialog;
