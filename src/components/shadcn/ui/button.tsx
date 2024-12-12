import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-1.5 duration-300 whitespace-nowrap w-fit' +
    ' outline-none font-normal text-center px-[15px] py-1 rounded-lg disabled:pointer-events-none' +
    ' disabled:opacity-30 transition [&>svg]:size-4 [&>svg]:shrink-0',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-white hover:bg-[#708dff]',
        black: 'bg-black text-white hover:bg-[#3C3C3D]',
        danger: 'bg-danger text-white hover:bg-[#f47c7c]',
        text: 'bg-transparent text-black hover:bg-gray-light',
        outline:
          'ring-1 ring-inset ring-primary bg-white shadow-sm text-primary hover:bg-light-theme',
        'outline-black':
          'ring-1 ring-inset ring-black bg-white shadow-sm text-black hover:bg-gray-200',
        'outline-general':
          'ring-1 ring-inset ring-gray-300 bg-white shadow-sm text-black hover:bg-gray-200' +
          ' hover:text-primary hover:ring-primary',
        'outline-danger':
          'ring-1 ring-inset ring-gray-300 bg-white shadow-sm text-black hover:bg-gray-200' +
          ' hover:text-danger hover:ring-danger',
      },
      size: {
        default: '',
        sm: '',
        lg: 'py-2 px-3 text-sm',
        xl: 'font-semibold [&>svg]:size-[18px] rounded-[10px] text-sm py-[11px] px-3.5',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
