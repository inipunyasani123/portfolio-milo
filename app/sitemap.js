import { projects, posts } from '@/lib/data';

const URL = 'https://portfolio-milo.pintuweb.id';

export default function sitemap() {
  const now = new Date();
  const halaman = ['', '/about', '/work', '/blog', '/contact', ...projects.map((p) => `/work/${p.slug}`), ...posts.map((p) => `/blog/${p.slug}`)];
  return halaman.map((h) => ({ url: URL + h, lastModified: now, changeFrequency: 'monthly', priority: h ? 0.7 : 1 }));
}
