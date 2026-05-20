'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

type Props = {
  title?: string;
  body?: string;
  href?: string;
  cta?: string;
};

export function Cta({
  title = 'Ready to start?',
  body = 'Tell us about the job. We reply within 24 hours.',
  href = '/contact',
  cta = 'Book a free quote',
}: Props) {
  return (
    <section className="bg-charcoal text-ivory relative overflow-hidden grain">
      <div className="container-x py-32 lg:py-44 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="grid gap-12 md:grid-cols-12 md:items-end"
        >
          <h2 className="md:col-span-7 display display-italic text-balance">{title}</h2>
          <div className="md:col-span-5 md:pl-8">
            <p className="text-lg sm:text-xl leading-relaxed text-ivory/75 max-w-md mb-10 text-pretty">{body}</p>
            <Link href={href} className="btn bg-copper text-ivory hover:bg-ivory hover:text-charcoal">
              {cta}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform duration-500 group-hover:translate-x-1">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
