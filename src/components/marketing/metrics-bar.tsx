import LogoCloud from './logo-cloud'
import { cn } from '@/lib/utils'

interface MetricsBarProps {
  className?: string
}

export function TeamsDisplay({ className }: MetricsBarProps) {
  return (
    <div className={cn('w-full border-y border-edge', className)}>
      <div className="mx-auto max-w-6xl border-x border-edge">
        <LogoCloud />
      </div>
    </div>
  )
}
