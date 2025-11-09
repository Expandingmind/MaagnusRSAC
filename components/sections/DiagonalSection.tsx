'use client'

import React from 'react'
import { clsx } from 'clsx'

interface DiagonalSectionProps {
  children: React.ReactNode
  direction?: 'left' | 'right'
  className?: string
}

export class DiagonalSection extends React.Component<DiagonalSectionProps> {
  render() {
    const { children, direction = 'right', className } = this.props
    
    return (
      <section className={clsx('relative py-16 md:py-24 bg-brand-off', className)}>
        <div 
          className={clsx(
            'absolute inset-y-0 w-[45%] hidden md:block',
            direction === 'right' ? 'right-0' : 'left-0'
          )}
          style={{
            clipPath: direction === 'right' 
              ? 'polygon(0 0, 100% 0, 100% 100%, 15% 100%)'
              : 'polygon(85% 0, 100% 0, 100% 100%, 0 100%)'
          }}
        >
          <div className="h-full w-full bg-brand-blue/20" />
        </div>
        <div className="container mx-auto px-4 relative">
          {children}
        </div>
      </section>
    )
  }
}

