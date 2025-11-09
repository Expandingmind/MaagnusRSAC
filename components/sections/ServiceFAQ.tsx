'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FAQ {
  question: string
  answer: string
}

interface ServiceFAQProps {
  faqs: FAQ[]
  serviceName: string
}

export default function ServiceFAQ({ faqs, serviceName }: ServiceFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="max-w-3xl mx-auto">
      {faqs.map((faq, index) => (
        <div key={index} className="mb-4 border-2 border-brand-black bg-white">
          <button
            className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-brand-blue/5 transition-colors"
            onClick={() => toggleFAQ(index)}
            aria-expanded={openIndex === index}
          >
            <h3 className="font-bold text-lg pr-4">{faq.question}</h3>
            <ChevronDown 
              className={`flex-shrink-0 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
              size={24}
            />
          </button>
          
          {openIndex === index && (
            <div className="px-6 pb-4 pt-2 border-t border-brand-black/10">
              <p className="text-brand-black/80">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
      
      {/* FAQ Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map(faq => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer
              }
            }))
          })
        }}
      />
    </div>
  )
}

