'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

type Props = {
  src: string;
  alt: string;
  priority?: boolean;
};

/**
 * Full-bleed hero image with subtle parallax (5% travel).
 * Scales 1.1× so the parallax translation doesn't expose the container.
 */
export function ParallaxImage({ src, alt, priority = false }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '12%']);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y }}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="100vw"
          className="object-cover scale-110 opacity-90"
        />
      </motion.div>
    </div>
  );
}
