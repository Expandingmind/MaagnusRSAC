import React from 'react'
import Hero from '@/components/Hero'
import { FeaturedServices } from '@/components/sections/FeaturedServices'
import { ServiceTeaser } from '@/components/sections/ServiceTeaser'
import { WhyChooseUs } from '@/components/sections/WhyChooseUs'
import { Gallery } from '@/components/sections/Gallery'
import Reviews from '@/components/Reviews'
import { FAQAccordion } from '@/components/sections/FAQAccordion'
import { NextSteps } from '@/components/sections/NextSteps'

export default function HomePage() {
  return (
    <>
      {/* Hero with Lead Form */}
      <Hero />
      
      {/* Services Grid */}
      <FeaturedServices />
      
      {/* Service Teasers */}
      <ServiceTeaser
        title="Professional AC Repair Services"
        description={[
          'When your AC fails in the heat, you need fast, reliable service. Our expert HVAC technicians diagnose and repair all AC problems, restoring your comfort quickly.',
          'We service all major brands and models, arriving with fully-stocked service vehicles to complete most repairs in a single visit. From refrigerant leaks to compressor failures, we handle it all.',
          'Don\'t suffer through another hot day - our same-day service and honest assessments ensure you get back to cool comfort quickly and efficiently.'
        ]}
        images={['/images/magnuslogo.png', '/images/magnuslogo.png']}
        direction="right"
        ctaText="Schedule AC Repair"
        ctaHref="tel:7862823563"
      />
      
      <ServiceTeaser
        title="Comprehensive AC Maintenance"
        description={[
          'Regular AC maintenance is the key to avoiding breakdowns, improving system efficiency, and extending your system\'s lifespan in demanding climates.',
          'Our comprehensive maintenance service includes air filter replacement, condenser coil cleaning, refrigerant level checks, and complete system optimization to keep your AC running at peak performance.',
          'Join our maintenance plan for bi-annual service visits, priority scheduling, and repair discounts - protecting your HVAC investment while ensuring year-round comfort.'
        ]}
        images={['/images/hvacon.jpeg', '/images/hvacroof.jpeg']}
        direction="right"
        ctaText="Join Maintenance Plan"
        ctaHref="/preventive-maintenance"
      />
      
      {/* Why Choose Us */}
      <WhyChooseUs />
      
      {/* Gallery / Projects */}
      <Gallery />
      
      {/* Customer Reviews */}
      <Reviews />
      
      {/* FAQs */}
      <section className="py-16 md:py-24 bg-brand-gray">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-5xl md:text-7xl uppercase tracking-tight text-center mb-12">
            Frequently Asked Questions
          </h2>
          <FAQAccordion />
        </div>
      </section>
      
      {/* Next Steps */}
      <NextSteps />
    </>
  )
}

