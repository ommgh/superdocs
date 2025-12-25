import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface HeroSectionProps {
  className?: string
}

export function HeroSection({ className }: HeroSectionProps) {
  return (
    <section className={cn('w-full', className)}>
      <div className="mx-auto max-w-6xl border-x border-edge">
        <div className="grid lg:grid-cols-2 gap-12 px-6 py-16 lg:py-24">
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
              The Orchestrator
              <br />
              MCP Server Needs.
            </h1>
            <p className="mt-6 text-muted-foreground text-sm leading-relaxed max-w-md">
              Superdocs is the open-source MCP Orchestrator that simplifies
              messaging infrastructure for developers and businesses.
            </p>
            <div className="flex flex-wrap items-center gap-3 mt-8">
              <Button size="lg" className="gap-2">
                Get API Keys
                <span>→</span>
              </Button>
              <Button variant="outline" size="lg">
                Explore docs
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-2 mt-8 text-xs text-muted-foreground">
              <code className="bg-muted px-2 py-1 rounded">
                npm install @superdocs/core
              </code>
            </div>

            <div className="mt-6">
              <p className="text-xs text-muted-foreground mb-4">
                Trusted Infrastructure
              </p>
              <div className="flex flex-wrap items-center gap-6">
                <span className="text-sm font-medium flex items-center gap-1">
                  statamic
                </span>
                <span className="text-sm font-medium">OTUA</span>
                <span className="text-sm font-medium">elastic</span>
                <span className="text-sm font-medium">Tighten</span>
                <span className="text-sm font-medium">HARVARD</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <img
              src="/super-hero.svg"
              alt="Code Preview"
              className="h-[55vh]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
