import { EyeIcon, HouseIcon, LockIcon } from '@phosphor-icons/react'
import { BorderFrame } from './border-frame'
import { cn } from '@/lib/utils'

interface ComplianceSectionProps {
  className?: string
}

export function ComplianceSection({ className }: ComplianceSectionProps) {
  return (
    <section className={cn('w-full border-y border-edge', className)}>
      <div className="mx-auto max-w-6xl border-x border-edge">
        <div className="grid lg:grid-cols-2 gap-12 px-6 py-16 ">
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl lg:text-5xl font-medium tracking-tight leading-tight">
              Built with
              <br />
              Security First
            </h2>
            <p className="mt-6 text-muted-foreground text-sm leading-relaxed max-w-md">
              Your API keys and generated code never leave your control. We use
              enterprise-grade encryption, isolated execution environments, and
              never store sensitive credentials in plain text.
            </p>
          </div>

          {/* Right Content - Certifications Table */}
          <div className="flex items-center">
            <BorderFrame className="w-full">
              <div className="bg-card p-6">
                <div className="text-[10px] text-muted-foreground uppercase tracking-wider mb-4">
                  SECURITY & COMPLIANCE
                </div>

                <div className="space-y-0 divide-y divide-edge">
                  <div className="flex items-center justify-between py-3">
                    <span className="text-sm">Data Encryption</span>
                    <span className="text-sm text-muted-foreground">
                      AES-256
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <span className="text-sm">Code Isolation</span>
                    <span className="text-sm text-muted-foreground">
                      Docker Sandboxed
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <span className="text-sm">API Keys</span>
                    <span className="text-sm text-muted-foreground">
                      Encrypted at Rest
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <span className="text-sm">Open Source</span>
                    <span className="text-sm text-blue-600">Auditable</span>
                  </div>
                </div>
              </div>
            </BorderFrame>
          </div>
        </div>
        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-3 gap-6 mt-12 px-6 py-16">
          <div>
            <div className="w-10 h-10 border border-edge flex items-center justify-center mb-3">
              <HouseIcon size={16} weight="fill" />
            </div>
            <h4 className="font-semibold text-sm mb-1">Self-Hosted Control</h4>
            <p className="text-[10px] text-muted-foreground leading-relaxed">
              Run everything locally on your machine. Your generated MCP servers
              and API credentials never touch our cloud unless you choose to
              deploy.
            </p>
          </div>
          <div>
            <div className="w-10 h-10 border border-edge flex items-center justify-center mb-3">
              <LockIcon size={16} weight="fill" />
            </div>
            <h4 className="font-semibold text-sm mb-1">Enterprise Ready</h4>
            <p className="text-[10px] text-muted-foreground leading-relaxed">
              Generate MCP servers for internal tools without exposing sensitive
              APIs. Perfect for enterprises with strict security requirements.
            </p>
          </div>
          <div>
            <div className="w-10 h-10 border border-edge flex items-center justify-center mb-3">
              <EyeIcon size={16} weight="fill" />
            </div>
            <h4 className="font-semibold text-sm mb-1">Full Transparency</h4>
            <p className="text-[10px] text-muted-foreground leading-relaxed">
              Inspect every line of generated code before deployment. No black
              boxes, no hidden dependencies—just clean, auditable MCP servers.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
