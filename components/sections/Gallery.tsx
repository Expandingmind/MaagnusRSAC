'use client'

import React from 'react'
import { CTAButton } from '../ui/CTAButton'

interface GalleryItem {
  id: number
  image: string
  title: string
  category: string
}

export class Gallery extends React.Component {
  private projects: GalleryItem[] = [
    {
      id: 1,
      image: '/images/hvacroof.jpeg',
      title: 'Commercial AC Installation',
      category: 'Commercial'
    },
    {
      id: 2,
      image: '/images/acair.jpeg',
      title: 'Emergency AC Repair',
      category: 'Repair'
    },
    {
      id: 3,
      image: '/images/hvacon.jpeg',
      title: 'AC Maintenance Service',
      category: 'Maintenance'
    },
    {
      id: 4,
      image: '/images/AContheroof',
      title: 'Coil Cleaning Service',
      category: 'Maintenance'
    },
    {
      id: 5,
      image: '/images/acair.jpeg',
      title: 'HVAC System Upgrade',
      category: 'Installation'
    },
    {
      id: 6,
      image: '/images/hvacroof.jpeg',
      title: 'New Construction Project',
      category: 'New Construction'
    }
  ]
  
  render() {
    return (
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="heading-xl mb-4 uppercase font-bold text-brand-black">
              Our Projects
            </h2>
            <p className="text-lg text-brand-black/70 max-w-2xl mx-auto">
              See our professional A/C work in action. From residential installations to commercial projects, 
              we deliver quality results every time.
            </p>
          </div>
          
          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {this.projects.map((project) => (
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
                  <div className="absolute inset-0 bg-brand-black/0 group-hover:bg-brand-black/30 transition-all duration-300" />
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-block bg-brand-blue text-brand-black font-semibold uppercase text-xs px-3 py-1 border-2 border-brand-black">
                    {project.category}
                  </span>
                </div>
                
                {/* Title Bar */}
                <div className="p-4 bg-brand-black border-t-2 border-brand-gold">
                  <h3 className="font-heading text-white uppercase text-lg tracking-wide">
                    {project.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
          
          {/* CTA Button */}
          <div className="text-center mt-12">
            <p className="text-lg text-brand-black/70 mb-6">
              Want to see your project here? Let&apos;s get started today!
            </p>
            <div className="flex gap-4 justify-center">
              <CTAButton href="/contact" size="lg">
                Start Your Project
              </CTAButton>
              <CTAButton href="tel:7862823563" variant="secondary" size="lg">
                Call (786) 282-3563
              </CTAButton>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

