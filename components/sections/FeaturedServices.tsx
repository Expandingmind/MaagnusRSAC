'use client'

import { ServiceCard } from '../ui/ServiceCard'
import { services } from '@/content/services'
import Button from '@/components/ui/Button'

export function FeaturedServices() {
  // Show only 6 featured services on homepage
  const featuredServices = services.slice(0, 6)
  
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="heading-xl mb-4 uppercase font-bold text-brand-black">
            Our Services
          </h2>
          <p className="text-lg text-brand-black/70 max-w-2xl mx-auto">
            Professional A/C and heating solutions for every need. From emergency repairs to preventive maintenance.
          </p>
        </div>
        
        {/* Grid showing 6 featured services */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-8 md:mt-12 pt-8">
          {featuredServices.map((service) => (
            <ServiceCard
              key={service.slug}
              slug={service.slug}
              title={service.name}
              icon={service.icon}
              image={service.image}
            />
          ))}
        </div>
        
        {/* View All Services Button */}
        <div className="text-center mt-12">
          <Button
            as="a"
            href="/services"
            variant="primary"
            size="lg"
          >
            View All {services.length} Services
          </Button>
        </div>
      </div>
    </section>
  )
}

