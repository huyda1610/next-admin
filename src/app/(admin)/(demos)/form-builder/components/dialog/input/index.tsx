import React, { useEffect } from "react";
import { Button } from "@/components/shadcn/ui/button";
import { Pencil } from "lucide-react";
import { z } from "zod";
import { inputFormSchema } from "./form-schema.type";
import useNextModal from "@/hooks/use-modal";

type PropsType = {
  values: z.infer<typeof inputFormSchema>;
  onSubmit: (values: z.infer<typeof inputFormSchema>) => void;
};

function InputDialog({ values, onSubmit }: PropsType) {
  const { open, setElement } = useNextModal();

  useEffect(() => {
    setElement(<h1>abcxyz</h1>);
  }, []);

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        onClick={(event) => {
          event.preventDefault();
          open();
        }}
      >
        <Pencil className="text-info" size={16} />
      </Button>

      {/*{open && (*/}
      {/*  <InputForm*/}
      {/*    setOpen={setOpen}*/}
      {/*    open={open}*/}
      {/*    values={values}*/}
      {/*    onSubmit={onSubmit}*/}
      {/*  />*/}
      {/*)}*/}
    </>
  );
}

export default InputDialog;
