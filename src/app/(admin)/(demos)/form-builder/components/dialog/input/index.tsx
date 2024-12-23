import React, { useState } from "react";
import { Button } from "@/components/shadcn/ui/button";
import { Pencil } from "lucide-react";
import InputForm from "./form";
import { z } from "zod";
import { inputFormSchema } from "./form-schema.type";

type PropsType = {
  values: z.infer<typeof inputFormSchema>;
  onSubmit: (values: z.infer<typeof inputFormSchema>) => void;
};

function InputDialog({ values, onSubmit }: PropsType) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <Button
        variant="primary"
        className="p-2 rounded-full"
        onClick={() => setOpen(true)}
      >
        <Pencil className="size-2" />
      </Button>

      {open && (
        <InputForm
          setOpen={setOpen}
          open={open}
          values={values}
          onSubmit={onSubmit}
        />
      )}
    </>
  );
}

export default InputDialog;
