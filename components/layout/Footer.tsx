'use client'

import React from 'react'
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube } from 'lucide-react'
import { CTAButton } from '../ui/CTAButton'

export class Footer extends React.Component {
  private quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Projects', href: '/gallery' },
    { label: 'FAQs', href: '/faqs' },
    { label: 'Contact', href: '/contact' }
  ]
  
  private services = [
    { label: 'All Services', href: '/services' },
    { label: 'AC Repair', href: '/air-conditioning-repair' },
    { label: 'AC Installation', href: '/ac-unit-replacement' },
    { label: 'Maintenance Plans', href: '/preventive-maintenance' },
    { label: 'Commercial HVAC', href: '/commercial-hvac' },
    { label: 'New Construction', href: '/new-construction' }
  ]
  
  render() {
    return (
      <footer className="bg-brand-black text-white">
        {/* CTA Banner */}
        <div className="bg-brand-blue text-brand-black py-12 border-b-4 border-brand-gold">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <h2 className="font-heading text-4xl md:text-5xl uppercase tracking-tight">
                Ready to Get Started?
              </h2>
              <div className="flex gap-4">
                <CTAButton href="/contact" variant="secondary">
                  Contact Us
                </CTAButton>
                <CTAButton href="tel:7862823563" variant="primary">
                  Call Now
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
        
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Quick Links */}
            <div>
              <h3 className="font-heading text-xl uppercase mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {this.quickLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-white/70 hover:text-brand-blue transition">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Services */}
            <div>
              <h3 className="font-heading text-xl uppercase mb-4">Services</h3>
              <ul className="space-y-2">
                {this.services.map((service) => (
                  <li key={service.href}>
                    <a href={service.href} className="text-white/70 hover:text-brand-blue transition">
                      {service.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Contact Info */}
            <div>
              <h3 className="font-heading text-xl uppercase mb-4">Contact</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Phone size={18} className="text-brand-blue mt-1" />
                  <div className="flex flex-col">
                    <a href="tel:7862823563" className="text-white/70 hover:text-brand-blue">
                      (786) 282-3563
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Mail size={18} className="text-brand-blue mt-1" />
                  <a href="mailto:guillermo@miamirsac.com" className="text-white/70 hover:text-brand-blue">
                    guillermo@miamirsac.com
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin size={18} className="text-brand-blue mt-1" />
                  <span className="text-white/70">
                    10755 SW 190 ST #61<br />
                    Miami, FL 33157
                  </span>
                </li>
              </ul>
            </div>
            
            {/* Hours */}
            <div>
              <h3 className="font-heading text-xl uppercase mb-4">Hours</h3>
              <div className="flex items-start gap-2">
                <Clock size={18} className="text-brand-blue mt-1" />
                <div className="text-white/70">
                  <p>Monday - Saturday: 9:00 AM - 6:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Social Links */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/50 text-sm">
                  © 2024 Magnus R&S A/C. All rights reserved.
                </p>
                <p className="text-white/50 text-sm mt-1">
                  License No. CAC1819076
                </p>
              </div>
              <div className="flex gap-4">
                <a href="#" className="text-white/50 hover:text-brand-blue transition">
                  <Facebook size={24} />
                </a>
                <a href="#" className="text-white/50 hover:text-brand-blue transition">
                  <Instagram size={24} />
                </a>
                <a href="#" className="text-white/50 hover:text-brand-blue transition">
                  <Youtube size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

