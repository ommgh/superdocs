import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { ArrowRightIcon } from '@phosphor-icons/react'

interface HeaderProps {
  className?: string
}

export function Header({ className }: HeaderProps) {
  return (
    <header className={cn('w-full border-b border-edge', className)}>
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6 border-x border-edge">
        <div className="flex items-center gap-8">
          <a href="/" className="flex items-center gap-2">
            <img src="/superdocs.svg" alt="Super Logo" className="h-32 w-32" />
          </a>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="/auth/login"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors hidden sm:block"
          >
            Sign-in
          </a>
          <a href="/auth/register">
            <Button size="lg" className="gap-2">
              Get Started
              <ArrowRightIcon />
            </Button>
          </a>
        </div>
      </div>
    </header>
  )
}
