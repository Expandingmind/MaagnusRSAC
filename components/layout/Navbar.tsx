'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown } from 'lucide-react'
import Button from '@/components/ui/Button'

export function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'AC Repair', href: '/air-conditioning-repair' },
    { label: 'Projects', href: '/gallery' },
    { label: 'FAQs', href: '/faqs' },
    { label: 'Contact', href: '/contact' }
  ]
  
  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)
  
  // Close menu on route change
  useEffect(() => {
    closeMenu()
  }, [pathname])
  
  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        closeMenu()
      }
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen])
  
  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])
  
  return (
    <>
      <nav className="fixed inset-x-0 top-0 md:top-[3.5rem] z-40 bg-white border-b-2 border-brand-black">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-center justify-between h-16">
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`
                      font-semibold uppercase text-sm tracking-wide transition-colors
                      ${isActive 
                        ? 'text-brand-blue border-b-2 border-brand-gold' 
                        : 'text-brand-black hover:text-brand-blue'
                      }
                    `}
                  >
                    {item.label}
                  </Link>
                )
              })}
            </div>
            
            {/* Desktop Right Side Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <Button
                as="a"
                href="/apply"
                variant="secondary"
                size="sm"
              >
                Join Our Team
              </Button>
              <Button
                as="a"
                href="/contact"
                variant="emergency"
                size="sm"
              >
                Emergency AC Service
              </Button>
            </div>
            
            {/* Mobile Logo and Hamburger */}
            <div className="md:hidden flex items-center justify-between w-full">
              <Link href="/" className="flex items-center gap-2">
                <span className="font-heading text-2xl uppercase tracking-tight text-brand-black">
                  MAGNUS R&S A/C
                </span>
              </Link>
              
              <button
                type="button"
                className="h-10 w-10 grid place-items-center rounded-md border-2 border-brand-black bg-white hover:bg-brand-blue/10 transition-colors"
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
                aria-controls="mobile-menu"
                aria-expanded={isOpen ? 'true' : 'false'}
                onClick={toggleMenu}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Mobile Menu Panel and Backdrop */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="md:hidden fixed inset-0 z-40 bg-black/50" 
            onClick={closeMenu}
            aria-hidden="true"
          />
          
          {/* Mobile Menu Panel */}
          <div
            id="mobile-menu"
            role="dialog"
            aria-label="Navigation menu"
            className="md:hidden fixed inset-x-0 top-16 z-50 bg-white border-b-2 border-brand-black shadow-lg transform transition-transform duration-200 ease-out"
          >
            <div className="px-4 py-4 space-y-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`
                      block px-3 py-3 font-semibold uppercase text-sm tracking-wide transition-colors border-b border-brand-black/10
                      ${isActive 
                        ? 'text-brand-blue bg-brand-gold/10' 
                        : 'text-brand-black hover:bg-brand-blue/5'
                      }
                    `}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </Link>
                )
              })}
              
              {/* Mobile CTA Buttons */}
              <div className="pt-4 space-y-2">
                <Button
                  as="a"
                  href="/apply"
                  variant="secondary"
                  fullWidth
                  onClick={closeMenu}
                >
                  Join Our Team
                </Button>
                <Button
                  as="a"
                  href="/contact"
                  variant="emergency"
                  fullWidth
                  onClick={closeMenu}
                >
                  Emergency AC Service
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}

