interface ServiceFAQ {
  question: string
  answer: string
}

const serviceFAQs: Record<string, ServiceFAQ[]> = {
  'ac-repair-replacement': [
    {
      question: 'What are common signs my AC needs repair?',
      answer: 'Warning signs include weak airflow, warm air, unusual noises, frequent cycling, high humidity, and water leaks. Don\'t wait - early repair prevents major breakdowns.'
    },
    {
      question: 'How quickly can you repair my AC?',
      answer: 'We offer same-day service for most AC repairs. Emergency repairs are available 24/7, with most issues resolved in a single visit.'
    },
    {
      question: 'Should I repair or replace my AC unit?',
      answer: 'If your AC is over 10 years old, requires frequent repairs, or uses R-22 refrigerant, replacement may be your best option. We provide honest recommendations based on your specific situation.'
    },
    {
      question: 'What size AC unit do I need for replacement?',
      answer: 'Proper sizing is crucial. We perform Manual J load calculations considering your home\'s size, insulation, windows, and orientation to recommend the perfect size.'
    },
    {
      question: 'Do you repair all AC brands?',
      answer: 'Yes! Our certified technicians are trained to repair all major AC brands including Carrier, Trane, Lennox, Rheem, Goodman, and more. We stock parts for most common models.'
    },
    {
      question: 'How long does AC replacement take?',
      answer: 'Most residential AC replacements are completed in one day (6-8 hours). Complex installations or ductwork modifications may require additional time.'
    }
  ],
  'air-conditioning-service': [
    {
      question: 'How often should I service my AC?',
      answer: 'We recommend bi-annual maintenance - once in spring before cooling season and once in fall. Regular service extends system life, improves efficiency, and prevents breakdowns.'
    },
    {
      question: 'What\'s included in AC maintenance service?',
      answer: 'Our comprehensive service includes filter replacement, coil cleaning, refrigerant check, electrical inspection, thermostat calibration, drain line cleaning, and performance testing.'
    },
    {
      question: 'Will regular maintenance improve my system efficiency?',
      answer: 'Yes! Regular maintenance significantly improves energy efficiency. Clean coils, proper refrigerant levels, and tuned components ensure maximum performance.'
    },
    {
      question: 'Can I perform AC maintenance myself?',
      answer: 'While you can change filters monthly, professional maintenance is essential. Our technicians have specialized tools and training to safely service electrical components and refrigerant systems.'
    },
    {
      question: 'What happens if you find problems during maintenance?',
      answer: 'We\'ll show you any issues found and provide repair recommendations. There\'s never pressure to repair immediately unless it\'s a safety concern.'
    }
  ],
  'coil-cleaning-service': [
    {
      question: 'How often should AC coils be cleaned?',
      answer: 'In humid climates, we recommend annual coil cleaning. Homes with pets, high dust, or coastal salt air may need cleaning twice yearly for optimal performance.'
    },
    {
      question: 'What are signs my coils need cleaning?',
      answer: 'Dirty coils cause reduced cooling, frozen evaporator coils, longer run times, and poor dehumidification. Visual inspection may show dirt, mold, or corrosion.'
    },
    {
      question: 'Can dirty coils damage my AC?',
      answer: 'Yes! Dirty coils force your system to work harder, leading to compressor failure, refrigerant leaks, and premature system replacement. Regular cleaning prevents serious damage.'
    },
    {
      question: 'What\'s the difference between evaporator and condenser coils?',
      answer: 'Evaporator coils (inside) absorb heat from your home. Condenser coils (outside) release heat outdoors. Both need regular cleaning for efficient heat transfer.'
    },
    {
      question: 'How long does coil cleaning take?',
      answer: 'Professional coil cleaning typically takes 1-2 hours. We use specialized cleaners and equipment to thoroughly clean without damaging delicate fins.'
    }
  ],
  'commercial-hvac': [
    {
      question: 'What commercial properties do you service?',
      answer: 'We service offices, retail stores, restaurants, warehouses, medical facilities, schools, and multi-family properties.'
    },
    {
      question: 'Do you offer commercial maintenance contracts?',
      answer: 'Yes! Our commercial maintenance contracts include scheduled service, priority repairs, discounted rates, and detailed service reports for compliance and budgeting.'
    },
    {
      question: 'Can you work outside business hours?',
      answer: 'Absolutely. We schedule commercial service during nights and weekends to minimize business disruption. Emergency service is available 24/7.'
    },
    {
      question: 'Do you service rooftop units?',
      answer: 'Yes, we service all types of commercial HVAC equipment including rooftop units (RTUs), split systems, chillers, and VRF systems.'
    },
    {
      question: 'Can you help reduce our commercial energy costs?',
      answer: 'Yes! We offer energy audits, efficiency upgrades, smart controls, and maintenance programs that can significantly reduce HVAC energy costs. Contact us for a free energy assessment.'
    }
  ],
  'preventive-maintenance': [
    {
      question: 'What\'s included in your maintenance plans?',
      answer: 'Our plans include bi-annual tune-ups, filter replacements, priority service, repair discounts, no overtime charges, and transferable coverage if you move.'
    },
    {
      question: 'How much do maintenance plans cost?',
      answer: 'We offer affordable maintenance plans for single and multi-system homes, as well as commercial plans. Contact us for a custom quote based on your specific needs.'
    },
    {
      question: 'Can maintenance really prevent breakdowns?',
      answer: 'Yes! Studies show regular maintenance prevents up to 95% of HVAC breakdowns. We catch small issues before they become expensive emergencies.'
    },
    {
      question: 'Are maintenance plan members priority customers?',
      answer: 'Absolutely! Plan members receive priority scheduling, guaranteed same-day service, and no emergency fees during regular hours.'
    },
    {
      question: 'Can I cancel my maintenance plan?',
      answer: 'Yes, our plans are flexible with no long-term contracts. You can cancel anytime, though most customers stay because of the value and peace of mind.'
    }
  ],
  'new-construction': [
    {
      question: 'Do you work with builders and contractors?',
      answer: 'Yes! We regularly partner with builders, contractors, and developers on new construction projects. We can work within your construction timeline and coordinate with other trades.'
    },
    {
      question: 'Can you help with HVAC system design?',
      answer: 'Absolutely! Our experienced team can design custom HVAC systems for your new construction project, ensuring proper sizing, efficiency, and compliance with all building codes.'
    },
    {
      question: 'What\'s the timeline for new construction HVAC installation?',
      answer: 'Timeline varies by project size and complexity. Typical residential installations take 2-5 days. We coordinate with your construction schedule to ensure timely completion.'
    },
    {
      question: 'Do you handle permits and inspections?',
      answer: 'Yes! We handle all necessary permits, ensure code compliance, and coordinate with building inspectors. Our installations meet or exceed all local building codes.'
    },
    {
      question: 'What warranty comes with new construction HVAC systems?',
      answer: 'New systems include manufacturer warranties (typically 5-10 years on parts) plus our installation warranty. We also offer extended warranties and maintenance plans for added protection.'
    },
    {
      question: 'Can you install eco-friendly or high-efficiency systems?',
      answer: 'Definitely! We specialize in energy-efficient HVAC systems including high-SEER AC units, heat pumps, and smart thermostats. We\'ll help you choose systems that maximize efficiency and qualify for available rebates.'
    }
  ]
}

export function getServiceFAQs(slug: string): ServiceFAQ[] {
  return serviceFAQs[slug] || []
}

export default serviceFAQs

