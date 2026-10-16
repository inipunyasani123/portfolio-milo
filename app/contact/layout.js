import { pageMeta, SITE_NAME } from '@/lib/seo';

// Judul pakai { default, template } supaya halaman di bawahnya tetap berakhiran " — Milo".
const meta = pageMeta({ title: 'Contact', description: "Tell Milo about your project in a short note. This is a portfolio template, so the form is a demo and does not send anything.", path: '/contact' });
export const metadata = { ...meta, title: { default: 'Contact', template: `%s — ${SITE_NAME}` } };

export default function Layout({ children }) {
  return children;
}
