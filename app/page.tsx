import Link from 'next/link';
import { home, portfolio, beforeAfters, recentJobs } from '@/lib/content';
import { images } from '@/lib/images';
import { FadeIn } from '@/components/site/FadeIn';
import { HeroReveal } from '@/components/site/HeroReveal';
import { ParallaxImage } from '@/components/site/ParallaxImage';
import { ScrollIndicator } from '@/components/site/ScrollIndicator';
import { BeforeAfter } from '@/components/site/BeforeAfter';
import { Cta } from '@/components/site/Cta';
import { JobsSlider } from '@/components/site/JobsSlider';
import { SixServices } from '@/components/site/SixServices';
import { StatsBand } from '@/components/site/StatsBand';
import { ProjectCard } from '@/components/portfolio/ProjectCard';
import { GoogleReviews } from '@/components/site/GoogleReviews';

export default function HomePage() {
  const featuredBA = beforeAfters[0];
  const featured = portfolio.slice(0, 3);

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative h-[100svh] min-h-[680px] w-full overflow-hidden bg-charcoal pt-[88px]">
        <ParallaxImage src={images.hero.src} alt={images.hero.alt} priority />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/20 to-charcoal/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/50 via-transparent to-transparent" />

        <div className="relative h-full container-x flex flex-col justify-end pb-24 lg:pb-32">
          <div className="max-w-4xl text-ivory">
            <HeroReveal delay={0}>
              <div className="eyebrow !text-ivory/60 mb-7">{home.hero.eyebrow}</div>
            </HeroReveal>
            <HeroReveal delay={0.08}>
              <h1 className="display">
                Creating a home you&rsquo;re <span className="display-italic">proud of.</span>
              </h1>
            </HeroReveal>
            <HeroReveal delay={0.2}>
              <p className="mt-8 max-w-xl text-ivory/85 text-lg sm:text-xl leading-relaxed text-pretty">
                {home.hero.sub}
              </p>
            </HeroReveal>
            <HeroReveal delay={0.35}>
              <div className="mt-12 flex flex-wrap gap-4">
                <Link href="/contact" className="bg-copper text-ivory btn hover:bg-ivory hover:text-charcoal">
                  Book a free quote <span aria-hidden className="ml-1">→</span>
                </Link>
                <Link href="/services" className="text-ivory border border-ivory/30 btn hover:bg-ivory hover:text-charcoal">
                  Our services
                </Link>
              </div>
            </HeroReveal>
          </div>
        </div>
        <ScrollIndicator />
      </section>

      <StatsBand stats={home.stats} />
      <GoogleReviews />
      <SixServices />

      {/* ── Featured before / after ── */}
      <section className="bg-dune relative grain">
        <div className="container-x py-28 lg:py-36 relative z-10">
          <FadeIn className="mb-14 flex items-end justify-between gap-8 flex-wrap">
            <div>
              <div className="eyebrow mb-4">Before · After</div>
              <h2 className="font-serif text-4xl md:text-5xl tracking-tighter2 max-w-xl text-balance">
                Same site. <span className="italic">Transformed.</span>
              </h2>
            </div>
            <Link href="/portfolio" className="link-underline text-[11px] uppercase tracking-[0.25em]">See all projects</Link>
          </FadeIn>
          <FadeIn>
            <BeforeAfter beforeSrc={images[featuredBA.before].src} afterSrc={images[featuredBA.after].src} beforeAlt={images[featuredBA.before].alt} afterAlt={images[featuredBA.after].alt} label={featuredBA.label} />
          </FadeIn>
        </div>
      </section>

      <JobsSlider
        eyebrow="Recent work"
        heading={<h2 className="font-serif text-4xl md:text-6xl tracking-tighter2 max-w-3xl text-balance">This week on <span className="italic">site.</span></h2>}
        jobs={recentJobs.map((j) => ({ src: images[j.image].src, alt: images[j.image].alt, caption: j.caption }))}
      />

      {/* ── Selected gardens ── */}
      <section className="container-x pt-32 lg:pt-44 pb-32 lg:pb-44">
        <FadeIn className="mb-18 flex items-end justify-between gap-8 flex-wrap mb-16">
          <div>
            <div className="eyebrow mb-4">Selected projects</div>
            <h2 className="display max-w-3xl text-balance">Work we are <span className="display-italic">proud of.</span></h2>
          </div>
          <Link href="/portfolio" className="link-underline text-[11px] uppercase tracking-[0.25em]">Full portfolio</Link>
        </FadeIn>
        <div className="grid gap-12 md:grid-cols-3">
          {featured.map((p) => (
            <ProjectCard key={p.id} title={p.title} location={p.location} year={p.year} image={p.image} />
          ))}
        </div>
      </section>

      {/* ── Testimonial ── */}
      <section className="bg-charcoal text-ivory relative grain overflow-hidden">
        <div className="container-x py-32 lg:py-44 relative z-10">
          <FadeIn>
            <div className="mb-10"><div className="w-16 h-px bg-copper line-grow" /></div>
            <p className="font-serif italic font-medium text-3xl sm:text-4xl md:text-[3.5rem] leading-[1.12] tracking-tighter2 max-w-5xl text-balance">
              &ldquo;{home.testimonial.quote}&rdquo;
            </p>
            <div className="mt-14 flex items-center gap-4">
              <div className="w-8 h-px bg-ivory/30" />
              <div className="text-[11px] uppercase tracking-[0.25em] text-ivory/60">
                {home.testimonial.author} · {home.testimonial.project}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <Cta />
    </>
  );
}
