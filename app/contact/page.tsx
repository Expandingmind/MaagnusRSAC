'use client'

import React, { useState, FormEvent } from 'react'
import { CTAButton } from '@/components/ui/CTAButton'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
  
  const [loading, setLoading] = useState(false)
  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          formType: 'Contact Form'
        }),
      })
      
      if (res.ok) {
        // Redirect to thank-you page
        const params = new URLSearchParams({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          service: formData.service,
          message: formData.message,
        })
        window.location.href = `/thank-you?${params.toString()}`
      } else {
        alert('There was an error submitting your request. Please try again or call us directly.')
      }
    } catch (error) {
      alert('There was an error submitting your request. Please try again or call us directly.')
    } finally {
      setLoading(false)
    }
  }
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h1 className="heading-xl text-center mb-8">
          Contact Us
        </h1>
        
        <p className="text-xl text-center text-black/70 mb-12 max-w-3xl mx-auto">
          Need A/C services? Fill out the form below or give us a call. 
          We typically respond within 30 minutes during business hours!
        </p>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
            <div className="bg-white rounded-xl2 shadow-card p-8">
            <h2 className="heading-md mb-6">Request Service</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-black/10 rounded-lg focus:border-brand-blue focus:outline-none"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-black/10 rounded-lg focus:border-brand-blue focus:outline-none"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                  Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-black/10 rounded-lg focus:border-brand-blue focus:outline-none"
                />
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm font-semibold mb-2">
                  Service Needed
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-black/10 rounded-lg focus:border-brand-blue focus:outline-none"
                >
                  <option value="">Select a service</option>
                  <option value="AC Repair">AC Repair</option>
                  <option value="AC Installation">AC Installation</option>
                  <option value="AC Maintenance">AC Maintenance</option>
                  <option value="Coil Cleaning">Coil Cleaning</option>
                  <option value="AC Unit Replacement">AC Unit Replacement</option>
                  <option value="Emergency Service">Emergency Service</option>
                  <option value="Commercial HVAC">Commercial HVAC</option>
                  <option value="New Construction">New Construction</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-black/10 rounded-lg focus:border-brand-blue focus:outline-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              
              <button
                type="submit"
                disabled={loading}
                className="w-full inline-flex items-center justify-center px-6 py-4 text-base md:text-lg font-semibold uppercase tracking-wide border-2 border-brand-black bg-brand-blue text-white rounded-none shadow-btn transition hover:translate-y-[1px] hover:bg-brand-blue2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Submitting...' : 'Submit Request'}
              </button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div>
            <div className="bg-brand-gray rounded-xl2 p-8 mb-8">
              <h2 className="heading-md mb-6">Contact Information</h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="text-brand-blue mt-1" size={20} />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <a href="tel:7862823563" className="text-brand-blue hover:underline">
                      (786) 282-3563
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Mail className="text-brand-blue mt-1" size={20} />
                  <div>
                    <p className="font-semibold">Email</p>
                    <a href="mailto:guillermo@miamirsac.com" className="text-brand-blue hover:underline">
                      guillermo@miamirsac.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <MapPin className="text-brand-blue mt-1" size={20} />
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-black/70">
                      10755 SW 190 ST #61<br />
                      Miami, FL 33157
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Clock className="text-brand-blue mt-1" size={20} />
                  <div>
                    <p className="font-semibold">Business Hours</p>
                    <p className="text-black/70">
                      Monday - Saturday: 9:00 AM - 6:00 PM<br />
                      Sunday: Closed<br />
                      <span className="text-brand-gold font-semibold">24/7 Emergency Service Available</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-brand-blue text-black rounded-xl2 p-8">
              <h3 className="font-heading text-2xl uppercase mb-4">
                Prefer to Call?
              </h3>
              <p className="mb-6">
                Speak with us directly! Our friendly team is ready to help with any questions.
              </p>
              <CTAButton href="tel:7862823563" variant="secondary" size="lg" fullWidth>
                Call (786) 282-3563
              </CTAButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

