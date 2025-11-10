export interface Service {
  slug: string
  name: string
  icon: string
  image: string
  heroImage: string
  summary: string
  bullets: string[]
  ctaLabel: string
  gallery?: string[]
  problem?: string
  solution?: string
  process?: Array<{
    step: number
    title: string
    description: string
  }>
  benefits?: Array<{
    icon: string
    title: string
    description: string
  }>
  beforeImage?: string
  afterImage?: string
}

export const services: Service[] = [
  {
    slug: 'air-conditioning-repair',
    name: 'Air Conditioning Repair',
    icon: 'wrench',
    image: '/images/emergency.png',
    heroImage: '/images/emergency.png',
    summary: "Don't let a malfunctioning AC ruin your day! Our fast, professional air conditioning repair services will have your system running smoothly, restoring comfort to your space in no time.",
    bullets: [
      'Same-day emergency repairs',
      'All AC brands and models',
      'Honest assessments',
      'Licensed and insured technicians'
    ],
    ctaLabel: 'Schedule AC Repair'
  },
  {
    slug: 'air-conditioning-service',
    name: 'Air Conditioning Service',
    icon: 'shield',
    image: '/images/maintenance-programs.png',
    heroImage: '/images/maintenance-programs.png',
    summary: 'Keep your AC system in top shape with our comprehensive air conditioning maintenance services. Regular servicing improves efficiency, extends lifespan, and prevents breakdowns.',
    bullets: [
      'Comprehensive system inspection',
      'Filter replacement and cleaning',
      'Refrigerant level check',
      'Performance optimization'
    ],
    ctaLabel: 'Book Maintenance'
  },
  {
    slug: 'coil-cleaning-service',
    name: 'Coil Cleaning Service',
    icon: 'droplet',
    image: '/images/water-quality.png',
    heroImage: '/images/water-quality.png',
    summary: 'Professional coil cleaning services to maximize your AC efficiency and air quality. Clean coils mean better cooling and optimal system performance.',
    bullets: [
      'Deep cleaning of evaporator and condenser coils',
      'Improved system efficiency',
      'Better air quality',
      'Extended equipment life'
    ],
    ctaLabel: 'Schedule Coil Cleaning'
  },
  {
    slug: 'ac-unit-replacement',
    name: 'AC Unit Replacement',
    icon: 'refresh',
    image: '/images/pipelining.png',
    heroImage: '/images/pipelining.png',
    summary: 'Upgrade to a new, energy-efficient AC unit with our professional replacement services. Enjoy superior comfort and improved system efficiency.',
    bullets: [
      'Energy-efficient models',
      'Professional removal and installation',
      'Financing options available',
      'Extended warranty options'
    ],
    ctaLabel: 'Contact Us'
  },
  {
    slug: 'regular-service-call',
    name: 'Regular Service Call',
    icon: 'calendar',
    image: '/images/maintenance-programs.png',
    heroImage: '/images/maintenance-programs.png',
    summary: 'Scheduled maintenance and service calls during regular business hours for non-emergency HVAC needs.',
    bullets: [
      'Monday-Saturday 9am-6pm',
      'Scheduled appointments',
      'Comprehensive diagnostics',
      'Professional service'
    ],
    ctaLabel: 'Schedule Service'
  },
  {
    slug: 'commercial-hvac',
    name: 'Commercial HVAC Services',
    icon: 'building',
    image: '/images/commercial.png',
    heroImage: '/images/commercial.png',
    summary: 'Comprehensive commercial HVAC solutions for businesses, offices, and industrial facilities.',
    bullets: [
      'Commercial AC installation',
      'Preventive maintenance contracts',
      'Emergency repair services',
      'Energy efficiency upgrades'
    ],
    ctaLabel: 'Contact Us'
  },
  {
    slug: 'duct-cleaning',
    name: 'Duct Cleaning',
    icon: 'wind',
    image: '/images/drain-cleaning.png',
    heroImage: '/images/drain-cleaning.png',
    summary: 'Professional duct cleaning services to improve air quality and system efficiency throughout your property.',
    bullets: [
      'Complete duct system cleaning',
      'Improved indoor air quality',
      'Reduced allergens and dust',
      'Enhanced system efficiency'
    ],
    ctaLabel: 'Schedule Duct Cleaning'
  },
  {
    slug: 'thermostat-installation',
    name: 'Smart Thermostat Installation',
    icon: 'settings',
    image: '/images/bathroom.png',
    heroImage: '/images/bathroom.png',
    summary: 'Upgrade to a smart thermostat for better comfort control and energy savings.',
    bullets: [
      'Smart thermostat installation',
      'WiFi-enabled controls',
      'Energy usage monitoring',
      'Programming assistance'
    ],
    ctaLabel: 'Upgrade Thermostat'
  },
  {
    slug: 'preventive-maintenance',
    name: 'Preventive Maintenance Plans',
    icon: 'calendar',
    image: '/images/maintenance-programs.png',
    heroImage: '/images/maintenance-programs.png',
    summary: 'Annual maintenance plans to keep your HVAC system running efficiently year-round.',
    bullets: [
      'Bi-annual system inspections',
      'Priority service scheduling',
      'Discounted repairs',
      'No overtime charges'
    ],
    ctaLabel: 'Join Maintenance Plan'
  },
  {
    slug: 'new-construction',
    name: 'New Construction',
    icon: 'building',
    image: '/images/commercial.png',
    heroImage: '/images/commercial.png',
    summary: 'Complete HVAC installation services for new construction projects. Expert design, installation, and commissioning for residential and commercial buildings.',
    bullets: [
      'Custom HVAC system design',
      'Energy-efficient equipment selection',
      'Professional installation',
      'Code compliance and permitting',
      'System testing and commissioning'
    ],
    ctaLabel: 'Contact Us'
  }
]

// Helper function to get a service by slug
export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(service => service.slug === slug)
}

