import React from "react";
import { ControllerRenderProps } from "react-hook-form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/shadcn/ui/input-otp";

type NextInputOptProps = {
  field?: ControllerRenderProps<any>;
  maxLength: number;
  separatorAt?: number;
  disabled?: boolean;
};

function NextInputOpt({
  field,
  maxLength = 1,
  separatorAt,
  disabled,
}: NextInputOptProps) {
  const oneDimensionArray: number[] = Array.from(Array(maxLength).keys());

  return (
    <InputOTP maxLength={maxLength} disabled={disabled} {...field}>
      <InputOTPGroup>
        {oneDimensionArray.map((index) => (
          <InputOTPSlot key={index} index={index} />
        ))}
      </InputOTPGroup>
    </InputOTP>
  );
}

export default NextInputOpt;
