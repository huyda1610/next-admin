"use client";
import React, { useState } from "react";
import { Highlight, themes } from "prism-react-renderer";
import { cn } from "@/lib/utils";
import { FormItemType } from "@/app/(protected)/(demos)/form-builder/type/type";
import { generateCode } from "@/app/(protected)/(demos)/form-builder/utils/generate-code";
import { Button } from "@/components/shadcn/ui/button";
import { Check, CircleCheck, Clipboard } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type PropsType = { items: FormItemType[] };

function FormBuilderCodeBlock({ items }: PropsType) {
  const [isCopy, setIsCopy] = useState<boolean>(false);
  const code = generateCode(items);
  const { toast } = useToast();

  const handleCopy = () => {
    setIsCopy(true);
    navigator.clipboard.writeText(code);
    toast({
      description: (
        <div className="flex gap-2 items-center">
          <CircleCheck size={16} className="text-success " />
          <span>Code copied to clipboard</span>
        </div>
      ),
    });
  };

  return (
    <section className="mt-5 relative">
      <Highlight theme={themes.oneDark} code={code} language="tsx">
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={cn(
              className,
              "rounded-b-lg p-4 max-h-[525px] overflow-y-auto",
            )}
            style={style}
          >
            {tokens.map((line: any, i: number) => (
              <div {...getLineProps({ line, key: i })} key={i}>
                <div className="table-cell">
                  {line.map((token: any, key: number) => (
                    <span {...getTokenProps({ token, key })} key={key} />
                  ))}
                </div>
              </div>
            ))}
          </pre>
        )}
      </Highlight>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-4 bg-background text-primary hover:bg-muted"
        onClick={handleCopy}
      >
        {isCopy ? <Check className="text-success" /> : <Clipboard />}
      </Button>
    </section>
  );
}

export default FormBuilderCodeBlock;
