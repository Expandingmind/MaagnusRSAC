'use client'

import React from 'react'
import { clsx } from 'clsx'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  as?: 'button' | 'a'
  href?: string
  variant?: 'primary' | 'secondary' | 'ghost' | 'emergency'
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
  children: React.ReactNode
}

export default function Button({
  as = 'button',
  href,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className,
  children,
  ...rest
}: ButtonProps) {
  const base = 'inline-flex items-center justify-center font-semibold uppercase tracking-wide border-2 shadow-btn rounded-none transition will-change-transform hover:translate-y-[1px]'
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-5 py-3 text-sm md:text-base',
    lg: 'px-6 py-4 text-base md:text-lg'
  }
  
  const variants = {
    primary: 'bg-brand-blue text-brand-black border-brand-black hover:bg-brand-blue2',
    secondary: 'bg-white text-brand-black border-brand-black hover:bg-brand-gray',
    ghost: 'bg-transparent text-brand-black border-transparent hover:bg-black/5',
    emergency: 'bg-red-600 text-white border-red-700 hover:bg-red-700'
  }

  const classes = clsx(
    base,
    sizeClasses[size],
    variants[variant],
    fullWidth && 'w-full',
    className
  )

  if (as === 'a') {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  )
}

