
import * as React from "react";
import { cn } from "@/lib/utils";

interface MarkdownViewerProps {
  content: string;
  className?: string;
}

export function MarkdownViewer({ content, className }: MarkdownViewerProps) {
  // Simple markdown parsing for headers, lists, and code blocks
  const lines = content.split("\n");
  
  const renderLine = (line: string, index: number) => {
    // Headers
    if (line.startsWith("# ")) {
      return <h1 key={index} className="text-xl font-bold text-primary mb-2">{line.substring(2)}</h1>;
    }
    if (line.startsWith("## ")) {
      return <h2 key={index} className="text-lg font-semibold text-primary mb-2">{line.substring(3)}</h2>;
    }
    if (line.startsWith("### ")) {
      return <h3 key={index} className="text-md font-semibold text-primary mb-1">{line.substring(4)}</h3>;
    }
    
    // Lists
    if (line.startsWith("- ")) {
      return (
        <li key={index} className="ml-4 mb-1 flex items-start">
          <span className="text-neon mr-2">•</span>
          <span>{line.substring(2)}</span>
        </li>
      );
    }
    
    if (line.startsWith("1. ") || line.startsWith("2. ") || line.startsWith("3. ") || 
        line.startsWith("4. ") || line.startsWith("5. ")) {
      return (
        <li key={index} className="ml-4 mb-1 list-decimal list-inside">
          {line.substring(line.indexOf(" ") + 1)}
        </li>
      );
    }

    // Bold
    if (line.includes("**")) {
      const parts = line.split(/\*\*/g);
      return (
        <p key={index} className="mb-2">
          {parts.map((part, i) => (
            i % 2 === 0 ? part : <strong key={i} className="font-bold">{part}</strong>
          ))}
        </p>
      );
    }
    
    // Empty line
    if (!line.trim()) {
      return <div key={index} className="h-2"></div>;
    }
    
    // Default paragraph
    return <p key={index} className="mb-2">{line}</p>;
  };

  return (
    <div className={cn("markdown-viewer text-foreground", className)}>
      {lines.map(renderLine)}
    </div>
  );
}
