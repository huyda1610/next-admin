"use client";
import React from "react";
import { Highlight, themes } from "prism-react-renderer";
import { cn } from "@/lib/utils";
import { FormItemType } from "@/app/(protected)/(demos)/form-builder/type/type";
import { generateCode } from "@/app/(protected)/(demos)/form-builder/utils/generate-code";

type PropsType = { items: FormItemType[] };

function FormBuilderCodeBlock({ items }: PropsType) {
  const code = generateCode(items);
  return (
    <section className="mt-5">
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
    </section>
  );
}

export default FormBuilderCodeBlock;
