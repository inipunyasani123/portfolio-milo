import { projects, posts } from '@/lib/data';
import { SITE_URL, isoDate } from '@/lib/seo';

// Tanggal tetap (bukan waktu build) supaya lastmod hanya berubah bila isinya berubah.
const UPDATED = '2026-10-16';

export default function sitemap() {
  const halaman = ['', '/about', '/work', '/blog', '/contact', ...projects.map((p) => `/work/${p.slug}`)];
  return [
    ...halaman.map((h) => ({ url: SITE_URL + h, lastModified: UPDATED, changeFrequency: 'monthly', priority: h ? 0.7 : 1 })),
    ...posts.map((p) => ({ url: `${SITE_URL}/blog/${p.slug}`, lastModified: isoDate(p.date), changeFrequency: 'yearly', priority: 0.6 })),
  ];
}
