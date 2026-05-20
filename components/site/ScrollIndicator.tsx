'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * Minimal scroll indicator - a small line that fades out as user scrolls.
 * Positioned absolute at the bottom of its parent.
 */
export function ScrollIndicator() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);

  return (
    <motion.div
      className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      style={{ opacity }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.8, duration: 1 }}
    >
      <span className="text-[10px] uppercase tracking-[0.3em] text-ivory/40">Scroll</span>
      <div className="w-px h-12 relative overflow-hidden">
        <div className="w-full h-full bg-ivory/15" />
        <motion.div
          className="absolute top-0 left-0 w-full bg-ivory/50"
          initial={{ height: '0%', top: '0%' }}
          animate={{ height: ['0%', '50%', '0%'], top: ['0%', '25%', '100%'] }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: [0.16, 1, 0.3, 1],
          }}
        />
      </div>
    </motion.div>
  );
}
