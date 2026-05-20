'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { nav } from '@/lib/content';

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 bg-ivory backdrop-blur-xl border-b ${
        scrolled || open
          ? 'h-[72px] border-mist/80 shadow-[0_1px_6px_rgba(0,0,0,0.06)]'
          : 'h-[88px] border-mist/40'
      }`}
    >
      <div className={`container-x flex items-center justify-between transition-all duration-500 ${scrolled || open ? 'h-[72px]' : 'h-[88px]'}`}>
        {/* Logo / Wordmark */}
        <Link href="/" className="group flex items-baseline gap-2.5 leading-none text-charcoal">
          <span
            className={`font-serif font-bold tracking-tighter2 leading-none transition-all duration-500 ${
              scrolled || open ? 'text-[1.75rem] md:text-[2rem]' : 'text-[2rem] md:text-[2.5rem]'
            }`}
          >
            LC
          </span>
          <span
            className={`hidden md:inline-block font-sans font-medium uppercase tracking-[0.22em] text-charcoal/70 transition-all duration-500 ${
              scrolled || open ? 'text-[9px]' : 'text-[10px]'
            }`}
          >
            Landscaping & Services
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          {nav.slice(1, -1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-[11px] uppercase tracking-[0.22em] font-medium transition-colors duration-300 ${
                pathname === item.href
                  ? 'text-charcoal'
                  : 'text-charcoal/75 hover:text-charcoal'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="text-[11px] uppercase tracking-[0.22em] bg-charcoal text-ivory px-6 py-3 hover:bg-copper transition-colors duration-500 font-medium"
          >
            Book a free quote
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="md:hidden flex flex-col gap-[5px] p-2 -mr-2"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`block h-[1.5px] w-6 bg-charcoal transition-all duration-500 origin-center ${open ? 'translate-y-[6.5px] rotate-45' : ''}`} />
          <span className={`block h-[1.5px] w-6 bg-charcoal transition-all duration-500 ${open ? 'opacity-0 scale-x-0' : ''}`} />
          <span className={`block h-[1.5px] w-6 bg-charcoal transition-all duration-500 origin-center ${open ? '-translate-y-[6.5px] -rotate-45' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden fixed inset-0 top-[72px] bg-ivory/98 backdrop-blur-2xl z-40"
          >
            <div className="container-x pt-12 flex flex-col gap-1">
              {nav.slice(1).map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={item.href}
                    className={`block py-4 font-serif text-3xl tracking-tighter2 border-b border-mist/40 ${
                      pathname === item.href ? 'text-charcoal' : 'text-charcoal/70'
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-10 text-sm text-charcoal/60"
              >
                Canberra · ACT · All suburbs
              </motion.div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
