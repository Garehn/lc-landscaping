import type { Metadata } from 'next';
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

  // Simple markdown-to-HTML: headings, paragraphs, bold
  const html = post.content
    .trim()
    .split('\n\n')
    .map((block) => {
      const trimmed = block.trim();
      if (trimmed.startsWith('## ')) {
        return `<h2 class="font-serif text-2xl md:text-3xl tracking-tighter2 mt-14 mb-5">${trimmed.slice(3)}</h2>`;
      }
      // Bold syntax
      const withBold = trimmed.replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-charcoal">$1</strong>');
      return `<p class="text-lg leading-relaxed text-charcoal/80 mb-5 text-pretty">${withBold}</p>`;
    })
    .join('\n');

  // Find related posts
  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <>
      <article className="container-x pt-40 pb-20 lg:pt-48 lg:pb-28">
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
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tighter2 max-w-4xl text-balance leading-[1.05]">
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
          <div
            className="max-w-3xl prose-custom"
            dangerouslySetInnerHTML={{ __html: html }}
          />
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

      {/* Related posts */}
      {related.length > 0 && (
        <section className="container-x pb-20">
          <FadeIn>
            <div className="eyebrow mb-8">More from the blog</div>
            <div className="grid md:grid-cols-2 gap-8">
              {related.map((r) => (
                <Link key={r.slug} href={`/blog/${r.slug}`} className="group block p-8 bg-dune rounded-sm hover:bg-mist/50 transition-colors duration-300">
                  <h3 className="font-serif text-xl tracking-tighter2 group-hover:text-copper transition-colors duration-300 text-balance">{r.title}</h3>
                  <p className="mt-3 text-sm text-charcoal/60 leading-relaxed">{r.description}</p>
                  <span className="mt-4 inline-block text-[11px] uppercase tracking-[0.25em] text-charcoal/50 group-hover:text-copper transition-colors duration-300">Read →</span>
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

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' });
}
