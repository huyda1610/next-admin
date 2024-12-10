import { useRouter } from 'next/navigation';
import { RegistrationForm } from './registration-form';
import React from 'react';
import NextDialog from '@components/shadcn/components/dialog';

type PropsType = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export function RegisterDialog({ open, setOpen }: PropsType) {
  const router = useRouter();

  const handleCloseDialog = () => {
    setOpen(false);
    router.refresh();
  };

  return (
    <NextDialog
      open={open}
      setOpen={setOpen}
      header={{
        title: 'Register',
      }}
    >
      <RegistrationForm onSave={handleCloseDialog} />
    </NextDialog>
  );
}
