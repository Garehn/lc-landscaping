import Link from 'next/link';
import { studio, nav } from '@/lib/content';

export function Footer() {
  return (
    <footer className="bg-charcoal text-ivory relative grain">
      <div className="container-x py-24 lg:py-32 relative z-10">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-7">
            <div className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tighter2 text-balance leading-[1.05]">
              Creating a home you&rsquo;re <br className="hidden md:inline" />
              <span className="italic">proud of.</span>
            </div>
            <Link
              href="/contact"
              className="mt-10 inline-block text-[11px] uppercase tracking-[0.25em] border-b border-ivory/30 hover:border-ivory pb-1 transition-colors duration-500 font-medium"
            >
              Book a free quote →
            </Link>
          </div>

          <div className="md:col-span-2 md:col-start-9">
            <div className="text-[10px] uppercase tracking-[0.25em] text-ivory/50 mb-5 font-medium">Contact</div>
            <ul className="space-y-2.5 text-sm text-ivory/75">
              <li>{studio.email}</li>
              <li className="text-ivory/55 pt-1">{studio.area}</li>
            </ul>
          </div>

          <div className="md:col-span-2 md:col-start-11">
            <div className="text-[10px] uppercase tracking-[0.25em] text-ivory/50 mb-5 font-medium">Site</div>
            <ul className="space-y-2.5 text-sm">
              {nav.slice(0, -1).map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-ivory/75 hover:text-ivory transition-colors duration-300">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-ivory/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-[11px] text-ivory/50 tracking-wide">
          <div>&copy; {new Date().getFullYear()} {studio.name}. All rights reserved.</div>
          <div>Canberra, ACT &middot; ABN pending &middot; Fully insured</div>
        </div>
      </div>
    </footer>
  );
}
