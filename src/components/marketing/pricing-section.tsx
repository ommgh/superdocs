import { BorderFrame } from './border-frame'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface PricingSectionProps {
  className?: string
}

export function PricingSection({ className }: PricingSectionProps) {
  return (
    <section className={cn('w-full', className)}>
      <div className="mx-auto max-w-6xl border-x border-edge">
        <div className="px-6 py-16 lg:py-24">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-medium tracking-tight">
              Transparent Pricing
            </h2>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="bg-card p-6 h-full border border-edge">
              <div className="mb-6">
                <div className="text-xs text-muted-foreground mb-2">Free</div>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">$0</span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mb-6">
                Free forever plan for developers to explore and build with
                Superdocs.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-2 text-xs">
                  <span>✓</span>
                  <span>1 MCP Server</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <span>✓</span>
                  <span>Self Hostable</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <span>✓</span>
                  <span>Community Support</span>
                </div>
              </div>

              <Button variant="outline" size="lg" className="w-full">
                Start Building
              </Button>
            </div>

            {/* Enterprise */}
            <BorderFrame>
              <div className="bg-primary text-primary-foreground p-6 h-full">
                <div className="mb-6">
                  <div className="text-xs opacity-70 mb-2">Enterprise</div>
                  <div className="text-4xl font-bold">Custom</div>
                </div>

                <p className="text-xs opacity-70 mb-6">
                  For Teams and businesses who need dedicated support, and
                  on-premise deployment.
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-2 text-xs">
                    <span>✓</span>
                    <span>Cloud Platform Access</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <span>✓</span>
                    <span>On Premise Deployment</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <span>✓</span>
                    <span>Priority 24/7 Support</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <span>✓</span>
                    <span>Unlimited MCP Servers</span>
                  </div>
                </div>

                <Button
                  variant="outline"
                  size="lg"
                  className="w-full bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                >
                  Contact Sales
                </Button>
              </div>
            </BorderFrame>
          </div>
        </div>
      </div>
    </section>
  )
}
