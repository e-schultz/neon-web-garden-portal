
import * as React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { MarkdownViewer } from "./data-viewers/MarkdownViewer";
import { JsonViewer } from "./data-viewers/JsonViewer";
import { YamlViewer } from "./data-viewers/YamlViewer";
import { CodeBlock } from "./data-viewers/CodeBlock";

interface ContentDisplayProps {
  content: string;
  className?: string;
}

export function ContentDisplay({ content, className }: ContentDisplayProps) {
  const [contentType, setContentType] = React.useState<"auto" | "markdown" | "json" | "yaml" | "code">("auto");
  
  // Try to detect content type
  React.useEffect(() => {
    if (content.trim().startsWith("{") || content.trim().startsWith("[")) {
      setContentType("json");
    } else if (content.includes("---") && (content.includes(":") && content.includes("\n"))) {
      setContentType("yaml");
    } else if (content.includes("# ") || content.includes("## ")) {
      setContentType("markdown");
    } else {
      setContentType("code");
    }
  }, [content]);
  
  return (
    <div className={className}>
      <Tabs value={contentType} onValueChange={(v) => setContentType(v as any)} className="w-full">
        <TabsList className="w-full justify-start mb-4 bg-black bg-opacity-30 border border-neon border-opacity-20">
          <TabsTrigger value="auto" className="data-[state=active]:bg-primary data-[state=active]:text-white">
            Auto
          </TabsTrigger>
          <TabsTrigger value="markdown" className="data-[state=active]:bg-primary data-[state=active]:text-white">
            Markdown
          </TabsTrigger>
          <TabsTrigger value="json" className="data-[state=active]:bg-primary data-[state=active]:text-white">
            JSON
          </TabsTrigger>
          <TabsTrigger value="yaml" className="data-[state=active]:bg-primary data-[state=active]:text-white">
            YAML
          </TabsTrigger>
          <TabsTrigger value="code" className="data-[state=active]:bg-primary data-[state=active]:text-white">
            Raw
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="auto" className="mt-0">
          {contentType === "markdown" && <MarkdownViewer content={content} />}
          {contentType === "json" && <JsonViewer data={content} />}
          {contentType === "yaml" && <YamlViewer content={content} />}
          {contentType === "code" && <CodeBlock code={content} />}
        </TabsContent>
        
        <TabsContent value="markdown" className="mt-0">
          <MarkdownViewer content={content} />
        </TabsContent>
        
        <TabsContent value="json" className="mt-0">
          <JsonViewer data={content} />
        </TabsContent>
        
        <TabsContent value="yaml" className="mt-0">
          <YamlViewer content={content} />
        </TabsContent>
        
        <TabsContent value="code" className="mt-0">
          <CodeBlock code={content} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
