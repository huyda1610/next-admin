"use client";
import React from "react";
import { Highlight, themes } from "prism-react-renderer";
import { cn } from "@/lib/utils";

const exampleCode = `
import React, { useState } from "react";

function Example() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
`.trim();

function FormBuilderCodeBlock() {
  return (
    <section className="mt-5">
      <Highlight theme={themes.oneDark} code={exampleCode} language="tsx">
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={cn(className, "rounded-b-lg p-4")} style={style}>
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
