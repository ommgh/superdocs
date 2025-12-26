import { BorderFrame } from './border-frame'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface CtaSectionProps {
  className?: string
}

export function CtaSection({ className }: CtaSectionProps) {
  return (
    <section className={cn('w-full', className)}>
      <div className="mx-auto max-w-6xl border-x border-edge">
        <div className="px-6 py-16 lg:py-24">
          <BorderFrame>
            <div className="bg-card p-8 lg:p-12 text-center">
              <h2 className="text-2xl lg:text-3xl font-medium tracking-tight mb-4">
                Ready to get started
              </h2>
              <p className="text-sm text-muted-foreground max-w-md mx-auto mb-8">
                Start building with Superdocs today. Free forever for
                developers.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <Button size="lg" className="gap-2">
                  Get API Keys
                  <span>→</span>
                </Button>
                <Button variant="outline" size="lg">
                  View Documentation
                </Button>
              </div>
            </div>
          </BorderFrame>
        </div>
      </div>
    </section>
  )
}
