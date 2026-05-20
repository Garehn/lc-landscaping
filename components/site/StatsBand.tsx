'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

type Stat = { value: string; label: string };

function AnimatedNumber({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const [display, setDisplay] = useState('0');

  useEffect(() => {
    if (!inView) return;

    // Extract numeric part and suffix (e.g., "140+" → 140, "+")
    const match = value.match(/^(\d+)(.*)$/);
    if (!match) {
      setDisplay(value);
      return;
    }

    const target = parseInt(match[1], 10);
    const suffix = match[2] || '';
    const duration = 1800;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out expo
      const eased = 1 - Math.pow(1 - progress, 4);
      const current = Math.round(eased * target);
      setDisplay(`${current}${suffix}`);
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [inView, value]);

  return <span ref={ref}>{display}</span>;
}

export function StatsBand({ stats }: { stats: Stat[] }) {
  return (
    <motion.section
      className="border-y border-mist"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container-x py-16 lg:py-20">
        <div className="grid grid-cols-3 gap-8 md:gap-16">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-center"
            >
              <div className="font-serif text-4xl sm:text-5xl md:text-6xl tracking-tighter2 text-charcoal">
                <AnimatedNumber value={s.value} />
              </div>
              <div className="mt-3 text-[11px] uppercase tracking-[0.25em] text-stone">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
