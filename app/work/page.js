'use client';
import { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import PageHeader from '@/components/PageHeader';
import { projects } from '@/lib/data';

const CATS = ['All', ...Array.from(new Set(projects.map((p) => p.category)))];
const MotionLink = motion.create(Link);

export default function WorkPage() {
  const [cat, setCat] = useState('All');
  const reduce = useReducedMotion();
  const count = (c) => (c === 'All' ? projects.length : projects.filter((p) => p.category === c).length);
  const list = useMemo(() => (cat === 'All' ? projects : projects.filter((p) => p.category === cat)), [cat]);

  return (
    <main>
      <PageHeader kicker="Work" title="A pile of" accent="fun stuff 🎨" sub="Six live demo sites: four link pages for makers and teachers, and two family invitations. Each one opens a case study and the site itself." />
      <section className="px-4 py-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Filter projects">
            {CATS.map((c) => (
              <button key={c} type="button" onClick={() => setCat(c)} aria-pressed={cat === c} className={`inline-flex min-h-11 items-center gap-1.5 rounded-full px-4 text-sm font-bold transition ${cat === c ? 'bg-violet-600 text-white' : 'bg-white text-slate-600 shadow-sm hover:text-violet-700'}`}>
                {c} <span className="text-xs font-semibold opacity-90">{count(c)}</span>
              </button>
            ))}
          </div>
          <p className="sr-only" aria-live="polite">{list.length} projects shown</p>
          <motion.div layout={!reduce} className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout" initial={false}>
              {list.map((p) => (
                <MotionLink key={p.slug} href={`/work/${p.slug}`} layout={!reduce} initial={reduce ? false : { opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={reduce ? undefined : { opacity: 0, scale: 0.95 }} transition={{ duration: reduce ? 0 : 0.3 }} className={`tile tile-hover group block overflow-hidden ${p.color}`}>
                  <div className="relative m-3 h-48 overflow-hidden rounded-2xl">
                    <Image src={p.image} alt="" fill sizes="(max-width:640px) 100vw, 33vw" className="object-cover transition duration-500 group-hover:scale-105" />
                    <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-bold text-violet-700">{p.category}</span>
                  </div>
                  <div className="px-5 pb-5">
                    <div className="flex items-center justify-between">
                      <h2 className="font-extrabold text-slate-900">{p.title}</h2>
                      <span className="text-xs font-bold text-slate-600">{p.year}</span>
                    </div>
                    <p className="mt-1 text-sm text-slate-600">{p.desc}</p>
                  </div>
                </MotionLink>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
