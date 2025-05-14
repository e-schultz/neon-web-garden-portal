
import * as React from "react";
import { cn } from "@/lib/utils";
import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
  showLineNumbers?: boolean;
  className?: string;
}

export function CodeBlock({ 
  code, 
  language = "json", 
  title, 
  showLineNumbers = false,
  className 
}: CodeBlockProps) {
  const { toast } = useToast();
  const codeRef = React.useRef<HTMLPreElement>(null);
  
  const handleCopy = () => {
    if (code) {
      navigator.clipboard.writeText(code);
      toast({
        title: "Copied to clipboard",
        description: "Code has been copied to your clipboard",
        duration: 2000,
      });
    }
  };

  return (
    <div className={cn("relative rounded-md overflow-hidden", className)}>
      {title && (
        <div className="px-4 py-2 bg-black bg-opacity-70 border-b border-neon border-opacity-30 flex justify-between items-center">
          <span className="text-xs font-mono text-neon">{title}</span>
          <div className="text-xs text-muted-foreground">{language}</div>
        </div>
      )}
      <div className="relative">
        <pre
          ref={codeRef}
          className={cn(
            "p-4 overflow-x-auto font-mono text-sm bg-black bg-opacity-50",
            showLineNumbers && "pl-12 relative"
          )}
        >
          <code>{code}</code>
        </pre>
        <Button
          variant="ghost"
          size="sm"
          className="absolute top-2 right-2 h-8 w-8 p-0 opacity-70 hover:opacity-100"
          onClick={handleCopy}
        >
          <span className="sr-only">Copy code</span>
          <Copy className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
