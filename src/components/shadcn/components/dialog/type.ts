import React from 'react';

export type NextDialogProps = {
  children: React.ReactNode;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  header: NextDialogHeader;
  body?: NextDialogBody;
};

type NextDialogHeader = {
  title: string;
  // description?: string;
};

type NextDialogBody = {
  className?: string;
};

type NextDialogFooter = {};
