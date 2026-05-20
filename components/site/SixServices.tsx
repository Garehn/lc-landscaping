'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { coreServices, type CoreServiceIcon } from '@/lib/content';

const ICON_PATHS: Record<CoreServiceIcon, React.ReactNode> = {
  // Lawn mower blade
  mowing: (
    <>
      <path d="M4 20h16" />
      <path d="M4 16h16" />
      <path d="M8 12V8L12 4l4 4v4" />
      <circle cx="12" cy="14" r="2" />
    </>
  ),
  // Hedge shears
  hedges: (
    <>
      <path d="M12 3v18" />
      <path d="M5 7l7 5-7 5" />
      <path d="M19 7l-7 5 7 5" />
    </>
  ),
  // Broom / cleanup
  cleanup: (
    <>
      <path d="M12 3v12" />
      <path d="M8 8l4-2 4 2" />
      <path d="M5 15l7 2 7-2" />
      <path d="M5 15l2 6h10l2-6" />
    </>
  ),
  // Sparkle / makeover
  makeover: (
    <>
      <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z" />
      <path d="M5 18l0.75 2.25L8 21l-2.25 0.75" opacity="0.5" />
      <path d="M19 16l0.5 1.5L21 18l-1.5 0.5" opacity="0.5" />
    </>
  ),
  // Leaf + seedling
  planting: (
    <>
      <path d="M12 22V12" />
      <path d="M12 12C12 12 16 8 20 6C18 10 14 14 12 12Z" />
      <path d="M12 15C12 15 8 11 4 9C6 13 10 17 12 15Z" />
    </>
  ),
  // Pruning shears - maintenance
  maintain: (
    <>
      <circle cx="8" cy="18" r="3" />
      <circle cx="16" cy="18" r="3" />
      <path d="M8 15L14 4" />
      <path d="M16 15L10 4" />
    </>
  ),
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

export function SixServices() {
  return (
    <section className="container-x pt-28 pb-24 lg:pt-36 lg:pb-32">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="mb-16 flex items-end justify-between gap-8 flex-wrap"
      >
        <div>
          <div className="eyebrow mb-4">What we do</div>
          <h2 className="display max-w-3xl text-balance">
            Six services, <span className="display-italic">one crew.</span>
          </h2>
        </div>
        <p className="max-w-md text-charcoal/70 leading-relaxed">
          From a one-off cleanup to fortnightly visits. Pick one, pick all six. Same crew, same standard, every time.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-mist/60"
      >
        {coreServices.map((s, i) => (
          <motion.div
            key={s.id}
            variants={cardVariants}
            className="group relative bg-ivory p-8 lg:p-10"
          >
            <div className="absolute inset-0 bg-dune/40 origin-left scale-x-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" />
            <Link href={`/services#${s.id}`} className="block relative z-10">
              <div className="flex items-start justify-between mb-8">
                <span className="size-14 rounded-full border border-charcoal/10 flex items-center justify-center transition-all duration-700 group-hover:border-copper group-hover:bg-copper group-hover:text-ivory group-hover:scale-110">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                    {ICON_PATHS[s.icon]}
                  </svg>
                </span>
                <div className="text-[10px] uppercase tracking-[0.25em] text-charcoal/40 font-mono pt-4">0{i + 1}</div>
              </div>
              <h3 className="font-serif text-[1.6rem] md:text-[1.75rem] tracking-tighter2 mb-3 text-balance">{s.title}</h3>
              <p className="text-charcoal/70 leading-relaxed mb-8">{s.body}</p>
              <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-charcoal/70 transition-all duration-500 group-hover:text-copper">
                <span className="transition-transform duration-500 group-hover:translate-x-1">Learn more</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-all duration-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
