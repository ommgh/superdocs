import { BorderFrame } from './border-frame'
import { cn } from '@/lib/utils'

interface MetricsBarProps {
  className?: string
}

export function MetricsBar({ className }: MetricsBarProps) {
  return (
    <div className={cn('w-full border-y border-edge', className)}>
      <div className="mx-auto max-w-6xl border-x border-edge">
        <div className="flex items-center justify-center gap-12 px-6 py-8">
          {/* Bar Graph Visualization */}
          <BorderFrame>
            <div className="bg-card p-4 flex items-end gap-1 h-24 w-48">
              <div className="flex-1 bg-muted rounded-t h-[30%]" />
              <div className="flex-1 bg-muted rounded-t h-[45%]" />
              <div className="flex-1 bg-muted rounded-t h-[60%]" />
              <div className="flex-1 bg-muted rounded-t h-[80%]" />
              <div className="flex-1 bg-muted rounded-t h-[70%]" />
              <div className="flex-1 bg-foreground rounded-t h-[90%]" />
              <div className="flex-1 bg-muted rounded-t h-[75%]" />
              <div className="flex-1 bg-muted rounded-t h-[55%]" />
              <div className="flex-1 bg-muted rounded-t h-[40%]" />
              <div className="flex-1 bg-muted rounded-t h-[35%]" />
            </div>
          </BorderFrame>

          {/* Metrics */}
          <div className="flex items-center gap-12">
            <div className="text-center">
              <div className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1">
                AVG
              </div>
              <div className="text-2xl font-bold">14ms</div>
            </div>
            <div className="text-center">
              <div className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1">
                P95
              </div>
              <div className="text-2xl font-bold">19ms</div>
            </div>
            <div className="text-center">
              <div className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1">
                P99
              </div>
              <div className="text-2xl font-bold">21ms</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
