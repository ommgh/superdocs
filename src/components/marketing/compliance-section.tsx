import { BorderFrame } from './border-frame'
import { cn } from '@/lib/utils'

interface ComplianceSectionProps {
  className?: string
}

export function ComplianceSection({ className }: ComplianceSectionProps) {
  return (
    <section className={cn('w-full border-y border-edge', className)}>
      <div className="mx-auto max-w-6xl border-x border-edge">
        <div className="grid lg:grid-cols-2 gap-12 px-6 py-16 lg:py-24">
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
              Serious about
              <br />
              Compliance.
            </h2>
            <p className="mt-6 text-muted-foreground text-sm leading-relaxed max-w-md">
              We are a registered carrier with direct interconnects. We handle
              the heavy lifting of regulatory requirements so you don't have to.
            </p>

            {/* Benefits Grid */}
            <div className="grid sm:grid-cols-3 gap-6 mt-12">
              <div>
                <div className="w-10 h-10 border border-edge rounded flex items-center justify-center mb-3">
                  <span className="text-lg">📉</span>
                </div>
                <h4 className="font-semibold text-sm mb-1">Cost Reduction</h4>
                <p className="text-[10px] text-muted-foreground leading-relaxed">
                  Save 60-80% on messaging bills by automatically routing
                  eligible messages to WhatsApp or RCS instead of SMS.
                </p>
              </div>
              <div>
                <div className="w-10 h-10 border border-edge rounded flex items-center justify-center mb-3">
                  <span className="text-lg">🌐</span>
                </div>
                <h4 className="font-semibold text-sm mb-1">Global Reach</h4>
                <p className="text-[10px] text-muted-foreground leading-relaxed">
                  Reach customers in 190+ countries. We handle the local carrier
                  quirks and regulatory headers for each region.
                </p>
              </div>
              <div>
                <div className="w-10 h-10 border border-edge rounded flex items-center justify-center mb-3">
                  <span className="text-lg">⚡</span>
                </div>
                <h4 className="font-semibold text-sm mb-1">
                  Developer Velocity
                </h4>
                <p className="text-[10px] text-muted-foreground leading-relaxed">
                  Stop maintaining six different API integrations. Ship your
                  actual product features faster with a set-and-forget pipe.
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Certifications Table */}
          <div className="flex items-center">
            <BorderFrame className="w-full">
              <div className="bg-card p-6">
                <div className="text-[10px] text-muted-foreground uppercase tracking-wider mb-4">
                  CERTIFICATIONS & MEMBERSHIPS
                </div>

                <div className="space-y-0 divide-y divide-edge">
                  <div className="flex items-center justify-between py-3">
                    <span className="text-sm">NECA OCN</span>
                    <span className="text-sm text-muted-foreground">124L</span>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <span className="text-sm">FCC Registration</span>
                    <span className="text-sm text-muted-foreground">
                      Registered IPES
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <span className="text-sm">Security</span>
                    <span className="text-sm text-muted-foreground">
                      SOC 2 Type II
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <span className="text-sm">GDPR</span>
                    <span className="text-sm text-blue-600">Compliant</span>
                  </div>
                </div>
              </div>
            </BorderFrame>
          </div>
        </div>
      </div>
    </section>
  )
}
