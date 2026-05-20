'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { googleReviews } from '@/lib/content';

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className={`w-4 h-4 ${i < count ? 'text-amber-400' : 'text-stone/30'}`} fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function GoogleReviews() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-28 lg:py-36 overflow-hidden">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14"
        >
          <div>
            <div className="eyebrow mb-4">What our clients say</div>
            <h2 className="font-serif text-4xl md:text-5xl tracking-tighter2 max-w-xl text-balance">
              4.8 stars across <span className="italic">13 reviews.</span>
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <svg viewBox="0 0 48 48" className="w-8 h-8 shrink-0">
              <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
              <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
              <path fill="#FBBC05" d="M10.53 28.59a14.5 14.5 0 010-9.18l-7.97-6.19a24.01 24.01 0 000 21.56l7.97-6.19z" />
              <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
            </svg>
            <div>
              <div className="flex items-center gap-1.5">
                <Stars count={5} />
                <span className="text-sm font-semibold text-charcoal ml-1">4.8</span>
              </div>
              <p className="text-xs text-charcoal/70 mt-0.5">Google Reviews</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Horizontally scrollable review cards */}
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto pb-4 px-6 sm:px-8 lg:px-16 snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {googleReviews.map((review, i) => (
          <motion.div
            key={review.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: Math.min(i * 0.05, 0.3), duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="snap-start shrink-0 w-[320px] sm:w-[360px] bg-white border border-charcoal/8 rounded-sm p-7 flex flex-col"
          >
            <div className="flex items-center gap-3.5 mb-4">
              <div className="w-10 h-10 rounded-full bg-charcoal/10 flex items-center justify-center text-sm font-semibold text-charcoal/70">
                {review.initial}
              </div>
              <div>
                <p className="text-sm font-semibold text-charcoal leading-tight">{review.name}</p>
                <Stars count={review.stars} />
              </div>
            </div>
            <p className="text-[15px] leading-relaxed text-charcoal/80 flex-1">{review.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
