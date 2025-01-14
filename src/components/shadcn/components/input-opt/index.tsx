import React from "react";
import { ControllerRenderProps } from "react-hook-form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/shadcn/ui/input-otp";
import { generate } from "@/@core/utils/generate";

type NextInputOptProps = {
  field?: ControllerRenderProps<any>;
  maxLength: number;
  separatorAt?: number;
  disabled?: boolean;
  defaultValue?: string;
};

function NextInputOtp({
  field,
  maxLength = 1,
  separatorAt = 0,
  disabled,
  defaultValue,
}: NextInputOptProps) {
  const oneDimensionArray: React.ReactNode[] = Array.from(
    Array(maxLength)
      .keys()
      .flatMap((key) => {
        return [<InputOTPSlot key={key} index={key} />];
      }),
  );

  const twoDimensionArray: React.ReactNode[] = !separatorAt
    ? []
    : generate.array2D(maxLength, separatorAt).map((group, index) => {
        return (
          <div key={index} className="flex items-center gap-2">
            <InputOTPGroup>
              {group.map((key) => (
                <InputOTPSlot key={key + index} index={key} />
              ))}
            </InputOTPGroup>
            {index + 1 < generate.array2D(maxLength, separatorAt).length && (
              <InputOTPSeparator key={crypto.randomUUID()} />
            )}
          </div>
        );
      });

  return (
    <InputOTP
      maxLength={maxLength}
      disabled={disabled}
      {...field}
      defaultValue={defaultValue}
      value={field?.value}
    >
      {!separatorAt ? (
        <InputOTPGroup>{oneDimensionArray}</InputOTPGroup>
      ) : (
        twoDimensionArray
      )}
    </InputOTP>
  );
}

export default NextInputOtp;
