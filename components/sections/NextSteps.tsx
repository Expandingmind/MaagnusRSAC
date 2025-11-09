'use client'

import React from 'react'
import { Phone, Calendar, Info } from 'lucide-react'

interface Step {
  icon: React.ReactNode
  label: string
  description: string
  href: string
}

export class NextSteps extends React.Component {
  private steps: Step[] = [
    {
      icon: <Phone className="h-12 w-12" />,
      label: 'Contact Us',
      description: 'Call or message us today',
      href: '/contact'
    },
    {
      icon: <Calendar className="h-12 w-12" />,
      label: 'Get Scheduled',
      description: 'Fast, convenient appointment times',
      href: '/contact'
    },
    {
      icon: <Info className="h-12 w-12" />,
      label: 'Learn More',
      description: 'See our work and process',
      href: '/watch-videos'
    }
  ]
  
  render() {
    return (
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="heading-lg text-center mb-12">
            What&apos;s Next?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {this.steps.map((step, index) => (
              <a
                key={index}
                href={step.href}
                className="group text-center p-8 rounded-xl2 border-2 border-black/10 hover:border-brand-blue hover:shadow-card transition-all"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-brand-blue/10 rounded-full mb-4 group-hover:bg-brand-blue/20 transition">
                  {step.icon}
                </div>
                <h3 className="font-heading text-2xl uppercase mb-2">
                  {step.label}
                </h3>
                <p className="text-black/60">
                  {step.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>
    )
  }
}

