import React from "react";
import { Button } from "@/components/shadcn/ui/button";
import { Pencil } from "lucide-react";
import { z } from "zod";
import { inputFormSchema } from "./form-schema.type";
import useNextModal from "@/hooks/use-modal";
import FormModal from "./form-modal";

const schema = inputFormSchema;

type PropsType = {
  values: z.infer<typeof schema>;
  onSubmit: (values: z.infer<typeof schema>) => void;
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
            <FormModal values={values} onSubmit={onSubmit} onClose={close} />
          ),
          closable: true,
          size: "md",
        });
      }}
    >
      <Pencil className="text-info" size={16} />
    </Button>
  );
}

export default InputDialog;
