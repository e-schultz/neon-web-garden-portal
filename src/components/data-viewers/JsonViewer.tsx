
import * as React from "react";
import { cn } from "@/lib/utils";
import { CodeBlock } from "./CodeBlock";

interface JsonViewerProps {
  data: Record<string, any> | string;
  className?: string;
  collapsed?: boolean;
}

export function JsonViewer({ data, className, collapsed = false }: JsonViewerProps) {
  // If data is a string that looks like JSON, try to parse it
  let jsonData = data;
  if (typeof data === 'string') {
    try {
      jsonData = JSON.parse(data);
    } catch (e) {
      // If it can't be parsed, just use it as a string
      jsonData = data;
    }
  }

  // Format the JSON with indentation
  const formattedJson = JSON.stringify(jsonData, null, 2);

  return (
    <div className={cn("json-viewer", className)}>
      <CodeBlock 
        code={formattedJson}
        language="json"
        className="glassmorphism"
      />
    </div>
  );
}
