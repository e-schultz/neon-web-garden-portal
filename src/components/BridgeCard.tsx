
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Calendar, Clock, ChevronDown, ChevronUp } from 'lucide-react';
import { ContentDisplay } from './ContentDisplay';
import { useIsMobile } from '@/hooks/use-mobile';

interface BridgeCardProps {
  bridge: any;
}

export function BridgeCard({ bridge }: BridgeCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const date = new Date(bridge.metadata.timestamp);
  const formattedDate = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
  const isMobile = useIsMobile();
  
  const toggleExpand = () => setIsExpanded(!isExpanded);
  
  return (
    <Card className="neon-card mb-8 overflow-hidden">
      <CardHeader 
        className="bg-black bg-opacity-50 backdrop-blur-sm border-b border-neon border-opacity-30"
        role="button"
        onClick={toggleExpand}
        aria-expanded={isExpanded}
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && toggleExpand()}
      >
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="text-glow text-xl font-mono">
              {bridge.bridge_id}
            </CardTitle>
            <CardDescription className="text-muted-foreground flex items-center mt-1">
              <Calendar className="h-4 w-4 mr-1" />
              {formattedDate}
            </CardDescription>
          </div>
          <div className="flex flex-col sm:flex-row items-end sm:items-center gap-2">
            <Badge className="bg-primary text-white">
              {bridge.metadata.mode}
            </Badge>
            {isExpanded ? 
              <ChevronUp className="h-4 w-4 text-muted-foreground" /> : 
              <ChevronDown className="h-4 w-4 text-muted-foreground" />
            }
          </div>
        </div>
      </CardHeader>
      
      {isExpanded && (
        <CardContent className="pt-6">
          {bridge.content_summary ? (
            <div className="terminal-text mb-4">
              <ContentDisplay content={bridge.content_summary} />
            </div>
          ) : (
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-medium text-primary mb-2">CONTEXT MARKERS</h3>
                <div className="flex flex-wrap gap-2">
                  {bridge.metadata.ctx_markers.split(',').map((marker: string, index: number) => (
                    <Badge key={index} variant="outline" className="bg-muted border-neon">
                      {marker.trim()}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-primary mb-2">TIMESTAMP MARKERS</h3>
                <div className="code-block mb-4">
                  {bridge.section_data.session_context.timestamp_markers.map((marker: string, index: number) => (
                    <div key={index} className="mb-1 flex items-center">
                      <Clock className="h-3 w-3 mr-2 text-primary" />
                      <span className="text-sm">{marker}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-primary mb-2">ACTIVE THREADS</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {bridge.section_data.active_threads.map((thread: any, index: number) => (
                    <div key={index} className="border border-muted p-3 rounded-md bg-black bg-opacity-30">
                      <h4 className="text-neon mb-2">{thread.name}</h4>
                      <ul className="space-y-1 text-sm">
                        {thread.activities.map((activity: string, actIndex: number) => (
                          <li key={actIndex} className="flex items-start">
                            <ArrowRight className="h-3 w-3 mr-2 mt-1 text-muted-foreground flex-shrink-0" />
                            <span>{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {bridge.section_data.notable_context_elements && (
                <div>
                  <h3 className="text-sm font-medium text-primary mb-2">NOTABLE ELEMENTS</h3>
                  <div className="glassmorphism p-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-xs text-muted-foreground mb-1">SYSTEM MODE</h4>
                        <p className="text-sm">{bridge.section_data.notable_context_elements.system_mode}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-xs text-muted-foreground mb-1">KEY METAPHORS</h4>
                        <div className="flex flex-wrap gap-1">
                          {bridge.section_data.notable_context_elements.key_metaphors.map((metaphor: string, index: number) => (
                            <Badge key={index} variant="secondary" className="bg-secondary/30">
                              {metaphor}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-xs text-muted-foreground mb-1">SIGNAL PHRASES</h4>
                        <ul className="text-sm list-disc list-inside">
                          {bridge.section_data.notable_context_elements.signal_phrases.map((phrase: string, index: number) => (
                            <li key={index} className="text-primary">{phrase}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-xs text-muted-foreground mb-1">OPEN TRACES</h4>
                        <ul className="text-sm">
                          {bridge.section_data.notable_context_elements.open_traces.map((trace: string, index: number) => (
                            <li key={index} className="mb-1 text-muted-foreground">{trace}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {bridge.documents && (
                <div>
                  <h3 className="text-sm font-medium text-primary mb-2">DOCUMENT CONTENT</h3>
                  <ContentDisplay content={bridge.documents} />
                </div>
              )}
            </div>
          )}
        </CardContent>
      )}
    </Card>
  );
}
