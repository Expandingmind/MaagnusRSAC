'use client'

import { ServiceCard } from '../ui/ServiceCard'
import { services } from '@/content/services'

export function ServicesGrid() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h1 className="heading-xl text-center mb-12 uppercase font-bold text-brand-black">
          Our Services
        </h1>
        
        {/* Grid with all services - responsive columns */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8 md:mt-12 pt-8">
          {services.map((service) => (
            <ServiceCard
              key={service.slug}
              slug={service.slug}
              title={service.name}
              icon={service.icon}
              image={service.image}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

