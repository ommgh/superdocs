import { BorderFrame } from './border-frame'
import { cn } from '@/lib/utils'

interface FeaturesSectionProps {
  className?: string
}

export function FeaturesSection({ className }: FeaturesSectionProps) {
  return (
    <section className={cn('w-full', className)}>
      <div className="mx-auto max-w-6xl border-x border-edge">
        <div className="grid md:grid-cols-2 gap-6 px-6 pb-12">
          {/* Feature 1 - Unified Messaging API */}
          <BorderFrame>
            <div className="bg-card p-6">
              <h3 className="font-semibold text-base mb-2">
                Unified Messaging API
              </h3>
              <p className="text-xs text-muted-foreground mb-6">
                One integration sends SMS, WhatsApp, and RCS with a single
                request.
              </p>

              <div className="border border-edge rounded p-4">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-medium">
                    New messaging application
                  </span>
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-muted-foreground/30" />
                    <div className="w-2 h-2 rounded-full bg-muted-foreground/30" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className="text-[10px] text-muted-foreground uppercase mb-1">
                      SERVICE PROVIDER
                    </div>
                    <div className="border border-edge rounded px-2 py-1.5 text-xs">
                      Sent API
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] text-muted-foreground uppercase mb-1">
                      ENVIRONMENT
                    </div>
                    <div className="flex gap-1">
                      <span className="bg-muted px-2 py-1.5 rounded text-xs">
                        Sandbox
                      </span>
                      <span className="border border-edge px-2 py-1.5 rounded text-xs">
                        Production
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="text-[10px] text-muted-foreground uppercase mb-1">
                    DEFAULT CHANNEL SET
                  </div>
                  <div className="flex gap-1">
                    <span className="bg-primary text-primary-foreground px-2 py-1 rounded text-[10px]">
                      WhatsApp
                    </span>
                    <span className="bg-muted px-2 py-1 rounded text-[10px]">
                      SMS
                    </span>
                    <span className="bg-muted px-2 py-1 rounded text-[10px]">
                      RCS
                    </span>
                  </div>
                </div>

                <div className="bg-muted/50 rounded p-3 font-mono text-[10px] leading-relaxed">
                  <div className="text-blue-600">"to":</div>
                  <div className="text-green-600 pl-2">"+1 555 8123",</div>
                  <div className="text-blue-600">"template":</div>
                  <div className="text-green-600 pl-2">
                    "order_confirmation",
                  </div>
                  <div className="text-blue-600">"channels":</div>
                  <div className="text-green-600 pl-2">
                    ["whatsapp", "sms", "rcs"]
                  </div>
                </div>

                <div className="mt-3 text-right">
                  <span className="text-[10px] text-muted-foreground hover:text-foreground cursor-pointer">
                    View endpoint docs →
                  </span>
                </div>
              </div>
            </div>
          </BorderFrame>

          {/* Feature 2 - Intelligent Abstraction Layer */}
          <BorderFrame>
            <div className="bg-card p-6">
              <h3 className="font-semibold text-base mb-2">
                Intelligent Abstraction Layer
              </h3>
              <p className="text-xs text-muted-foreground mb-6">
                Your app talks to Sent. Sent handles providers, carriers, and
                channel quirks.
              </p>

              <div className="border border-edge rounded p-4">
                <div className="text-[10px] text-muted-foreground uppercase mb-4">
                  DELIVERY PATH (CONTACT)
                </div>

                <div className="flex items-center justify-between gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-1">
                      <span className="text-xs">TJ</span>
                    </div>
                    <span className="text-[10px] font-medium">Tuki Joshua</span>
                    <span className="text-[9px] text-muted-foreground">
                      +234 881...
                    </span>
                    <span className="text-[9px] text-green-600 bg-green-100 px-1.5 py-0.5 rounded mt-1">
                      Verified
                    </span>
                  </div>

                  <div className="flex items-center gap-2 flex-1">
                    <div className="h-px flex-1 bg-edge" />
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                      <span className="text-xs">✦</span>
                    </div>
                    <div className="h-px flex-1 bg-edge" />
                  </div>

                  <div className="w-12 h-12 border border-edge rounded flex items-center justify-center">
                    <span className="text-lg">📱</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-edge space-y-2">
                  <div className="flex items-center justify-between text-[10px]">
                    <div className="flex items-center gap-2">
                      <span>✓</span>
                      <span>Normalizes to E.164</span>
                    </div>
                    <span className="text-muted-foreground">
                      +2348812345678
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-[10px]">
                    <div className="flex items-center gap-2">
                      <span>✓</span>
                      <span>Geolex</span>
                    </div>
                    <span className="bg-muted px-1.5 py-0.5 rounded">
                      MTN – NG
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-[10px]">
                    <div className="flex items-center gap-2">
                      <span>✓</span>
                      <span>Best Channel</span>
                    </div>
                    <span className="bg-green-100 text-green-600 px-1.5 py-0.5 rounded">
                      WhatsApp (MTU)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </BorderFrame>

          {/* Feature 3 - Clean API Design */}
          <BorderFrame>
            <div className="bg-card p-6">
              <h3 className="font-semibold text-base mb-2">Clean API Design</h3>
              <p className="text-xs text-muted-foreground mb-6">
                Minimal, predictable methods that feel natural in any language.
              </p>

              <div className="bg-muted/50 rounded p-4 font-mono text-[11px] leading-relaxed">
                <div>
                  <span className="text-blue-600">const</span> msg ={' '}
                  <span className="text-blue-600">await</span>{' '}
                  <span className="text-purple-600">sent</span>.
                  <span className="text-foreground">messages</span>.
                  <span className="text-foreground">send</span>({'{'}
                </div>
                <div className="pl-4">
                  <span className="text-foreground">to</span>:{' '}
                  <span className="text-green-600">'+15558123'</span>,
                </div>
                <div className="pl-4">
                  <span className="text-foreground">template</span>:{' '}
                  <span className="text-green-600">'welcome_new_user'</span>,
                </div>
                <div className="pl-4">
                  <span className="text-foreground">data</span>: {'{'}{' '}
                  <span className="text-foreground">name</span>:{' '}
                  <span className="text-green-600">'Amare'</span> {'}'},
                </div>
                <div className="pl-4">
                  <span className="text-foreground">channels</span>: [
                  <span className="text-green-600">'whatsapp'</span>,{' '}
                  <span className="text-green-600">'sms'</span>]
                </div>
                <div>{'}'});</div>
              </div>

              <div className="flex gap-2 mt-4">
                <span className="bg-primary text-primary-foreground px-2 py-1 rounded text-[10px]">
                  JavaScript
                </span>
                <span className="bg-muted px-2 py-1 rounded text-[10px]">
                  Python
                </span>
                <span className="bg-muted px-2 py-1 rounded text-[10px]">
                  Go
                </span>
                <span className="bg-muted px-2 py-1 rounded text-[10px]">
                  Java
                </span>
                <span className="bg-muted px-2 py-1 rounded text-[10px]">
                  C#
                </span>
              </div>
            </div>
          </BorderFrame>

          {/* Feature 4 - Transparent Message Lifecycle */}
          <BorderFrame>
            <div className="bg-card p-6">
              <h3 className="font-semibold text-base mb-2">
                Transparent Message Lifecycle
              </h3>
              <p className="text-xs text-muted-foreground mb-6">
                Track every message from request to delivery with full
                visibility.
              </p>

              <div className="border border-edge rounded p-4">
                {/* Status Timeline */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="text-[10px]">RECEIVED</span>
                  </div>
                  <div className="h-px flex-1 bg-green-500 mx-2" />
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="text-[10px]">QUEUED</span>
                  </div>
                  <div className="h-px flex-1 bg-green-500 mx-2" />
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="text-[10px]">SENT</span>
                  </div>
                  <div className="h-px flex-1 bg-green-500 mx-2" />
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="text-[10px]">DELIVERED</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between text-[10px] pb-2 border-b border-edge">
                    <div className="flex items-center gap-2">
                      <span className="text-muted-foreground">ID:</span>
                      <span className="font-mono">msg_8GT89...</span>
                    </div>
                    <span className="bg-green-100 text-green-600 px-1.5 py-0.5 rounded">
                      Delivered
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-[10px]">
                    <span>Provider responded 200 OK</span>
                    <span className="text-muted-foreground">00:23:54</span>
                  </div>
                  <div className="flex items-center justify-between text-[10px]">
                    <span>Fallback not required (4k active)</span>
                    <span className="text-muted-foreground">00:21:05</span>
                  </div>
                  <div className="flex items-center justify-between text-[10px]">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      <span>User read message</span>
                    </div>
                    <span className="text-muted-foreground">00:12:28</span>
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
