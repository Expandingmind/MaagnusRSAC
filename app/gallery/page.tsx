import React from 'react'
import { Metadata } from 'next'
import { CTAButton } from '@/components/ui/CTAButton'

export const metadata: Metadata = {
  title: 'Project Gallery | Magnus R&S A/C',
  description: 'View our completed A/C installation, repair, and maintenance projects. Quality HVAC work throughout South Florida.',
}

const projects = [
  {
    id: 1,
    image: '/images/commercial.png',
    title: 'Commercial AC Installation',
    category: 'Commercial',
    description: 'Complete commercial HVAC system installation for office building'
  },
  {
    id: 2,
    image: '/images/emergency.png',
    title: 'Emergency AC Repair',
    category: 'Repair',
    description: 'Same-day emergency AC repair service'
  },
  {
    id: 3,
    image: '/images/maintenance-programs.png',
    title: 'AC Maintenance Service',
    category: 'Maintenance',
    description: 'Comprehensive bi-annual AC maintenance'
  },
  {
    id: 4,
    image: '/images/water-quality.png',
    title: 'Coil Cleaning Service',
    category: 'Maintenance',
    description: 'Professional evaporator and condenser coil cleaning'
  },
  {
    id: 5,
    image: '/images/commercial-2.svg',
    title: 'HVAC System Upgrade',
    category: 'Installation',
    description: 'High-efficiency AC unit replacement'
  },
  {
    id: 6,
    image: '/images/commercial-1.svg',
    title: 'New Construction Project',
    category: 'New Construction',
    description: 'Complete HVAC installation for new residential construction'
  },
  {
    id: 7,
    image: '/images/commercial-3.svg',
    title: 'Multi-Unit Installation',
    category: 'Commercial',
    description: 'Multi-zone AC system for commercial property'
  },
  {
    id: 8,
    image: '/images/van.jpeg',
    title: 'Service Call',
    category: 'Service',
    description: 'Professional on-site AC service and diagnostics'
  },
  {
    id: 9,
    image: '/images/team-photo.png',
    title: 'Team Project',
    category: 'Installation',
    description: 'Our professional team completing AC installation'
  }
]

export default function GalleryPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-brand-blue bg-noise py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="heading-xl mb-4 text-brand-black">
            Our Work Gallery
          </h1>
          <p className="text-xl text-brand-black/80 max-w-3xl mx-auto">
            Explore our completed A/C projects. Quality workmanship, professional results.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <article 
                key={project.id}
                className="group relative overflow-hidden rounded-none shadow-card bg-white border-2 border-brand-black transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Image */}
                <div className="relative h-64 md:h-72 overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-brand-black/0 group-hover:bg-brand-black/40 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white font-heading text-2xl uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      View Project
                    </span>
                  </div>
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-block bg-brand-blue text-brand-black font-semibold uppercase text-xs px-3 py-2 border-2 border-brand-black shadow-btn">
                    {project.category}
                  </span>
                </div>
                
                {/* Info Bar */}
                <div className="p-5 bg-brand-black border-t-2 border-brand-gold">
                  <h3 className="font-heading text-white uppercase text-lg tracking-wide mb-2">
                    {project.title}
                  </h3>
                  <p className="text-white/70 text-sm">
                    {project.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-brand-blue bg-noise">
        <div className="container mx-auto px-4 text-center">
          <h2 className="heading-lg mb-6 text-brand-black">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-brand-black/80 mb-8 max-w-2xl mx-auto">
            Let Magnus R&S A/C handle your next A/C project with the same quality and professionalism.
          </p>
          <div className="flex gap-4 justify-center">
            <CTAButton href="/contact" size="lg" variant="primary">
              Contact Us
            </CTAButton>
            <CTAButton href="tel:7862823563" size="lg" variant="secondary">
              Call (786) 282-3563
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  )
}

