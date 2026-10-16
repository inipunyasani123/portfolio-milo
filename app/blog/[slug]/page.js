import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import { posts, getPost, profile } from '@/lib/data';
import { pageMeta, isoDate, SITE_URL } from '@/lib/seo';

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) return { title: 'Article not found' };
  return pageMeta({ title: p.title, description: p.excerpt, path: `/blog/${p.slug}`, type: 'article', published: isoDate(p.date) });
}

export default async function Post({ params }) {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) notFound();
  const next = posts[(posts.findIndex((x) => x.slug === slug) + 1) % posts.length];

  const ld = {
    '@context': 'https://schema.org', '@type': 'BlogPosting', headline: p.title, description: p.excerpt, datePublished: isoDate(p.date),
    url: `${SITE_URL}/blog/${p.slug}`, image: `${SITE_URL}/og.jpg`, inLanguage: 'en', articleSection: p.category,
    author: { '@type': 'Person', name: profile.name, url: SITE_URL }, mainEntityOfPage: `${SITE_URL}/blog/${p.slug}`,
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <PageHeader kicker={`${p.category} · ${p.read} read`} title={p.title} accent="" sub={p.excerpt} />
      <article className="px-4 pb-20">
        <div className="mx-auto max-w-2xl">
          <p className="text-sm font-bold text-slate-600"><time dateTime={isoDate(p.date)}>{p.date}</time> · by {profile.name}</p>
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-slate-700">
            {p.body.map((para) => <p key={para.slice(0, 24)}>{para}</p>)}
          </div>
          <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t-2 border-slate-200 pt-8">
            <Link href="/blog" className="inline-flex min-h-11 items-center gap-2 text-sm font-bold text-slate-900 hover:text-violet-600"><ArrowLeft size={16} aria-hidden="true" /> All articles</Link>
            {next.slug !== p.slug && <Link href={`/blog/${next.slug}`} className="inline-flex min-h-11 items-center gap-2 text-sm font-bold text-slate-900 hover:text-violet-600">Next: {next.title} <ArrowUpRight size={16} aria-hidden="true" /></Link>}
          </div>
        </div>
      </article>
    </main>
  );
}
