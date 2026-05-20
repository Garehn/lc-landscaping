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
            Practical advice on lawn care, planting and garden maintenance — written for Canberra conditions.
          </p>
        </FadeIn>
      </section>

      <div className="rule container-x" />

      <section className="container-x py-20 lg:py-28">
        <div className="grid gap-12 md:gap-16">
          {blogPosts.map((post, i) => (
            <FadeIn key={post.slug} delay={i * 0.08}>
              <Link href={`/blog/${post.slug}`} className="group block">
                <article className="grid md:grid-cols-12 gap-6 md:gap-12 md:items-start py-10 border-b border-mist/60">
                  <div className="md:col-span-3">
                    <time className="text-sm text-charcoal/60 font-medium">{formatDate(post.date)}</time>
                    <div className="text-xs text-charcoal/50 mt-1">{post.readTime}</div>
                  </div>
                  <div className="md:col-span-9">
                    <h2 className="font-serif text-2xl md:text-3xl tracking-tighter2 group-hover:text-copper transition-colors duration-300 text-balance">
                      {post.title}
                    </h2>
                    <p className="mt-4 text-charcoal/70 text-lg leading-relaxed max-w-2xl text-pretty">
                      {post.description}
                    </p>
                    <span className="mt-6 inline-block text-[11px] uppercase tracking-[0.25em] text-charcoal/60 group-hover:text-copper transition-colors duration-300">
                      Read article →
                    </span>
                  </div>
                </article>
              </Link>
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
