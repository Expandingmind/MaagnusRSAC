import { ServicesGrid } from '@/components/sections/ServicesGrid'
import { CTAButton } from '@/components/ui/CTAButton'
import { Phone } from 'lucide-react'

export default function ServicesPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-brand-blue bg-noise py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="heading-xl mb-4 text-brand-black">
            Complete A/C Services
          </h1>
          <p className="text-xl text-brand-black/80 max-w-3xl mx-auto mb-8">
            From emergency repairs to maintenance programs and new construction, we offer comprehensive air conditioning solutions 
            for residential and commercial properties.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <CTAButton href="tel:7862823563" size="lg">
              <Phone className="inline-block mr-2" size={20} />
              Call (786) 282-3563
            </CTAButton>
            <CTAButton href="/contact" variant="secondary" size="lg">
              Contact Us
            </CTAButton>
          </div>
        </div>
      </section>

      {/* All Services Grid */}
      <ServicesGrid />

      {/* CTA Section */}
      <section className="bg-brand-black py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="heading-lg mb-4 text-white">
            Need A/C Service?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Available 24/7 for emergencies. Licensed, insured, and ready to help.
          </p>
          <CTAButton href="/contact" size="lg">
            Schedule Service Today
          </CTAButton>
        </div>
      </section>
    </div>
  )
}

