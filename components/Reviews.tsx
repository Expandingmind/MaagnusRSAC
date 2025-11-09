'use client'

import React, { useState, useEffect, useRef } from 'react'
import ReviewCard from './ReviewCard'
import { reviews, getAverageRating } from '@/content/reviews'

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const viewportRef = useRef<HTMLDivElement>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  // Calculate slides per view based on screen size
  const getSlidesPerView = () => {
    if (typeof window === 'undefined') return 1
    if (window.innerWidth >= 1280) return 3 // xl
    if (window.innerWidth >= 768) return 2 // md
    return 1 // mobile
  }

  const [slidesPerView, setSlidesPerView] = useState(1)

  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(getSlidesPerView())
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const maxIndex = Math.max(0, reviews.length - slidesPerView)

  // Autoplay
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex(prev => {
          if (prev >= maxIndex) return 0
          return prev + 1
        })
      }, 5000)
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isPaused, maxIndex])

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.min(index, maxIndex))
  }

  const prev = () => {
    setCurrentIndex(prev => {
      if (prev <= 0) return maxIndex
      return prev - 1
    })
  }

  const next = () => {
    setCurrentIndex(prev => {
      if (prev >= maxIndex) return 0
      return prev + 1
    })
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [maxIndex])

  const averageRating = getAverageRating()

  // JSON-LD Schema
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Magnus R&S A/C',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: averageRating,
      reviewCount: reviews.length,
      bestRating: 5,
      worstRating: 1
    },
    review: reviews.map(review => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: review.name
      },
      datePublished: review.date,
      reviewBody: review.text,
      reviewRating: {
        '@type': 'Rating',
        ratingValue: review.rating,
        bestRating: 5,
        worstRating: 1
      }
    }))
  }

  return (
    <section id="reviews" className="relative bg-brand-off py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <header className="mb-8 md:mb-12 text-center">
          <h2 className="font-heading uppercase text-5xl md:text-6xl text-brand-black tracking-tight">
            What Our Customers Say
          </h2>
          <p className="mt-3 text-brand-black/70 flex items-center justify-center gap-3">
            <span className="text-brand-gold font-bold">★ {averageRating}/5</span>
            <span>•</span>
            <span>Licensed & Insured</span>
            <span>•</span>
            <span>{reviews.length} Verified Reviews</span>
          </p>
        </header>

        <div className="relative">
          {/* Viewport with padding to accommodate badges */}
          <div 
            ref={viewportRef}
            className="overflow-hidden pt-6"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Track */}
            <div 
              className="flex transition-transform duration-500 will-change-transform"
              style={{ 
                transform: `translateX(-${(currentIndex * 100) / slidesPerView}%)`
              }}
            >
              {reviews.map(review => (
                <div 
                  key={review.id} 
                  className="basis-full md:basis-1/2 xl:basis-1/3 px-3 flex-shrink-0"
                >
                  <ReviewCard review={review} />
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-between">
            {/* Arrow buttons */}
            <div className="flex gap-2">
              <button
                aria-label="Previous review"
                onClick={prev}
                disabled={currentIndex === 0 && reviews.length <= slidesPerView}
                className="h-11 w-11 rounded-none border-2 border-brand-black bg-white hover:bg-brand-blue text-brand-black shadow-btn disabled:opacity-40 disabled:cursor-not-allowed transition flex items-center justify-center text-2xl font-bold"
              >
                ‹
              </button>
              <button
                aria-label="Next review"
                onClick={next}
                disabled={currentIndex >= maxIndex && reviews.length <= slidesPerView}
                className="h-11 w-11 rounded-none border-2 border-brand-black bg-white hover:bg-brand-blue text-brand-black shadow-btn disabled:opacity-40 disabled:cursor-not-allowed transition flex items-center justify-center text-2xl font-bold"
              >
                ›
              </button>
            </div>

            {/* Dots */}
            <div className="flex gap-2">
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <button
                  key={i}
                  aria-current={i === currentIndex}
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => goToSlide(i)}
                  className="h-2.5 w-4 rounded-full border border-brand-black bg-white aria-[current=true]:bg-brand-gold transition-colors"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </section>
  )
}

