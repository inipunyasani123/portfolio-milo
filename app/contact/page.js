'use client';
import { useEffect, useRef, useState } from 'react';
import { Mail, MapPin, Check, ListChecks } from 'lucide-react';
import { Emo } from '@/lib/emoji';
import PageHeader from '@/components/PageHeader';
import { profile } from '@/lib/data';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const doneRef = useRef(null);
  useEffect(() => { if (sent) doneRef.current?.focus(); }, [sent]);
  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e) => { e.preventDefault(); if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return; setSent(true); };
  const field = 'w-full rounded-2xl border-2 border-violet-100 bg-white px-4 py-3 text-base text-slate-900 transition placeholder:text-slate-500 focus:border-violet-400';
  const label = 'mb-1.5 block text-sm font-bold text-slate-700';

  return (
    <main>
      <PageHeader kicker="Contact" title="Let’s be" accent="friends! 👋" sub="Got a fun project or just want to say hi? Drop me a line." />
      <section className="px-4 py-8">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-[1fr_1.2fr]">
          <div className="space-y-4">
            <Info icon={Mail} label="Email" value={profile.email} href={`mailto:${profile.email}`} color="bg-amber-100" />
            <Info icon={MapPin} label="Location" value={profile.location} color="bg-sky-100" />
            <div className="tile bg-violet-100 p-5">
              <p className="flex items-center gap-2 text-sm font-bold text-violet-700">
                <ListChecks size={18} aria-hidden="true" /> A happy first message
              </p>
              <ul className="mt-2 space-y-1 text-sm text-slate-600">
                <li>What you are making, and who it is for.</li>
                <li>A link to something you love the look of.</li>
                <li>A rough date, if there is one.</li>
              </ul>
            </div>
          </div>
          <div>
            {sent ? (
              <div className="tile bg-white p-10 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-violet-600 text-white"><Check size={28} aria-hidden="true" /></div>
                <h2 ref={doneRef} tabIndex={-1} className="mt-4 text-2xl font-extrabold text-slate-900 outline-none"><Emo>Thanks for trying! 🎉</Emo></h2>
                <p className="mt-1 text-slate-600">Psst, {form.name}: this is a portfolio template, so nothing was actually sent. In a live version, your message pops straight into the owner’s inbox.</p>
                <button type="button" onClick={() => { setSent(false); setForm({ name: '', email: '', message: '' }); }} className="mt-6 min-h-11 rounded-full border-2 border-violet-200 px-6 py-2.5 text-sm font-bold text-violet-700 transition hover:bg-violet-50">Send another</button>
              </div>
            ) : (
              <form onSubmit={submit} className="tile space-y-4 bg-white p-6 md:p-8">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="f-name" className={label}>Name</label>
                    <input id="f-name" name="name" value={form.name} onChange={handle} autoComplete="name" required className={field} />
                  </div>
                  <div>
                    <label htmlFor="f-email" className={label}>Email</label>
                    <input id="f-email" type="email" name="email" value={form.email} onChange={handle} autoComplete="email" required className={field} />
                  </div>
                </div>
                <div>
                  <label htmlFor="f-message" className={label}>Your idea</label>
                  <textarea id="f-message" name="message" value={form.message} onChange={handle} placeholder="Stickers, a link page, an invitation…" rows={6} required className={`${field} resize-none`} />
                </div>
                <button type="submit" className="min-h-12 w-full rounded-full bg-violet-600 py-3.5 font-bold text-white transition hover:bg-violet-700"><Emo>Send it! 🚀</Emo></button>
                <p className="text-center text-xs font-semibold text-slate-600">Demo form: nothing is sent or stored.</p>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

function Info({ icon: Icon, label, value, href, color }) {
  const inner = (
    <div className={`tile tile-hover flex items-start gap-4 ${color} p-5`}>
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/70 text-slate-700"><Icon size={20} aria-hidden="true" /></span>
      <div>
        <p className="text-xs font-bold uppercase tracking-wide text-slate-600">{label}</p>
        <p className="mt-0.5 font-extrabold text-slate-900">{value}</p>
      </div>
    </div>
  );
  return href ? <a href={href}>{inner}</a> : inner;
}
