import type { Metadata } from 'next'
import './globals.css'
import { TopBar } from '@/components/layout/TopBar'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Magnus R&S A/C | Professional Air Conditioning Services',
  description: 'Professional air conditioning services. Licensed HVAC technicians for AC repair, installation, maintenance, and emergency service.',
  keywords: 'air conditioning, AC repair, HVAC, AC installation, AC maintenance, emergency AC repair, new construction HVAC',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'Magnus R&S A/C | Professional HVAC Services',
    description: 'Professional air conditioning services. Licensed HVAC technicians ready to help!',
    type: 'website',
    locale: 'en_US',
    url: 'https://magnusac.com',
    siteName: 'Magnus R&S A/C',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Magnus R&S A/C | Professional HVAC Services',
    description: 'Professional air conditioning services. Licensed HVAC technicians ready to help!',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className="overflow-x-hidden">
        <TopBar />
        <Navbar />
        <main className="min-h-screen pt-16 md:pt-[7.5rem]">
          {children}
        </main>
        <Footer />
        
        {/* Schema.org LocalBusiness markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'HVACBusiness',
              name: 'Magnus R&S A/C',
              description: 'Professional air conditioning services',
              telephone: '786-282-3563',
              email: 'guillermo@miamirsac.com',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '10755 SW 190 ST #61',
                addressLocality: 'Miami',
                addressRegion: 'FL',
                postalCode: '33157',
                addressCountry: 'US'
              },
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                  opens: '09:00',
                  closes: '18:00'
                }
              ],
              image: 'https://magnusac.com/logo.png',
              url: 'https://magnusac.com'
            })
          }}
        />
      </body>
    </html>
  )
}

