'use client'

import React from 'react'
import Button from './Button'

interface CTAButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  fullWidth?: boolean
}

// Legacy wrapper for backward compatibility
export class CTAButton extends React.Component<CTAButtonProps> {
  render() {
    const { children, href, onClick, variant = 'primary', size = 'md', fullWidth, className } = this.props
    
    if (href) {
      return (
        <Button 
          as="a" 
          href={href} 
          variant={variant}
          size={size}
          fullWidth={fullWidth}
          className={className}
        >
          {children}
        </Button>
      )
    }
    
    return (
      <Button 
        onClick={onClick} 
        variant={variant}
        size={size}
        fullWidth={fullWidth}
        className={className}
      >
        {children}
      </Button>
    )
  }
}

