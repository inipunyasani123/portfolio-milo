import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight, Check } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import { projects, getProject } from '@/lib/data';
import { pageMeta, caseDesc, SITE_URL } from '@/lib/seo';

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return { title: 'Project not found' };
  return pageMeta({ title: `Case study: ${p.title}`, description: caseDesc(p), path: `/work/${p.slug}`, image: `/og/work/${p.slug}.jpg` });
}

export default async function CaseStudy({ params }) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();
  const next = projects[(projects.findIndex((x) => x.slug === slug) + 1) % projects.length];

  const ld = {
    '@context': 'https://schema.org', '@type': 'CreativeWork', name: p.title, headline: `Case study: ${p.title}`, description: caseDesc(p),
    url: `${SITE_URL}/work/${p.slug}`, image: `${SITE_URL}/og/work/${p.slug}.jpg`, dateCreated: p.year, inLanguage: 'en',
    author: { '@id': `${SITE_URL}/#person` }, about: { '@type': 'WebSite', name: p.title, url: p.url },
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <PageHeader kicker={`${p.category} · ${p.year}`} title={p.title} accent="" sub={p.summary} />
      <section className="px-4 pb-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.6fr_1fr]">
          <div className="tile bg-white p-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image src={p.image} alt={`Screenshot of ${p.title}`} fill priority fetchPriority="high" sizes="(max-width:1024px) 100vw, 60vw" className="object-cover object-top" />
            </div>
          </div>
          <aside className="tile h-fit bg-violet-100 p-6">
            <dl className="space-y-4 text-sm">
              <div><dt className="text-xs font-bold uppercase tracking-wide text-slate-600">Project</dt><dd className="mt-0.5 font-bold text-slate-900">{p.client}</dd></div>
              <div><dt className="text-xs font-bold uppercase tracking-wide text-slate-600">Role</dt><dd className="mt-0.5 font-bold text-slate-900">{p.role}</dd></div>
              <div><dt className="text-xs font-bold uppercase tracking-wide text-slate-600">Year</dt><dd className="mt-0.5 font-bold text-slate-900">{p.year}</dd></div>
            </dl>
            <a href={p.url} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-violet-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-violet-700">
              Open the live site <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <p className="mt-3 text-xs text-slate-600">A live demo project. Opens in a new tab.</p>
          </aside>
        </div>

        <div className="mx-auto mt-14 grid max-w-6xl gap-10 md:grid-cols-3">
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900">The challenge</h2>
            <p className="mt-3 leading-relaxed text-slate-600">{p.challenge}</p>
          </div>
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900">What I did</h2>
            <ul className="mt-3 space-y-3">
              {p.work.map((w) => <li key={w} className="flex gap-2 text-slate-600"><Check size={18} className="mt-0.5 shrink-0 text-violet-600" aria-hidden="true" />{w}</li>)}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900">Outcome</h2>
            <p className="mt-3 leading-relaxed text-slate-600">{p.outcome}</p>
          </div>
        </div>

        <div className="mx-auto mt-16 flex max-w-6xl flex-wrap items-center justify-between gap-4 border-t-2 border-slate-200 pt-8">
          <Link href="/work" className="inline-flex min-h-11 items-center gap-2 text-sm font-bold text-slate-900 hover:text-violet-600"><ArrowLeft size={16} aria-hidden="true" /> All work</Link>
          <Link href={`/work/${next.slug}`} className="inline-flex min-h-11 items-center gap-2 text-sm font-bold text-slate-900 hover:text-violet-600">Next: {next.title} <ArrowUpRight size={16} aria-hidden="true" /></Link>
        </div>
      </section>
    </main>
  );
}
