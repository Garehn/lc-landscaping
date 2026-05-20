'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { images, type ImageRef } from '@/lib/images';

type Props = {
  title: string;
  location: string;
  year: string;
  image: ImageRef;
  size?: 'sm' | 'lg';
};

export function ProjectCard({ title, location, year, image, size = 'lg' }: Props) {
  const ref = images[image];
  return (
    <motion.article
      className="group cursor-pointer"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className={`relative overflow-hidden bg-dune rounded-sm ${size === 'lg' ? 'aspect-[4/5]' : 'aspect-[4/3]'}`}>
        <Image
          src={ref.src}
          alt={ref.alt}
          fill
          sizes="(min-width: 1024px) 600px, 100vw"
          className="object-cover transition-transform duration-[1500ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
        />
        {/* Hover gradient overlay - dark from bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      </div>
      <div className="mt-6 flex items-baseline justify-between gap-4">
        <div>
          <h3 className="font-serif text-[1.5rem] tracking-tighter2 transition-colors duration-500 group-hover:text-copper">{title}</h3>
          <div className="mt-1.5 text-sm text-stone">{location}</div>
        </div>
        <div className="text-[10px] uppercase tracking-[0.25em] text-stone/60 font-mono">{year}</div>
      </div>
    </motion.article>
  );
}
