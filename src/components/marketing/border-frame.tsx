'use client'

import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface BorderFrameProps {
  children: ReactNode
  className?: string
}

export const BorderFrame = ({ children, className }: BorderFrameProps) => {
  return (
    <div className={cn('relative group p-1', className)}>
      <div className="w-full h-full overflow-hidden z-0">{children}</div>

      <div
        className="absolute -inset-1 border-[1.5px] z-10 border-accent-foreground/10!"
        aria-hidden="true"
      />

      <div className="absolute -inset-0.5 pointer-events-none transition-opacity duration-300 z-20">
        <div className="absolute -top-0.5 -left-0.5 w-4 h-4">
          <div className="absolute top-0 left-0 w-2 h-[0.5px] bg-accent-foreground corner-flicker" />
          <div className="absolute top-0 left-0 w-[0.5px] h-2 bg-accent-foreground corner-flicker" />
        </div>
        <div className="absolute -top-0.5 -right-0.5 w-4 h-4">
          <div className="absolute top-0 right-0 w-2 h-[0.5px] bg-accent-foreground corner-flicker" />
          <div className="absolute top-0 right-0 w-[0.5px] h-2 bg-accent-foreground corner-flicker" />
        </div>
        <div className="absolute -bottom-0.5 -left-0.5 w-4 h-4">
          <div className="absolute bottom-0 left-0 w-2 h-[0.5px] bg-accent-foreground corner-flicker" />
          <div className="absolute bottom-0 left-0 w-[0.5px] h-2 bg-accent-foreground corner-flicker" />
        </div>
        <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4">
          <div className="absolute bottom-0 right-0 w-2 h-[0.5px] bg-accent-foreground corner-flicker" />
          <div className="absolute bottom-0 right-0 w-[0.5px] h-2 bg-accent-foreground corner-flicker" />
        </div>
      </div>
    </div>
  )
}

export const BorderFrameDemo = () => {
  return (
    <div className="relative">
      <BorderFrame className="w-72">
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
          alt="Mountain landscape"
          className="w-full h-48 object-cover"
          loading="lazy"
          decoding="async"
        />
      </BorderFrame>
    </div>
  )
}
