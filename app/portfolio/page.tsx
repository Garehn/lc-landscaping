import type { Metadata } from 'next';
import { portfolio, beforeAfters } from '@/lib/content';
import { images } from '@/lib/images';
import { FadeIn } from '@/components/site/FadeIn';
import { BeforeAfter } from '@/components/site/BeforeAfter';
import { ProjectCard } from '@/components/portfolio/ProjectCard';
import { Cta } from '@/components/site/Cta';

export const metadata: Metadata = { title: 'Gallery' };

export default function PortfolioPage() {
  return (
    <>
      <section className="container-x pt-40 pb-20 lg:pt-48 lg:pb-24">
        <FadeIn>
          <div className="eyebrow mb-6">Portfolio</div>
          <h1 className="display max-w-5xl text-balance">
            Mowed, trimmed, <span className="display-italic">transformed.</span>
          </h1>
          <p className="mt-10 body-lg max-w-2xl text-pretty">
            A selection of projects across Canberra. Drag the sliders to see the transformation.
          </p>
        </FadeIn>
      </section>

      <div className="rule container-x" />

      <section className="container-x py-20 lg:py-28">
        <div className="grid gap-12 lg:gap-16 md:grid-cols-2">
          {portfolio.slice(0, 2).map((p) => (
            <ProjectCard key={p.id} title={p.title} location={p.location} year={p.year} image={p.image} />
          ))}
        </div>
      </section>

      <section className="bg-dune relative grain">
        <div className="container-x py-24 lg:py-32 relative z-10">
          <FadeIn className="mb-10">
            <div className="eyebrow mb-3">Before · After</div>
            <h2 className="font-serif text-3xl md:text-4xl tracking-tighter2 max-w-2xl">{beforeAfters[0].label}</h2>
          </FadeIn>
          <FadeIn>
            <BeforeAfter beforeSrc={images[beforeAfters[0].before].src} afterSrc={images[beforeAfters[0].after].src} beforeAlt={images[beforeAfters[0].before].alt} afterAlt={images[beforeAfters[0].after].alt} label={beforeAfters[0].label} />
          </FadeIn>
        </div>
      </section>

      <section className="container-x py-20 lg:py-28">
        <div className="grid gap-12 lg:gap-16 md:grid-cols-2">
          {portfolio.slice(2, 4).map((p) => (
            <ProjectCard key={p.id} title={p.title} location={p.location} year={p.year} image={p.image} />
          ))}
        </div>
      </section>

      <section className="bg-dune relative grain">
        <div className="container-x py-24 lg:py-32 relative z-10">
          <FadeIn className="mb-10">
            <div className="eyebrow mb-3">Before · After</div>
            <h2 className="font-serif text-3xl md:text-4xl tracking-tighter2 max-w-2xl">{beforeAfters[1].label}</h2>
          </FadeIn>
          <FadeIn>
            <BeforeAfter beforeSrc={images[beforeAfters[1].before].src} afterSrc={images[beforeAfters[1].after].src} beforeAlt={images[beforeAfters[1].before].alt} afterAlt={images[beforeAfters[1].after].alt} label={beforeAfters[1].label} />
          </FadeIn>
        </div>
      </section>

      <section className="container-x py-24 lg:py-32">
        <FadeIn className="mb-10">
          <div className="eyebrow mb-3">Before · After</div>
          <h2 className="font-serif text-3xl md:text-4xl tracking-tighter2 max-w-2xl">{beforeAfters[2].label}</h2>
        </FadeIn>
        <FadeIn>
          <BeforeAfter beforeSrc={images[beforeAfters[2].before].src} afterSrc={images[beforeAfters[2].after].src} beforeAlt={images[beforeAfters[2].before].alt} afterAlt={images[beforeAfters[2].after].alt} label={beforeAfters[2].label} />
        </FadeIn>
      </section>

      <Cta title="Have a project in mind?" body="We have capacity for new clients. Tell us where you are and what you need." />
    </>
  );
}
