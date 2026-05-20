import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts, getBlogPost, getAllSlugs } from '@/lib/blog';
import { FadeIn } from '@/components/site/FadeIn';
import { Cta } from '@/components/site/Cta';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  // Split content into sections on h2 markers
  const sections = post.content.trim().split(/(?=## )/);

  // Find related posts
  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  // Decide where to place inline images and pull quote
  // Image 1 after section 2, pull quote after section 3, image 2 after section 4
  const img1AfterSection = 2;
  const pullQuoteAfterSection = Math.min(3, sections.length - 1);
  const img2AfterSection = Math.min(4, sections.length - 1);

  return (
    <>
      {/* Hero image */}
      <div className="relative w-full h-[50vh] min-h-[360px] max-h-[560px] bg-charcoal overflow-hidden">
        <Image
          src={post.heroImage.src}
          alt={post.heroImage.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/20 to-charcoal/40" />
      </div>

      <article className="container-x pt-12 pb-20 lg:pt-16 lg:pb-28">
        <FadeIn>
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-charcoal/60 mb-10">
            <Link href="/" className="hover:text-charcoal transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-charcoal transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-charcoal/40 truncate max-w-[200px]">{post.title}</span>
          </nav>

          <div className="eyebrow mb-6">{post.readTime}</div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tighter2 max-w-4xl text-balance leading-[1.1]">
            {post.title}
          </h1>
          <div className="mt-6 flex items-center gap-4 text-sm text-charcoal/60">
            <time>{formatDate(post.date)}</time>
            <span className="w-1 h-1 rounded-full bg-charcoal/30" />
            <span>LC Landscaping & Services</span>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="rule my-12" />

          <div className="max-w-3xl">
            {sections.map((section, i) => (
              <div key={i}>
                {/* Render the section content */}
                <div
                  className="prose-custom"
                  dangerouslySetInnerHTML={{ __html: renderSection(section) }}
                />

                {/* Inline image 1 */}
                {i === img1AfterSection && post.inlineImages[0] && (
                  <FadeIn>
                    <figure className="my-14 -mx-4 sm:mx-0 lg:-mx-16">
                      <div className="relative aspect-[16/9] overflow-hidden rounded-sm bg-dune">
                        <Image
                          src={post.inlineImages[0].src}
                          alt={post.inlineImages[0].alt}
                          fill
                          sizes="(min-width: 1024px) 900px, 100vw"
                          className="object-cover"
                        />
                      </div>
                      <figcaption className="mt-3 text-xs text-charcoal/50 text-center">
                        {post.inlineImages[0].alt}
                      </figcaption>
                    </figure>
                  </FadeIn>
                )}

                {/* Pull quote */}
                {i === pullQuoteAfterSection && post.pullQuote && (
                  <FadeIn>
                    <blockquote className="my-16 py-10 border-t border-b border-charcoal/10 relative">
                      <div className="absolute -top-5 left-0 text-copper/20 font-serif text-7xl leading-none select-none">&ldquo;</div>
                      <p className="font-serif italic text-2xl md:text-3xl leading-[1.3] tracking-tighter2 text-charcoal/90 max-w-2xl text-balance pl-2">
                        {post.pullQuote}
                      </p>
                    </blockquote>
                  </FadeIn>
                )}

                {/* Inline image 2 */}
                {i === img2AfterSection && post.inlineImages[1] && (
                  <FadeIn>
                    <figure className="my-14 -mx-4 sm:mx-0 lg:-mx-16">
                      <div className="relative aspect-[16/9] overflow-hidden rounded-sm bg-dune">
                        <Image
                          src={post.inlineImages[1].src}
                          alt={post.inlineImages[1].alt}
                          fill
                          sizes="(min-width: 1024px) 900px, 100vw"
                          className="object-cover"
                        />
                      </div>
                      <figcaption className="mt-3 text-xs text-charcoal/50 text-center">
                        {post.inlineImages[1].alt}
                      </figcaption>
                    </figure>
                  </FadeIn>
                )}
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Author card */}
        <FadeIn delay={0.15}>
          <div className="mt-16 p-8 lg:p-10 bg-dune rounded-sm max-w-3xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-charcoal/10 flex items-center justify-center font-serif text-lg font-bold text-charcoal/60">LC</div>
              <div>
                <div className="font-semibold text-charcoal">LC Landscaping & Services</div>
                <div className="text-sm text-charcoal/60">Carter & Lucas · Canberra, ACT</div>
              </div>
            </div>
            <p className="text-charcoal/70 leading-relaxed">
              We are a Canberra landscaping crew specialising in lawn mowing, hedge trimming, garden cleanups and makeovers. We write about what we know: practical garden advice for Canberra conditions.
            </p>
          </div>
        </FadeIn>
      </article>

      {/* Related posts with images */}
      {related.length > 0 && (
        <section className="container-x pb-20">
          <FadeIn>
            <div className="eyebrow mb-8">More from the blog</div>
            <div className="grid md:grid-cols-2 gap-8">
              {related.map((r) => (
                <Link key={r.slug} href={`/blog/${r.slug}`} className="group block rounded-sm overflow-hidden bg-dune hover:bg-mist/50 transition-colors duration-300">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={r.heroImage.src}
                      alt={r.heroImage.alt}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="font-serif text-xl tracking-tighter2 group-hover:text-copper transition-colors duration-300 text-balance">{r.title}</h3>
                    <p className="mt-3 text-sm text-charcoal/60 leading-relaxed">{r.description}</p>
                    <span className="mt-4 inline-block text-[11px] uppercase tracking-[0.25em] text-charcoal/50 group-hover:text-copper transition-colors duration-300">Read →</span>
                  </div>
                </Link>
              ))}
            </div>
          </FadeIn>
        </section>
      )}

      <Cta title="Need a hand with your garden?" body="We do lawn mowing, hedge trimming, garden cleanups and makeovers across Canberra." />
    </>
  );
}

function renderSection(section: string): string {
  return section
    .trim()
    .split('\n\n')
    .map((block) => {
      const trimmed = block.trim();
      if (!trimmed) return '';
      if (trimmed.startsWith('## ')) {
        return `<h2 class="font-serif text-2xl md:text-3xl tracking-tighter2 mt-14 mb-5">${trimmed.slice(3)}</h2>`;
      }
      const withBold = trimmed.replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-charcoal">$1</strong>');
      return `<p class="text-lg leading-relaxed text-charcoal/80 mb-5 text-pretty">${withBold}</p>`;
    })
    .join('\n');
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' });
}
