
import * as React from "react";
import { cn } from "@/lib/utils";

interface YamlViewerProps {
  content: string;
  className?: string;
}

export function YamlViewer({ content, className }: YamlViewerProps) {
  const lines = content.split("\n");

  return (
    <div className={cn("yaml-viewer font-mono text-sm", className)}>
      <pre className="p-4 bg-black bg-opacity-30 rounded-md border border-neon border-opacity-20 overflow-x-auto">
        {lines.map((line, idx) => {
          // Style keys differently from values
          if (line.includes(":")) {
            const [key, value] = line.split(":");
            const indent = key.match(/^\s*/)?.[0] || "";
            
            return (
              <div key={idx} className="line">
                <span className="text-neon">{indent + key}:</span>
                {value && <span className="text-terminal-green">{value}</span>}
              </div>
            );
          }
          
          // Handle lists
          if (line.trim().startsWith("- ")) {
            const indent = line.match(/^\s*/)?.[0] || "";
            const content = line.trim().substring(2);
            
            return (
              <div key={idx} className="line">
                <span className="text-muted-foreground">{indent}- </span>
                <span>{content}</span>
              </div>
            );
          }
          
          return <div key={idx} className="line">{line}</div>;
        })}
      </pre>
    </div>
  );
}
