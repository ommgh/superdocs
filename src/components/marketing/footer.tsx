import { cn } from '@/lib/utils'

interface FooterProps {
  className?: string
}

export function Footer({ className }: FooterProps) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={cn('w-full', className)}>
      <div className="mx-auto max-w-6xl border-x border-t border-edge">
        <div className="flex items-center justify-between px-6 py-5">
          <img
            src="/ag-logo.svg"
            alt="Agentify Logo"
            className="h-6 opacity-50"
          />
          <p className="text-xs text-muted-foreground">
            © {currentYear} Agentify. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
