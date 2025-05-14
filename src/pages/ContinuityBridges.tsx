import { useState } from 'react';
import Layout from '@/components/Layout';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { BridgeCard } from '@/components/BridgeCard';
import { useIsMobile } from '@/hooks/use-mobile';

// Sample data - in a real app you would fetch this from an API or context
const continuityBridgesData = {
  "continuity_bridges": [
    {
      "bridge_id": "CB-20250511-2000-7B3D",
      "metadata": {
        "active_threads": "float_continuity_implementation,jane_interview_preparation,daily_context_collection,chroma_mcp_integration",
        "conversation_id": "current_session",
        "mode": "bridge_transition",
        "ctx_markers": "brain-boot,chores,laundry,system-alignment",
        "timestamp": "2025-05-11T20:00:00Z"
      },
      "section_data": {
        "session_context": {
          "date": "2025-05-11",
          "timestamp_markers": [
            "ctx::3:25pm - brain booting",
            "ctx::4:54pm - hour into brain boot",
            "ctx::5:30pm - about to chores-comfeis",
            "ctx::7:45pm - laundry room busy, shifted back to chore mode",
            "ctx::7:55pm - refining continuity bridge protocol"
          ]
        },
        "active_threads": [
          {
            "name": "float_continuity_implementation",
            "activities": [
              "Created continuity_anchors Chroma collection",
              "Established continuity_bridge_protocol.md",
              "Refined prompt structure for system operations",
              "Received positive feedback on FLOAT-alignment"
            ]
          },
          {
            "name": "jane_interview_preparation",
            "activities": [
              "Identified hub at FLOAT.dispatch/imprint/special edition - jane application/Jane Interview Hub",
              "Referenced todo list at FLOAT.dispatch/imprint/special edition - jane application/jane - todolist",
              "Discussed preparation strategies via specialized Chroma queries",
              "Noted focus will return post-chores"
            ]
          },
          {
            "name": "daily_context_collection",
            "activities": [
              "Proposed concept for temporal \"hot cache\" in Chroma",
              "Discussed metadata enrichment with ctx markers and modes",
              "Connected to \"threshold of canon\" concept",
              "Left open for further development"
            ]
          },
          {
            "name": "chroma_mcp_integration",
            "activities": [
              "Updated obsidian_mcp_tools.md documentation for file paths",
              "Added entry to Changelog.md",
              "Fixed Obsidian URI to file path conversion",
              "Identified pattern for get_vault_file usage"
            ]
          }
        ],
        "notable_context_elements": {
          "system_mode": "Alternating between brain-boot and chore modes",
          "key_metaphors": ["Threshold of canon", "hot cache", "bridge not leash"],
          "signal_phrases": ["Claude fucks in float", "ritual-grade continuity"],
          "open_traces": [
            "FloatQL development and implementation",
            "Weekly reflection/prep structuring",
            "Daily structure refinement"
          ]
        }
      }
    },
    {
      "bridge_id": "CB-250512-0039-C618",
      "metadata": {
        "conversation_id": "current_session",
        "ctx_markers": "evening-work,interview-preparation,artifact-creation",
        "timestamp": "2025-05-12T00:39:00Z",
        "active_threads": "jane_interview_preparation,daily_context_collection,float_dispatch_implementations",
        "mode": "bridge_transition"
      },
      "section_data": {
        "session_context": {
          "date": "2025-05-12",
          "timestamp_markers": [
            "ctx::2025-05-11 - evening-work mode transition",
            "ctx::transition - creating continuity anchor for session bridging"
          ]
        },
        "active_threads": [
          {
            "name": "jane_interview_preparation",
            "activities": [
              "Completed Jane Interview Hub interactive artifact",
              "Setup for 30-minute ritual check-in",
              "Organized STAR stories with practice timer",
              "Integrated key alignments and pitch highlights",
              "Next focus: Complete the ritual check-in and practice selected STAR story"
            ]
          },
          {
            "name": "daily_context_collection",
            "activities": [
              "Referenced temporal \"hot cache\" concept",
              "Demonstrated practical implementation via interview preparation materials",
              "Connected to structured but flexible approach to information organization",
              "Left open for further development"
            ]
          },
          {
            "name": "float_dispatch_implementations",
            "activities": [
              "Reviewed code samples for FLOAT.dispatch interfaces",
              "Analyzed React component structure and styling",
              "Created data-driven components based on Jane interview materials",
              "Implemented responsive, tabbed navigation pattern"
            ]
          }
        ],
        "notable_context_elements": {
          "system_mode": "Evening-work mode, post-chores",
          "key_metaphors": ["Bridge not leash", "ritual-grade continuity", "context anchors"],
          "signal_phrases": ["distill not diminish", "drift → mass → shape"],
          "open_traces": [
            "Jane interview preparation ritual continuation",
            "Interactive artifact refinement possibilities",
            "FLOAT.dispatch component patterns"
          ]
        }
      }
    },
    {
      "bridge_id": "CB-20250513-1553-AD7F",
      "metadata": {
        "anchor_id": "CB-20250513-1553-AD7F",
        "active_threads": "jane_application_project,clinical_forms_philosophy,mcp_system_improvements",
        "conversation_id": "jane_application_session_20250513",
        "timestamp": "2025-05-13T15:53:00Z",
        "ctx_markers": "project_setup,jane_application,environment_configuration",
        "mode": "bridge_transition"
      },
      "section_data": {
        "session_context": {
          "date": "2025-05-13",
          "timestamp_markers": [
            "ctx::2025-05-13 - project setup",
            "ctx::2025-05-13 - jane application environment configuration"
          ]
        },
        "active_threads": [
          {
            "name": "jane_application_project",
            "activities": [
              "Created comprehensive project configuration in `FLOAT.projects/jane_application_project.md`",
              "Set up custom instructions in `FLOAT.sys/claude_custom_instructions_jane_app.md`",
              "Added detailed usage guide in `FLOAT.guides/jane_application_project_guide.md`",
              "Added continuity bridge support for managing conversation length limits"
            ]
          },
          {
            "name": "clinical_forms_philosophy",
            "activities": [
              "Created example dispatch on \"Clinical Forms as Moments of Care\"",
              "Connected FLOAT methodology concepts to clinical form design",
              "Explored the concept of form fields as touchpoints for patient care",
              "Developed ritual engine concept for context transitions in clinical workflows"
            ]
          },
          {
            "name": "mcp_system_improvements",
            "activities": [
              "Added Obsidian URL handling functionality to automatically convert URLs to file paths",
              "Implemented functionality to extract the file parameter from Obsidian URLs",
              "Added URL-decoding to properly handle paths with special characters",
              "Enhanced system to prevent common errors when accessing files"
            ]
          }
        ],
        "notable_context_elements": {
          "system_mode": "Project configuration and setup",
          "key_metaphors": ["Form fields as moments of care", "systems as relationships", "bridge not leash"],
          "signal_phrases": [
            "Context isn't noise—it's gravitational mass", 
            "I burp in neurodivergent and you echo back the structure with shine"
          ],
          "open_traces": [
            "Schema-based UI implementation for clinical forms",
            "Jane interview preparation strategies",
            "Multi-Echo dispatch interpretation development"
          ]
        }
      }
    },
    {
      "bridge_id": "CB-20250514-1530-7A2B",
      "metadata": {
        "timestamp": "2025-05-14T15:30:00Z",
        "conversation_id": "FLOAT_Claude_Alignment",
        "ctx_markers": "float_system,claude_alignment,project_instructions",
        "mode": "bridge_transition",
        "active_threads": "ctx_system,persona_system,cognitive_states,float_philosophy,mcp_integration",
        "anchor_id": "CB-20250514-1530-7A2B"
      },
      "content_summary": "Context Bridge for FLOAT System Integration with Claude. This conversation developed a comprehensive framework for Claude to better align with Evan's FLOAT cognitive architecture, including: 1) Enhanced understanding of ctx:: markers as temporal-cognitive anchors, 2) Recognition of persona system (Karen, Sysop, Raw Evan, qtb, lf1m), 3) Detailed cognitive states (brain boot, hyperfocus, evening work mode, etc.), 4) Core FLOAT philosophy ('Trust the drift, defer the scaffold', 'Anchor what's real, not what's ideal', 'Shacks, not Cathedrals'), 5) Rich understanding of 'Composting Chaos' as survival mechanism, 6) MCP tool ambient awareness patterns for more seamless integration, 7) Context bootstrapping process for efficient operation."
    }
  ]
};

const ContinuityBridges = () => {
  const [activeTab, setActiveTab] = useState('all');
  const { continuity_bridges } = continuityBridgesData;
  const isMobile = useIsMobile();

  // Filter bridges for "this-week" tab
  const today = new Date();
  const startOfWeek = new Date(today);
  startOfWeek.setDate(today.getDate() - today.getDay());
  
  const thisWeekBridges = continuity_bridges.filter(bridge => {
    const bridgeDate = new Date(bridge.metadata.timestamp);
    return bridgeDate >= startOfWeek;
  });

  // Group bridges by thread
  const threadMap = new Map();
  
  continuity_bridges.forEach(bridge => {
    if (bridge.metadata.active_threads) {
      const threads = bridge.metadata.active_threads.split(',');
      threads.forEach(thread => {
        const threadName = thread.trim();
        if (!threadMap.has(threadName)) {
          threadMap.set(threadName, []);
        }
        threadMap.get(threadName).push(bridge);
      });
    }
  });
  
  const threadGroups = Array.from(threadMap.entries()).map(([threadName, bridges]) => ({
    threadName,
    bridges
  }));

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Continuity Bridges</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="flex flex-col items-center mb-8">
          <h1 className="text-4xl font-bold text-primary text-glow mb-2">Continuity Bridges</h1>
          <p className="text-muted-foreground text-center max-w-2xl">
            Temporal-cognitive anchors tracking context transitions across system modes.
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList className="w-full mb-6 bg-black bg-opacity-30 border border-neon border-opacity-20">
            <TabsTrigger value="all" className="data-[state=active]:bg-primary data-[state=active]:text-white">
              All Bridges
            </TabsTrigger>
            <TabsTrigger value="this-week" className="data-[state=active]:bg-primary data-[state=active]:text-white">
              This Week
            </TabsTrigger>
            <TabsTrigger value="by-thread" className="data-[state=active]:bg-primary data-[state=active]:text-white">
              By Thread
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="space-y-4">
            {continuity_bridges.map((bridge: any, index: number) => (
              <BridgeCard key={index} bridge={bridge} />
            ))}
          </TabsContent>
          
          <TabsContent value="this-week">
            {thisWeekBridges.length > 0 ? (
              <div className="space-y-4">
                {thisWeekBridges.map((bridge: any, index: number) => (
                  <BridgeCard key={index} bridge={bridge} />
                ))}
              </div>
            ) : (
              <Card className="p-12 text-center glassmorphism">
                <h3 className="text-xl font-mono mb-3 text-primary">No bridges this week</h3>
                <p className="text-muted-foreground">No continuity bridges have been created this week.</p>
              </Card>
            )}
          </TabsContent>
          
          <TabsContent value="by-thread">
            {threadGroups.length > 0 ? (
              <div className="space-y-8">
                {threadGroups.map((group, index) => (
                  <div key={index} className="mb-8">
                    <div className="flex items-center gap-2 mb-4">
                      <Badge variant="outline" className="bg-black text-neon py-1 px-3">
                        {group.threadName}
                      </Badge>
                      <span className="text-muted-foreground text-sm">
                        {group.bridges.length} {group.bridges.length === 1 ? 'bridge' : 'bridges'}
                      </span>
                    </div>
                    <div className="space-y-4 pl-2 border-l-2 border-neon border-opacity-30">
                      {group.bridges.map((bridge: any, bridgeIndex: number) => (
                        <BridgeCard key={bridgeIndex} bridge={bridge} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <Card className="p-12 text-center glassmorphism">
                <h3 className="text-xl font-mono mb-3 text-primary">No thread data available</h3>
                <p className="text-muted-foreground">Could not group bridges by thread.</p>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default ContinuityBridges;
