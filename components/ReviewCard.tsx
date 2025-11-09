'use client'

import React from 'react'
import { Review } from '@/content/reviews'

interface ReviewCardProps {
  review: Review
}

export default function ReviewCard({ review }: ReviewCardProps) {
  const formatDate = (dateString?: string) => {
    if (!dateString) return 'Recent'
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
  }

  const renderStars = (rating: number) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating)
  }

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
  }

  return (
    <article className="relative h-full rounded-none bg-white border-2 border-brand-black shadow-card p-5 pt-8">
      {/* Quote icon badge - positioned with proper spacing */}
      <div className="absolute top-0 left-4 h-10 w-10 rounded-full border-2 border-brand-black bg-brand-blue flex items-center justify-center transform -translate-y-1/2">
        <svg 
          className="w-5 h-5 text-brand-black" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>

      {/* Header with name and rating only */}
      <div className="flex items-center gap-3">
        <div>
          <h4 className="font-semibold text-brand-black">{review.name}</h4>
          <div className="text-sm text-brand-gold font-bold">
            {renderStars(review.rating)}
          </div>
        </div>
      </div>

      {/* Review text */}
      <p className="mt-4 text-brand-black/80 text-[15px] leading-relaxed line-clamp-5">
        {review.text}
      </p>

      {/* Footer with service and date */}
      <div className="mt-4 flex items-center justify-between text-xs">
        <span className="inline-flex items-center gap-2">
          <span className="rounded-none border border-brand-black bg-brand-gold/20 px-2 py-1 font-semibold text-brand-black">
            {review.service}
          </span>
        </span>
        <time dateTime={review.date} className="text-brand-black/60">
          {formatDate(review.date)}
        </time>
      </div>

      {/* Verified badge */}
      <div className="absolute top-5 right-5">
        <span className="inline-flex items-center gap-1 text-xs text-brand-blue font-semibold">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          Verified
        </span>
      </div>
    </article>
  )
}

