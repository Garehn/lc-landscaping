'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

/**
 * A text reveal component that clips text upward into view.
 * Used for hero headings and section titles for a more dynamic entrance.
 */
export function RevealText({ children, delay = 0, className = '' }: Props) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: '110%', opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{
          duration: 1.1,
          delay,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
