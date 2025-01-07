import React from "react";
import { Button } from "@/components/shadcn/ui/button";
import { Pencil } from "lucide-react";
import { z } from "zod";
import { textAreaFormSchema } from "./form-schema.type";
import useNextModal from "@/hooks/use-modal";
import InputFormModal from "./form-modal";

type PropsType = {
  values: z.infer<typeof textAreaFormSchema>;
  onSubmit: (values: z.infer<typeof textAreaFormSchema>) => void;
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
            <InputFormModal
              values={values}
              onSubmit={onSubmit}
              onClose={close}
            />
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
