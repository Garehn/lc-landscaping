'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export type Job = { src: string; alt: string; caption?: string };

type Props = { jobs: Job[]; eyebrow?: string; heading?: React.ReactNode };

export function JobsSlider({ jobs, eyebrow = 'Recent work', heading }: Props) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateButtons = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 8);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);
    const children = Array.from(el.querySelectorAll('[data-slide]')) as HTMLElement[];
    const center = el.scrollLeft + el.clientWidth / 2;
    let nearest = 0, best = Infinity;
    children.forEach((c, i) => {
      const mid = c.offsetLeft + c.clientWidth / 2;
      const d = Math.abs(mid - center);
      if (d < best) { best = d; nearest = i; }
    });
    setActiveIndex(nearest);
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    updateButtons();
    el.addEventListener('scroll', updateButtons, { passive: true });
    window.addEventListener('resize', updateButtons);
    return () => {
      el.removeEventListener('scroll', updateButtons);
      window.removeEventListener('resize', updateButtons);
    };
  }, [updateButtons]);

  const scrollBy = (dir: 1 | -1) => {
    const el = scrollerRef.current; if (!el) return;
    const slide = el.querySelector<HTMLElement>('[data-slide]');
    const step = slide ? slide.clientWidth + 24 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: 'smooth' });
  };
  const scrollTo = (i: number) => {
    const el = scrollerRef.current; if (!el) return;
    const slide = el.querySelectorAll<HTMLElement>('[data-slide]')[i];
    if (slide) el.scrollTo({ left: slide.offsetLeft - 32, behavior: 'smooth' });
  };

  return (
    <section className="bg-charcoal text-ivory overflow-hidden relative grain">
      <div className="container-x pt-24 lg:pt-36 pb-10 flex items-end justify-between gap-8 flex-wrap relative z-10">
        <div>
          <div className="eyebrow text-ivory/50 mb-4">{eyebrow}</div>
          {heading ?? (
            <h2 className="font-serif text-4xl md:text-6xl tracking-tighter2 max-w-3xl text-balance">
              This week on <span className="italic">site.</span>
            </h2>
          )}
        </div>
        <div className="flex items-center gap-3">
          <button type="button" aria-label="Previous" disabled={!canPrev} onClick={() => scrollBy(-1)}
            className="size-12 rounded-full border border-ivory/20 hover:border-ivory hover:bg-ivory hover:text-charcoal disabled:opacity-25 disabled:hover:bg-transparent disabled:hover:text-ivory transition-all duration-500 flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14 6l-6 6 6 6" /></svg>
          </button>
          <button type="button" aria-label="Next" disabled={!canNext} onClick={() => scrollBy(1)}
            className="size-12 rounded-full border border-ivory/20 hover:border-ivory hover:bg-ivory hover:text-charcoal disabled:opacity-25 disabled:hover:bg-transparent disabled:hover:text-ivory transition-all duration-500 flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M10 6l6 6-6 6" /></svg>
          </button>
        </div>
      </div>

      <div ref={scrollerRef} className="flex gap-6 lg:gap-8 overflow-x-auto snap-x snap-mandatory pb-16 pt-6 px-6 sm:px-8 lg:px-16 scroll-smooth relative z-10" style={{ scrollbarWidth: 'none' }}>
        <style jsx>{`div::-webkit-scrollbar { display: none; }`}</style>
        {jobs.map((j, i) => (
          <motion.figure
            key={i}
            data-slide
            className="snap-center shrink-0 w-[78vw] sm:w-[58vw] md:w-[44vw] lg:w-[34vw] xl:w-[30vw]"
            initial={{ opacity: 0.5, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-charcoal rounded-sm">
              <Image src={j.src} alt={j.alt} fill sizes="(min-width: 1280px) 30vw, (min-width: 1024px) 34vw, (min-width: 768px) 44vw, (min-width: 640px) 58vw, 78vw" className="object-cover transition-transform duration-[1500ms] ease-out hover:scale-[1.04]" draggable={false} />
            </div>
            {j.caption && (
              <figcaption className="mt-4 text-[11px] uppercase tracking-[0.25em] text-ivory/55">
                {String(i + 1).padStart(2, '0')} — {j.caption}
              </figcaption>
            )}
          </motion.figure>
        ))}
      </div>

      {/* Scroll position indicators */}
      <div className="container-x pb-24 flex items-center gap-2 relative z-10">
        {jobs.map((_, i) => (
          <button key={i} type="button" aria-label={`Go to slide ${i + 1}`} onClick={() => scrollTo(i)}
            className={`h-[1.5px] transition-all duration-500 ${i === activeIndex ? 'w-14 bg-ivory' : 'w-6 bg-ivory/20 hover:bg-ivory/50'}`} />
        ))}
      </div>
    </section>
  );
}
