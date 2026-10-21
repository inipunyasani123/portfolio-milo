import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/ui/Reveal';
import { profile, skills, experience, education } from '@/lib/data';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({ title: 'About', description: "About Milo, a fictional designer and illustrator: soft illustrations, link pages, and invitations for people who make, teach, and celebrate.", path: '/about' });

export default function AboutPage() {
  return (
    <main>
      <PageHeader kicker="About" title="A little about" accent="Milo 🙂" sub={profile.bioShort} />

      <section className="px-4 py-10">
        <div className="mx-auto grid max-w-6xl items-center gap-6 md:grid-cols-2">
          <Reveal>
            <div className="tile relative aspect-[4/5] w-full overflow-hidden">
              <Image src={profile.about} alt={profile.aboutAlt} fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="tile bg-amber-100 p-8">
              <h2 className="text-3xl font-extrabold text-slate-900">Color, character &amp; smiles 😄</h2>
              <div className="mt-4 space-y-4 leading-relaxed text-slate-700">
                {profile.bio.map((p, i) => <p key={i}>{p}</p>)}
              </div>
              <Link href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-full bg-violet-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-violet-700">
                Ask for a CV <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-4 py-10">
        <div className="mx-auto max-w-6xl">
          <Reveal><h2 className="text-3xl font-extrabold text-slate-900">My toolbox 🧰</h2></Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {skills.map((s, i) => (
              <Reveal key={s.group} delay={i * 0.1}>
                <div className={`tile h-full ${s.color} p-6`}>
                  <h3 className="mb-4 text-lg font-extrabold text-slate-900">{s.group}</h3>
                  <ul className="flex flex-wrap gap-2">
                    {s.items.map((it) => <li key={it} className="rounded-full bg-white/70 px-3 py-1.5 text-sm font-semibold text-slate-700">{it}</li>)}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-10">
        <div className="mx-auto max-w-6xl">
          <Reveal><h2 className="text-3xl font-extrabold text-slate-900">Where I’ve been</h2></Reveal>
          <div className="mt-8 grid gap-4">
            {experience.map((e, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="tile flex flex-col gap-2 bg-white p-6 md:flex-row md:items-center md:gap-8">
                  <span className="shrink-0 rounded-full bg-violet-100 px-4 py-1.5 text-sm font-bold text-violet-700 md:w-40">{e.period}</span>
                  <div>
                    <h3 className="text-lg font-extrabold text-slate-900">{e.role} <span className="font-medium text-slate-500">· {e.company}</span></h3>
                    <p className="mt-1 text-slate-600">{e.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12"><h2 className="text-3xl font-extrabold text-slate-900">Schooling 🎓</h2></Reveal>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {education.map((e, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="tile bg-sky-100 p-6">
                  <span className="text-xs font-bold text-slate-600">{e.period}</span>
                  <h3 className="mt-2 text-lg font-extrabold text-slate-900">{e.degree}</h3>
                  <p className="text-sm text-slate-600">{e.school}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
