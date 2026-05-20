'use client';

import { motion } from 'framer-motion';

type Props = {
  children: React.ReactNode;
  attribution?: string;
};

export function PullQuote({ children, attribution }: Props) {
  return (
    <motion.section
      className="container-x py-32 lg:py-48"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
    >
      <blockquote className="max-w-4xl mx-auto text-center">
        <div className="mb-6 flex justify-center">
          <div className="w-12 h-px bg-copper" />
        </div>
        <p className="font-serif italic font-medium text-3xl sm:text-4xl md:text-[3.25rem] leading-[1.15] tracking-tighter2 text-balance">
          &ldquo;{children}&rdquo;
        </p>
        {attribution && (
          <footer className="mt-10 text-[11px] uppercase tracking-[0.25em] text-stone">
            {attribution}
          </footer>
        )}
      </blockquote>
    </motion.section>
  );
}
