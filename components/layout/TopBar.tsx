'use client'

import React from 'react'
import { Phone } from 'lucide-react'

export class TopBar extends React.Component {
  render() {
    return (
      <div className="hidden md:block fixed inset-x-0 top-0 z-50 bg-brand-blue text-brand-black border-b-2 border-brand-black">
        <div className="container mx-auto px-4">
          {/* Desktop Layout */}
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <div className="flex items-center">
              <a href="/" className="flex items-center gap-2">
                <span className="font-heading text-3xl uppercase tracking-tight text-brand-black">
                  MAGNUS R&S A/C
                </span>
              </a>
            </div>
            
            {/* Phone Number - Right */}
            <div className="flex items-center">
              <a 
                href="tel:7862823563" 
                className="flex items-center gap-2 text-xl font-bold hover:underline"
              >
                <Phone size={20} />
                <span>(786) 282-3563</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

