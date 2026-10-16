import { pageMeta, SITE_NAME } from '@/lib/seo';

// Judul pakai { default, template } supaya halaman di bawahnya tetap berakhiran " — Milo".
const meta = pageMeta({ title: 'Work', description: "Six case studies by Milo: a sticker shop, calm link pages, a studio site, and storybook invitations, each with a link to the live demo.", path: '/work' });
export const metadata = { ...meta, title: { default: 'Work', template: `%s — ${SITE_NAME}` } };

export default function Layout({ children }) {
  return children;
}
