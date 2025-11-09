'use client'

import React from 'react'
import { ChevronDown } from 'lucide-react'

interface FAQ {
  question: string
  answer: string
}

export class FAQAccordion extends React.Component {
  private faqs: FAQ[] = [
    {
      question: 'How often should I service my AC system?',
      answer: 'We recommend servicing your AC system twice a year - once in spring before cooling season and once in fall. Regular maintenance prevents breakdowns, improves efficiency, and extends system life by up to 40%.'
    },
    {
      question: 'Why is my AC not cooling properly?',
      answer: 'Common causes include dirty filters, low refrigerant, frozen coils, or thermostat issues. Our technicians can quickly diagnose and fix the problem. Don\'t wait - continuing to run a struggling AC can cause permanent damage.'
    },
    {
      question: 'Do you offer emergency AC repair?',
      answer: 'Yes! We offer 24/7 emergency AC repair services. When your AC fails during a heatwave, we\'ll respond quickly to restore your comfort. Same-day service is available for most repairs.'
    },
    {
      question: 'How do I know if I need AC replacement?',
      answer: 'Consider replacement if your AC is over 10-15 years old, requires frequent repairs, uses R-22 refrigerant, or isn\'t performing efficiently. We provide honest assessments and help you choose the best option.'
    },
    {
      question: 'What brands do you service?',
      answer: 'We service all major AC brands including Carrier, Trane, Lennox, Rheem, Goodman, York, Ruud, American Standard, and more. Our technicians are factory-trained and certified.'
    },
    {
      question: 'Can a new AC system improve efficiency?',
      answer: 'Absolutely! Modern high-efficiency AC systems perform significantly better than older units. We\'ll help you choose the best SEER rating for your needs.'
    },
    {
      question: 'What\'s included in your maintenance plans?',
      answer: 'Our maintenance plans include bi-annual tune-ups, filter replacements, coil cleaning, priority service, repair discounts, and no overtime charges. Contact us for plan details.'
    },
    {
      question: 'How long does AC installation take?',
      answer: 'Most residential AC installations are completed in 6-8 hours. We handle everything from removing your old unit to testing the new system. Complex installations may take longer, but we\'ll always provide a timeline upfront.'
    },
    {
      question: 'Do you offer financing for new AC systems?',
      answer: 'Yes! We offer flexible financing options with approved credit, including 0% interest plans. We also help you apply for available rebates and tax credits to make your new system more affordable.'
    },
    {
      question: 'What areas do you service?',
      answer: 'We proudly serve your local area. Call to confirm service in your specific location.'
    }
  ]
  
  render() {
    return (
      <div className="max-w-3xl mx-auto">
        {this.faqs.map((faq, index) => (
          <details key={index} className="group border-b border-black/10">
            <summary className="cursor-pointer flex justify-between items-center py-4 text-lg font-semibold hover:text-brand-blue transition">
              {faq.question}
              <ChevronDown className="ml-4 transition-transform group-open:rotate-180" />
            </summary>
            <div className="pb-4">
              <p className="text-black/70 text-[17px] leading-7">
                {faq.answer}
              </p>
            </div>
          </details>
        ))}
      </div>
    )
  }
}

