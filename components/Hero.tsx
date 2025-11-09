'use client'

import Image from 'next/image'
import { useState } from 'react'
import Button from '@/components/ui/Button'

export default function Hero() {
  const [loading, setLoading] = useState(false)
  const [ok, setOk] = useState<null | boolean>(null)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setOk(null)
    const form = e.currentTarget
    const fd = new FormData(form)
    
    // Convert FormData to JSON for the API
    const data = Object.fromEntries(fd.entries())
    
    const res = await fetch('/api/quote', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }).catch(() => null)
    
    setLoading(false)
    
    if (res?.ok) {
      // Redirect to thank-you page with form data
      const params = new URLSearchParams({
        name: data.name as string || '',
        phone: data.phone as string || '',
        email: data.email as string || '',
        service: data.service as string || '',
        address: data.address as string || '',
        message: data.message as string || '',
      })
      window.location.href = `/thank-you?${params.toString()}`
    } else {
      setOk(false)
    }
  }

  return (
    <section className="relative isolate">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/A/CIMAGE.png"
          alt="Professional HVAC technician servicing air conditioning unit"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Overlay: left-to-right gradient + subtle noise */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/20" />
        <div className="absolute inset-0 mix-blend-overlay bg-noise opacity-[.08]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left: Copy / CTAs */}
          <div className="text-white">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-blue/20 ring-1 ring-brand-blue/30 text-brand-blue px-3 py-1 text-sm font-semibold">
              ★ Fast & Reliable AC Service
            </span>

            <h1 className="mt-4 font-heading uppercase leading-[0.95] tracking-tight text-5xl sm:text-6xl">
              Beat the <span className="underline decoration-brand-gold decoration-4 underline-offset-4">Heat</span> with
              <br /> <span className="text-brand-blue">Magnus R&S A/C</span>
            </h1>

            <p className="mt-5 max-w-xl text-lg text-white/90">
              Licensed • Insured • Professional Service. From AC repairs to installations and maintenance, we handle all your air conditioning needs with expertise and care.
            </p>

            {/* Trust row */}
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm">
              <div className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-2 ring-1 ring-white/20">
                <span className="text-brand-gold">★★★★★</span>
                <span className="text-white/80">5.0 from 2000+ customers</span>
              </div>
              <div className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-2 ring-1 ring-white/20">
                <span className="text-brand-blue">Licensed & Insured</span>
                <span className="text-white/80">HVAC Experts</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <Button 
                as="a" 
                href="tel:7862823563" 
                variant="secondary"
                className="!bg-white/10 !text-white !border-white hover:!bg-white/20"
              >
                Call (786) 282-3563
              </Button>
              <Button 
                as="a" 
                href="#quote" 
                variant="primary"
              >
                Get Started
              </Button>
            </div>

            {/* Small proof strip */}
            <p className="mt-5 text-sm text-white/75">
              Fast Response • Same-day service • 24/7 Emergency • Fully insured
            </p>
          </div>

          {/* Right: Form */}
          <div id="quote" className="lg:justify-self-end w-full">
            <form
              onSubmit={onSubmit}
              className="rounded-none bg-white/95 backdrop-blur px-5 sm:px-6 py-6 shadow-card ring-1 ring-brand-black/10 max-w-md ml-auto"
            >
              <div className="pb-4 border-b border-brand-gold/30 mb-4">
                <h3 className="font-heading uppercase text-2xl text-brand-black">
                  Request Service
                </h3>
                <p className="text-sm text-brand-black/70">
                  Answer a few quick questions—we&apos;ll contact you today.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <label className="block">
                  <span className="text-sm font-medium text-brand-black">Full Name*</span>
                  <input 
                    name="name" 
                    required 
                    className="mt-1 w-full rounded-md border border-brand-black/20 px-3 py-2 outline-none focus:ring-2 focus:ring-brand-blue" 
                  />
                </label>

                <div className="grid sm:grid-cols-2 gap-4">
                  <label className="block">
                    <span className="text-sm font-medium text-brand-black">Phone*</span>
                    <input 
                      name="phone" 
                      required 
                      inputMode="tel" 
                      className="mt-1 w-full rounded-md border border-brand-black/20 px-3 py-2 outline-none focus:ring-2 focus:ring-brand-blue" 
                    />
                  </label>
                  <label className="block">
                    <span className="text-sm font-medium text-brand-black">Email</span>
                    <input 
                      name="email" 
                      type="email" 
                      className="mt-1 w-full rounded-md border border-brand-black/20 px-3 py-2 outline-none focus:ring-2 focus:ring-brand-blue" 
                    />
                  </label>
                </div>

                <label className="block">
                  <span className="text-sm font-medium text-brand-black">Service Needed</span>
                  <select 
                    name="service" 
                    className="mt-1 w-full rounded-md border border-brand-black/20 px-3 py-2 outline-none focus:ring-2 focus:ring-brand-blue"
                  >
                    <option>AC Repair</option>
                    <option>AC Installation</option>
                    <option>AC Maintenance</option>
                    <option>Coil Cleaning</option>
                    <option>AC Unit Replacement</option>
                    <option>Emergency Service</option>
                    <option>Commercial HVAC</option>
                    <option>New Construction</option>
                    <option>Other</option>
                  </select>
                </label>

                <label className="block">
                  <span className="text-sm font-medium text-brand-black">Address (City/ZIP)</span>
                  <input 
                    name="address" 
                    className="mt-1 w-full rounded-md border border-brand-black/20 px-3 py-2 outline-none focus:ring-2 focus:ring-brand-blue" 
                  />
                </label>

                <label className="block">
                  <span className="text-sm font-medium text-brand-black">Notes</span>
                  <textarea 
                    name="notes" 
                    rows={3} 
                    className="mt-1 w-full rounded-md border border-brand-black/20 px-3 py-2 outline-none focus:ring-2 focus:ring-brand-blue" 
                  />
                </label>

                <Button
                  disabled={loading}
                  variant="primary"
                  fullWidth
                  className="mt-1"
                >
                  {loading ? 'Sending…' : 'Request Estimate'}
                </Button>

                {ok === true && (
                  <p className="text-sm text-emerald-600">Thanks! We got it—someone will reach out shortly.</p>
                )}
                {ok === false && (
                  <p className="text-sm text-red-600">Something went wrong. Please call us or try again.</p>
                )}
              </div>

              {/* gold accent frame */}
              <div className="pointer-events-none absolute inset-0 rounded-none ring-1 ring-brand-gold/60"></div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

