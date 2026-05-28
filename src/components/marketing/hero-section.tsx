import { ArrowRightIcon } from '@phosphor-icons/react'
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
            <h1 className="text-4xl lg:text-5xl font-medium tracking-tight leading-tight">
              The Orchestrator
              <br />
              Every MCP Needs
            </h1>
            <p className="mt-6 text-muted-foreground text-sm leading-relaxed max-w-md">
              Agentify is the open-source MCP Orchestrator that simplifies
              messaging infrastructure for developers and businesses.
            </p>
            <div className="flex flex-wrap items-center gap-3 mt-8">
              <Button size="lg" className="gap-2">
                Get API Keys
                <ArrowRightIcon />
              </Button>
              <Button variant="outline" size="lg">
                Explore docs
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-2 mt-8 text-xs text-muted-foreground">
              <code className="bg-muted px-2 py-1 rounded">
                bun install @agentify/core
              </code>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <img src="/ag-hero.svg" alt="Code Preview" className="h-[55vh]" />
          </div>
        </div>
      </div>
    </section>
  )
}
