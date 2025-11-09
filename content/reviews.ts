export interface Review {
  id: string
  name: string
  rating: number
  text: string
  date?: string
  service?: string
}

export const reviews: Review[] = [
  {
    id: '1',
    name: 'John M.',
    rating: 5,
    text: 'Magnus R&S A/C fixed my AC quickly and professionally. Highly recommend!',
    service: 'AC Repair'
  },
  {
    id: '2',
    name: 'Sarah L.',
    rating: 4,
    text: 'From consultation to installation, everything went smoothly. Our AC system works perfectly now, and I couldn\'t be happier!',
    service: 'AC Installation'
  },
  {
    id: '3',
    name: 'David R.',
    rating: 5,
    text: 'They\'re always on time, friendly, and do great work every time!',
    service: 'Maintenance Service'
  },
  {
    id: '4',
    name: 'Emily G.',
    rating: 4,
    text: 'Our AC stopped working in the middle of a heatwave, but Magnus R&S A/C had it up and running within hours. Incredible service!',
    service: 'Emergency AC Repair'
  },
  {
    id: '5',
    name: 'Michael T.',
    rating: 4,
    text: 'The heating system install was efficient, and the team made sure I understood everything. Great experience!',
    service: 'Heating Installation'
  },
  {
    id: '6',
    name: 'Jennifer K.',
    rating: 5,
    text: 'Professional, courteous, and knowledgeable. They diagnosed and fixed our AC issue quickly. Will definitely use again!',
    service: 'AC Repair'
  },
  {
    id: '7',
    name: 'Robert H.',
    rating: 5,
    text: 'Best HVAC company! Professional service and excellent work. They installed our new AC unit perfectly.',
    service: 'AC Unit Replacement'
  },
  {
    id: '8',
    name: 'Lisa M.',
    rating: 4,
    text: 'The maintenance plan has saved us money and kept our AC running smoothly all year. Great value!',
    service: 'Preventive Maintenance'
  },
  {
    id: '9',
    name: 'James P.',
    rating: 5,
    text: 'Magnus R&S A/C went above and beyond. They explained everything clearly and didn\'t try to upsell unnecessary services.',
    service: 'AC Service'
  },
  {
    id: '10',
    name: 'Amanda S.',
    rating: 5,
    text: 'Fast response time and professional technicians. Our office AC is working perfectly now. Highly recommended!',
    service: 'Commercial HVAC'
  }
]

// Helper function to calculate average rating
export function getAverageRating(): number {
  if (reviews.length === 0) return 0
  const sum = reviews.reduce((acc, review) => acc + review.rating, 0)
  return Number((sum / reviews.length).toFixed(1))
}

