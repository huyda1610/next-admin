import React from "react";
import { Button } from "@/components/shadcn/ui/button";
import { Pencil } from "lucide-react";
import { z } from "zod";
import { inputFormSchema } from "./form-schema.type";
import useNextModal from "@/hooks/use-modal";
import InputForm from "./form";

type PropsType = {
  values: z.infer<typeof inputFormSchema>;
  onSubmit: (values: z.infer<typeof inputFormSchema>) => void;
};

function InputDialog({ values, onSubmit }: PropsType) {
  const { open, close } = useNextModal();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={(event) => {
        event.preventDefault();
        open({
          element: (
            <InputForm values={values} onSubmit={onSubmit} onClose={close} />
          ),
          closable: true,
        });
      }}
    >
      <Pencil className="text-info" size={16} />
    </Button>
  );
}

export default InputDialog;
