'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

/**
 * Clip-up text reveal that fires on mount (not on scroll-into-view).
 * Use for hero content that's already in the viewport on page load.
 */
export function HeroReveal({ children, delay = 0, className = '' }: Props) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: '100%', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1.1,
          delay: 0.3 + delay, // base delay lets the page paint first
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
