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
    slug: 'ac-repair-replacement',
    name: 'A/C Unit Repair/Replacement',
    icon: 'wrench',
    image: '/images/acair.jpeg',
    heroImage: '/images/acair.jpeg',
    summary: "Whether you need a quick repair or a complete unit replacement, we've got you covered. Our expert technicians provide professional AC repair and replacement services to keep your home comfortable.",
    bullets: [
      'Same-day emergency repairs',
      'All AC brands and models',
      'Professional AC unit replacement',
      'Energy-efficient installation options',
      'Honest assessments',
      'Licensed and insured technicians'
    ],
    ctaLabel: 'Schedule Service'
  },
  {
    slug: 'air-conditioning-service',
    name: 'Air Conditioning Service',
    icon: 'shield',
    image: '/images/hvacon.jpeg',
    heroImage: '/images/hvacon.jpeg',
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
    image: '/images/coilcleaning.jpg',
    heroImage: '/images/coilcleaning.jpg',
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
    slug: 'regular-service-call',
    name: 'Regular Service Call',
    icon: 'calendar',
    image: '/images/A/CIMAGE.png',
    heroImage: '/images/A/CIMAGE.png',
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
    image: '/images/commercialhvac.png',
    heroImage: '/images/commercialhvac.png',
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
    image: '/images/ductpleaning.png',
    heroImage: '/images/ductpleaning.png',
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
    image: '/images/thermostat.png',
    heroImage: '/images/thermostat.png',
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
    image: '/images/hvacon.jpeg',
    heroImage: '/images/hvacon.jpeg',
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
    image: '/images/hvacroof.jpeg',
    heroImage: '/images/hvacroof.jpeg',
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

