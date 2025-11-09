'use client'

import React from 'react'
import { DiagonalSection } from './DiagonalSection'
import { PhotoStack } from '../ui/PhotoStack'
import { CTAButton } from '../ui/CTAButton'

interface ServiceTeaserProps {
  title: string
  description: string[]
  images: string[]
  direction?: 'left' | 'right'
  ctaText?: string
  ctaHref?: string
}

export class ServiceTeaser extends React.Component<ServiceTeaserProps> {
  render() {
    const { 
      title, 
      description, 
      images, 
      direction = 'right',
      ctaText = 'Learn More',
      ctaHref = '/contact'
    } = this.props
    
    return (
      <DiagonalSection direction={direction}>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {direction === 'right' ? (
            <>
              {/* Left - Content */}
              <div>
                <h2 className="heading-lg mb-6">{title}</h2>
                {description.map((paragraph, index) => (
                  <p key={index} className="text-body mb-4">
                    {paragraph}
                  </p>
                ))}
                <div className="mt-8">
                  <CTAButton href={ctaHref}>
                    {ctaText}
                  </CTAButton>
                </div>
              </div>
              
              {/* Right - Images */}
              <div>
                <PhotoStack images={images} alt={title} />
              </div>
            </>
          ) : (
            <>
              {/* Left - Images */}
              <div>
                <PhotoStack images={images} alt={title} />
              </div>
              
              {/* Right - Content */}
              <div>
                <h2 className="heading-lg mb-6">{title}</h2>
                {description.map((paragraph, index) => (
                  <p key={index} className="text-body mb-4">
                    {paragraph}
                  </p>
                ))}
                <div className="mt-8">
                  <CTAButton href={ctaHref}>
                    {ctaText}
                  </CTAButton>
                </div>
              </div>
            </>
          )}
        </div>
      </DiagonalSection>
    )
  }
}

