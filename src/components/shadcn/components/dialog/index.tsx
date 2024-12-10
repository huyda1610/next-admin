'use client';
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@components/shadcn/ui/dialog';
import { NextDialogProps } from '@components/shadcn/components/dialog/type';
import { cn } from '@lib/utils';
import { Expand, Shrink, X } from 'lucide-react';
import { Button } from '@components/shadcn/ui/button';

function NextDialog({ children, open, setOpen, size, header, body }: NextDialogProps) {
  const [isExpand, setIsExpand] = React.useState<boolean>(false);

  const renderSize = (): string => {
    if (size === 'full' || isExpand) {
      return 'sm:max-w-full sm:h-full';
    }

    let dialogSize: number = 0;

    switch (size) {
      case 'sm':
        dialogSize = 520;
        break;
      case 'md':
        dialogSize = 720;
        break;
      case 'lg':
        dialogSize = 920;
        break;
      case 'xl':
        dialogSize = 1120;
        break;
      default:
        dialogSize = 520;
        break;
    }

    return 'sm:max-w-[' + dialogSize + 'px]';
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleExpand = () => {
    setIsExpand((prevState) => !prevState);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className={`${renderSize()} w-full p-0 flex flex-col gap-0`}>
        {/*Header*/}
        <DialogHeader className="px-5 py-4 border-solid border-border-color border-b flex flex-row justify-between items-center">
          <div>
            <DialogTitle>{header.title}</DialogTitle>
          </div>

          <div className="flex items-center gap-2 m-0 justify-start">
            <Button variant="text" className="p-1 rounded-full" onClick={handleExpand}>
              {!isExpand ? <Expand className="h-4 w-4" /> : <Shrink className="h-4 w-4" />}
            </Button>

            <Button variant="text" className="p-1 rounded-full" onClick={handleClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>
        {/*Body*/}
        <section className={cn('p-3', body?.className)}>{children}</section>
        {/*  Footer*/}
        <section className=""></section>
      </DialogContent>
    </Dialog>
  );
}

export default NextDialog;
