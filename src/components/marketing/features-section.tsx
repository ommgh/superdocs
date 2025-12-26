import { BorderFrame } from './border-frame'
import { cn } from '@/lib/utils'

interface FeaturesSectionProps {
  className?: string
}

export function FeaturesSection({ className }: FeaturesSectionProps) {
  return (
    <section className={cn('w-full', className)}>
      <div className="mx-auto max-w-6xl border-x border-edge">
        <div className="grid md:grid-cols-2 gap-6 px-6 pb-6">
          {/* Feature 1 - Custom Resource */}
          <BorderFrame>
            <div className="bg-card p-6 relative overflow-hidden min-h-70">
              <h3 className="font-semibold text-base mb-2">Custom Resource</h3>
              <p className="text-xs text-muted-foreground mb-6 max-w-[70%]">
                Superdocs can extract and generate MCP Servers from any resource
              </p>
              <img
                src="/super-feature-1.svg"
                alt="Custom Resource Generation"
                className="absolute -bottom-5 -right-5 max-w-[75%] h-auto"
              />
            </div>
          </BorderFrame>

          {/* Feature 2 - Intelligent Orchestration Layer */}
          <BorderFrame>
            <div className="bg-card p-6 relative overflow-hidden min-h-70">
              <h3 className="font-semibold text-base mb-2">
                Intelligent Orchestration Layer
              </h3>
              <p className="text-xs text-muted-foreground mb-6 max-w-[70%]">
                Superdocs handles tools, methods, and server management.
              </p>
              <img
                src="/super-feature-2.svg"
                alt="Orchestration Layer"
                className="absolute -bottom-5 -right-5 max-w-[75%] h-auto"
              />
            </div>
          </BorderFrame>
        </div>

        {/* Feature 3 - Full Width */}
        <div className="px-6 pb-12">
          <BorderFrame>
            <div className="bg-card p-6">
              <h3 className="font-semibold text-base mb-2">
                Local-First Deployment
              </h3>
              <p className="text-xs text-muted-foreground mb-6">
                Deploy and manage multiple MCP servers locally with Docker
                Compose. One command to spin up all your servers with automatic
                Claude configuration.
              </p>

              <div className="border border-edge rounded p-4 bg-muted/30">
                {/* Docker Compose Visual */}
                <div className="space-y-4">
                  {/* Command Line */}
                  <div className="bg-background rounded p-3 font-mono text-[10px] border border-edge">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 rounded-full bg-red-500" />
                      <div className="w-2 h-2 rounded-full bg-yellow-500" />
                      <div className="w-2 h-2 rounded-full bg-green-500" />
                      <span className="text-muted-foreground ml-2">
                        Terminal
                      </span>
                    </div>
                    <div className="text-green-600">
                      $ mcp-runner deploy --all
                    </div>
                  </div>

                  {/* Container Status Grid */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-background rounded p-3 border border-edge">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-semibold">
                          stripe-mcp
                        </span>
                        <div className="w-1 h-1 rounded-full bg-green-500" />
                      </div>
                      <div className="text-[9px] text-muted-foreground space-y-1">
                        <div className="flex justify-between">
                          <span className="hidden md:block">Port:</span>
                          <span className="font-mono">3001</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="hidden md:block">Status:</span>
                          <span className="text-green-600">Running</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-background rounded p-3 border border-edge">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-semibold">
                          github-mcp
                        </span>
                        <div className="w-1 h-1 rounded-full bg-green-500" />
                      </div>
                      <div className="text-[9px] text-muted-foreground space-y-1">
                        <div className="flex justify-between">
                          <span className="hidden md:block">Port:</span>
                          <span className="font-mono">3002</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="hidden md:block">Status:</span>
                          <span className="text-green-600">Running</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-background rounded p-3 border border-edge">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-semibold">
                          slack-mcp
                        </span>
                        <div className="w-1 h-1 rounded-full bg-green-500" />
                      </div>
                      <div className="text-[9px] text-muted-foreground space-y-1">
                        <div className="flex justify-between">
                          <span className="hidden md:block">Port:</span>
                          <span className="font-mono">3003</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="hidden md:block">Status:</span>
                          <span className="text-green-600">Running</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Success Message */}
                  <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded p-3">
                    <div className="flex items-start gap-2 text-[10px]">
                      <span className="text-green-600 font-bold">✓</span>
                      <div className="flex-1 space-y-1">
                        <div className="text-green-600 font-semibold">
                          All servers deployed successfully
                        </div>
                        <div className="text-green-600/80">
                          Claude desktop config updated automatically
                        </div>
                        <div className="text-green-600/80 font-mono">
                          3 MCP servers available in Claude Desktop
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </BorderFrame>
        </div>
      </div>
    </section>
  )
}
