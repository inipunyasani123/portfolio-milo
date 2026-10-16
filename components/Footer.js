import Link from 'next/link';
import { profile, nav } from '@/lib/data';
import { Emo } from '@/lib/emoji';

export default function Footer() {
  return (
    <footer className="px-4 py-14">
      <div className="mx-auto max-w-6xl">
        <div className="tile mb-12 bg-gradient-to-br from-violet-600 to-fuchsia-600 p-8 text-white md:p-12">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h2 className="text-3xl font-extrabold leading-tight md:text-4xl"><Emo>Let’s make something fun! 🎉</Emo></h2>
              <p className="mt-2 text-white">Got a playful idea? I’d love to hear it.</p>
            </div>
            <Link href="/contact" className="inline-flex min-h-12 shrink-0 items-center rounded-full bg-white px-7 font-bold text-violet-700 transition hover:bg-violet-50">
              Start a project →
            </Link>
          </div>
        </div>

        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="flex items-center gap-2 text-xl font-extrabold text-violet-700">
              <span className="grid h-7 w-7 place-items-center rounded-full bg-violet-600 text-sm text-white">M</span> Milo
            </h3>
            <p className="mt-3 max-w-xs text-sm text-slate-600">{profile.role} · {profile.location}.</p>
            <a href={`mailto:${profile.email}`} className="mt-2 inline-block py-1.5 text-sm font-bold text-violet-700 hover:underline">{profile.email}</a>
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-slate-500">Menu</p>
            <ul className="mt-2">
              {nav.map((l) => <li key={l.href}><Link href={l.href} className="inline-block py-1.5 text-sm font-medium text-slate-600 transition hover:text-violet-600">{l.label}</Link></li>)}
            </ul>
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-slate-500">About this site</p>
            <p className="mt-3 text-sm text-slate-600">A portfolio template with a fictional persona. Every project links to a live demo site; there are no real clients or testimonials here.</p>
          </div>
        </div>

        <p className="mt-12 text-center text-sm text-slate-500"><Emo>{`© ${new Date().getFullYear()} Milo. Made with love & coffee. ☕`}</Emo></p>
      </div>
    </footer>
  );
}
