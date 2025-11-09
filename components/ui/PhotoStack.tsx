'use client'

import React from 'react'

interface PhotoStackProps {
  images: string[]
  alt?: string
}

export class PhotoStack extends React.Component<PhotoStackProps> {
  render() {
    const { images, alt = 'Service photos' } = this.props
    
    if (images.length === 0) return null
    
    return (
      <div className="relative">
        {images[0] && (
          <img 
            className="relative z-10 rounded-lg border-4 border-white shadow-card rotate-[-1.5deg] w-full" 
            src={images[0]}
            alt={`${alt} 1`}
          />
        )}
        {images[1] && (
          <img 
            className="absolute -right-6 top-8 rounded-lg border-4 border-white shadow-card rotate-[1.5deg] w-[90%]" 
            src={images[1]}
            alt={`${alt} 2`}
          />
        )}
      </div>
    )
  }
}

