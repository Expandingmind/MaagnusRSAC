'use client'

import React from 'react'
import { CTAButton } from '@/components/ui/CTAButton'
import { Shield, Award, Clock, Users, Wrench, HeartHandshake } from 'lucide-react'
import Image from 'next/image'

// Value Item Component
class ValueItem extends React.Component<{ icon: React.ReactNode; title: string; description: string }> {
  render() {
    const { icon, title, description } = this.props
    return (
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-blue rounded-full mb-4">
          {icon}
        </div>
        <h3 className="font-heading text-xl uppercase mb-2">{title}</h3>
        <p className="text-black/70">{description}</p>
      </div>
    )
  }
}

// Stats Component
class StatsItem extends React.Component<{ number: string; label: string }> {
  render() {
    const { number, label } = this.props
    return (
      <div className="text-center">
        <div className="font-heading text-5xl md:text-6xl text-brand-blue mb-2">{number}</div>
        <div className="text-lg text-black/70">{label}</div>
      </div>
    )
  }
}

// About Page Main Component
export default function AboutPage() {
  return (
    <div className="bg-brand-off">
      {/* Hero Section */}
      <section className="bg-brand-black text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-5xl md:text-7xl uppercase tracking-tight mb-6">
              About Magnus R&S A/C
            </h1>
            <p className="text-xl md:text-2xl text-white/80">
              Your Trusted HVAC Partner
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-heading text-4xl md:text-5xl uppercase tracking-tight mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-lg text-black/70">
                  <p>
                    Founded by Guillermo Rodriguez with a passion for excellence, Magnus R&S A/C has been serving the 
                    community with top-tier HVAC solutions. What started as a 
                    small team of dedicated technicians has grown into a trusted name in the industry.
                  </p>
                  <p>
                    We understand that your comfort at home or work is essential. That's why we've 
                    built our reputation on reliability, expertise, and exceptional customer service. 
                    Every member of our team is committed to delivering solutions that exceed expectations.
                  </p>
                  <p>
                    Under Guillermo's leadership, we proudly serve thousands of satisfied customers, providing everything from emergency repairs to complete 
                    system installations with the highest level of professionalism and care.
                  </p>
                </div>
              </div>
              <div className="relative h-[400px] bg-brand-gray rounded-lg overflow-hidden">
                <Image
                  src="/images/hvacroof.jpeg"
                  alt="Magnus R&S A/C Team"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <StatsItem number="2000+" label="Happy Customers" />
              <StatsItem number="15+" label="Years Experience" />
              <StatsItem number="24/7" label="Emergency Service" />
              <StatsItem number="100%" label="Satisfaction Rate" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-heading text-4xl md:text-5xl uppercase tracking-tight text-center mb-12">
              Our Core Values
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ValueItem
                icon={<Shield className="w-8 h-8 text-white" />}
                title="Trust & Integrity"
                description="We build lasting relationships through honest communication and transparent pricing."
              />
              <ValueItem
                icon={<Award className="w-8 h-8 text-white" />}
                title="Quality Service"
                description="Every job is completed to the highest standards with meticulous attention to detail."
              />
              <ValueItem
                icon={<Clock className="w-8 h-8 text-white" />}
                title="Timely Response"
                description="We value your time and always arrive promptly, ready to solve your HVAC needs."
              />
              <ValueItem
                icon={<Users className="w-8 h-8 text-white" />}
                title="Expert Team"
                description="Our licensed technicians are continuously trained on the latest HVAC technologies."
              />
              <ValueItem
                icon={<Wrench className="w-8 h-8 text-white" />}
                title="Reliable Solutions"
                description="We provide long-lasting fixes, not temporary patches, ensuring your peace of mind."
              />
              <ValueItem
                icon={<HeartHandshake className="w-8 h-8 text-white" />}
                title="Customer First"
                description="Your comfort and satisfaction are our top priorities in everything we do."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24 bg-brand-blue">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-4xl md:text-5xl uppercase tracking-tight mb-6">
              Our Mission
            </h2>
            <p className="text-xl md:text-2xl text-black/80 mb-8">
              To provide exceptional HVAC services that ensure comfort, 
              efficiency, and peace of mind. We're committed to being the most trusted and 
              reliable HVAC partner in our community.
            </p>
            <div className="bg-white/90 rounded-lg p-6 inline-block">
              <p className="text-sm text-black/60 mb-2">Fully Licensed & Insured</p>
              <p className="text-lg font-semibold">License No. CAC1819076</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-4xl md:text-5xl uppercase tracking-tight text-center mb-12">
              Why Choose Us?
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-brand-blue rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-heading text-xl uppercase mb-2">Licensed & Certified</h3>
                  <p className="text-black/70">
                    All our technicians are fully licensed, insured, and certified to handle 
                    any HVAC job safely and professionally.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-brand-blue rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-heading text-xl uppercase mb-2">Fast Response Times</h3>
                  <p className="text-black/70">
                    We know HVAC emergencies can't wait. That's why we offer 24/7 emergency 
                    service with rapid response times.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-brand-blue rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-heading text-xl uppercase mb-2">Transparent Pricing</h3>
                  <p className="text-black/70">
                    No hidden fees, no surprises. We provide clear, upfront pricing before 
                    any work begins.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-brand-blue rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-heading text-xl uppercase mb-2">Quality Guarantee</h3>
                  <p className="text-black/70">
                    We stand behind our work with comprehensive warranties and guarantees. 
                    Your satisfaction is our commitment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-brand-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-4xl md:text-5xl uppercase tracking-tight mb-6">
              Ready to Experience the Difference?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Contact us today for your HVAC needs. 
              Our team is ready to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton href="tel:7862823563" variant="secondary" size="lg">
                Call (786) 282-3563
              </CTAButton>
              <CTAButton href="/contact" variant="primary" size="lg">
                Contact Us
              </CTAButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

