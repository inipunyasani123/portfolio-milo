'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { nav } from '@/lib/data';
import { Emo } from '@/lib/emoji';

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isActive = (href) => (href === '/' ? pathname === '/' : !!pathname && pathname.startsWith(href));
  const links = nav.slice(0, -1);

  // Esc menutup menu ponsel; pindah halaman juga menutupnya.
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4">
      <nav aria-label="Main" className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-violet-100 bg-white/90 px-5 py-3 shadow-[0_10px_30px_-12px_rgba(80,60,160,0.2)] backdrop-blur">
        <Link href="/" className="flex items-center gap-2 text-lg font-extrabold tracking-tight text-violet-700">
          <span className="grid h-7 w-7 place-items-center rounded-full bg-violet-600 text-sm text-white">M</span> Milo
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} aria-current={isActive(l.href) ? 'page' : undefined}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${isActive(l.href) ? 'bg-violet-100 text-violet-700' : 'text-slate-600 hover:bg-slate-100'}`}>
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="ml-1 rounded-full bg-violet-600 px-5 py-2 text-sm font-bold text-white transition hover:bg-violet-700">
            <Emo>Say hi 👋</Emo>
          </Link>
        </div>

        <button type="button" className="-mr-2 grid h-11 w-11 place-items-center rounded-xl text-violet-700 md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Menu" aria-expanded={open} aria-controls="menu-ponsel">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
          <div
            id="menu-ponsel"
            className="menu-in mx-auto mt-2 max-w-6xl overflow-hidden rounded-3xl border border-violet-100 bg-white p-3 shadow-lg md:hidden"
          >
            {nav.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} aria-current={isActive(l.href) ? 'page' : undefined} className={`block rounded-xl px-3 py-2.5 text-sm font-semibold ${isActive(l.href) ? 'bg-violet-100 text-violet-700' : 'text-slate-600 hover:bg-slate-100'}`}>
                {l.label}
              </Link>
            ))}
          </div>
      )}
    </header>
  );
}
