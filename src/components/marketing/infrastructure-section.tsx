import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface InfrastructureSectionProps {
  className?: string
}

export function InfrastructureSection({
  className,
}: InfrastructureSectionProps) {
  return (
    <section className={cn('w-full', className)}>
      <div className="mx-auto max-w-6xl border-x border-edge">
        <div className="grid lg:grid-cols-2 gap-12 px-6 py-16">
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
              Infrastructure,
              <br />
              not just APIs.
            </h2>
            <p className="mt-6 text-muted-foreground text-sm leading-relaxed max-w-md">
              Replace provider fragmentation with a single intelligent layer.
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
          </div>
        </div>
      </div>
    </section>
  )
}
