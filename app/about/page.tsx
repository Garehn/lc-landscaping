import Image from 'next/image';
import type { Metadata } from 'next';
import { about, studio } from '@/lib/content';
import { images } from '@/lib/images';
import { FadeIn } from '@/components/site/FadeIn';
import { PullQuote } from '@/components/site/PullQuote';
import { Cta } from '@/components/site/Cta';

export const metadata: Metadata = { title: 'About' };

export default function AboutPage() {
  return (
    <>
      <section className="container-x pt-40 pb-20 lg:pt-48 lg:pb-28">
        <FadeIn>
          <div className="eyebrow mb-6">About</div>
          <h1 className="display max-w-5xl text-balance">
            Two mates, one <span className="display-italic">mission.</span>
          </h1>
          <p className="mt-10 body-lg max-w-2xl text-pretty">{about.lead}</p>
        </FadeIn>
      </section>

      <section className="container-x pb-12">
        <FadeIn>
          <div className="relative aspect-[16/9] overflow-hidden bg-dune rounded-sm">
            <Image src={images.about.src} alt={images.about.alt} fill sizes="(min-width: 1280px) 1360px, 100vw" className="object-cover" />
          </div>
        </FadeIn>
      </section>

      <section className="container-x py-24 lg:py-32">
        <FadeIn className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <h2 className="font-serif text-3xl md:text-4xl tracking-tighter2 text-balance">
              Word of mouth is our best marketing.
            </h2>
          </div>
          <div className="md:col-span-7 space-y-6 text-lg leading-relaxed text-charcoal/80">
            {about.body.map((p, i) => (
              <p key={i} className="text-pretty">{p}</p>
            ))}
          </div>
        </FadeIn>
      </section>

      <PullQuote attribution="Carter & Lucas">{about.pullQuote}</PullQuote>

      <section className="bg-dune relative grain">
        <div className="container-x py-28 lg:py-36 relative z-10">
          <FadeIn className="mb-16">
            <div className="eyebrow mb-4">What we stand behind</div>
            <h2 className="font-serif text-4xl md:text-5xl tracking-tighter2 max-w-3xl text-balance">Three things we don&rsquo;t compromise on.</h2>
          </FadeIn>
          <div className="grid gap-12 md:gap-16 md:grid-cols-3">
            {about.values.map((v, i) => (
              <FadeIn key={v.title} delay={i * 0.1}>
                <div className="flex items-center gap-4 mb-5">
                  <div className="font-serif text-5xl tracking-tighter2 text-charcoal/20">0{i + 1}</div>
                  <div className="h-px flex-1 bg-mist" />
                </div>
                <h3 className="mt-2 font-serif text-[1.5rem] tracking-tighter2">{v.title}</h3>
                <p className="mt-3 text-charcoal/75 leading-relaxed">{v.body}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-32 lg:py-40">
        <FadeIn className="grid gap-14 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <div className="eyebrow mb-4">Service area</div>
            <h2 className="font-serif text-4xl md:text-5xl tracking-tighter2 text-balance">{studio.area}.</h2>
          </div>
          <p className="md:col-span-5 text-lg text-charcoal/75 leading-relaxed">
            We cover all of Canberra and surrounds. If you are within the ACT, we can get to you.
          </p>
        </FadeIn>
      </section>

      <Cta />
    </>
  );
}
