import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { blogPosts } from '@/lib/blog';
import { FadeIn } from '@/components/site/FadeIn';
import { Cta } from '@/components/site/Cta';

export const metadata: Metadata = { title: 'Blog' };

export default function BlogPage() {
  return (
    <>
      <section className="container-x pt-40 pb-20 lg:pt-48 lg:pb-24">
        <FadeIn>
          <div className="eyebrow mb-6">Blog</div>
          <h1 className="display max-w-5xl text-balance">
            Garden tips for <span className="display-italic">Canberra.</span>
          </h1>
          <p className="mt-10 body-lg max-w-2xl text-pretty">
            Practical advice on lawn care, planting and garden maintenance, written for Canberra conditions.
          </p>
        </FadeIn>
      </section>

      <div className="rule container-x" />

      <section className="container-x py-20 lg:py-28">
        <div className="grid gap-16">
          {blogPosts.map((post, i) => (
            <FadeIn key={post.slug} delay={i * 0.08}>
              <Link href={`/blog/${post.slug}`} className="group block">
                <article className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">
                  {/* Thumbnail */}
                  <div className={`md:col-span-5 ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-dune">
                      <Image
                        src={post.heroImage.src}
                        alt={post.heroImage.alt}
                        fill
                        sizes="(min-width: 768px) 40vw, 100vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="md:col-span-7 py-4">
                    <div className="flex items-center gap-4 mb-4">
                      <time className="text-sm text-charcoal/60 font-medium">{formatDate(post.date)}</time>
                      <span className="w-1 h-1 rounded-full bg-charcoal/30" />
                      <span className="text-xs text-charcoal/50">{post.readTime}</span>
                    </div>
                    <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl tracking-tighter2 group-hover:text-copper transition-colors duration-300 text-balance leading-[1.12]">
                      {post.title}
                    </h2>
                    <p className="mt-5 text-charcoal/70 text-lg leading-relaxed max-w-xl text-pretty">
                      {post.description}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-charcoal/60 group-hover:text-copper transition-colors duration-300">
                      Read article
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform duration-500 group-hover:translate-x-1">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </article>
              </Link>
              {i < blogPosts.length - 1 && <div className="rule mt-16" />}
            </FadeIn>
          ))}
        </div>
      </section>

      <Cta title="Need help with your garden?" body="We do lawn mowing, hedge trimming, garden cleanups and makeovers across Canberra." />
    </>
  );
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' });
}
