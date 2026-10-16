// Metadata per halaman: judul, deskripsi, canonical, Open Graph, dan Twitter yang selalu seragam.
// Next.js tidak menggabungkan openGraph/twitter dari layout induk, jadi tiap halaman mengisi semuanya.
export const SITE_URL = 'https://portfolio-milo.pintuweb.id';
export const SITE_NAME = 'Milo';
export const SITE_TITLE = 'Milo — Designer & Illustrator';
export const SITE_DESC = 'Portfolio template for Milo, a fictional designer and illustrator: playful case studies of six live demo sites, plus notes on stickers and invitations.';
const OG = { url: '/og.jpg', width: 1200, height: 630, alt: SITE_TITLE };

export function pageMeta({ title, description, path = '/', image, type = 'website', published }) {
  const full = title ? `${title} — ${SITE_NAME}` : SITE_TITLE;
  const img = image ? { url: image, width: 1200, height: 630, alt: full } : OG;
  return {
    ...(title ? { title } : {}),
    description,
    alternates: { canonical: path },
    openGraph: {
      type, locale: 'en_US', siteName: SITE_NAME, url: path, title: full, description, images: [img],
      ...(published ? { publishedTime: published, authors: [SITE_NAME] } : {}),
    },
    twitter: { card: 'summary_large_image', title: full, description, images: [img.url] },
  };
}

// "Sep 15, 2026" -> "2026-09-15"
export function isoDate(s) {
  const d = new Date(`${s} 12:00 UTC`);
  return Number.isNaN(d.getTime()) ? undefined : d.toISOString().slice(0, 10);
}

// Deskripsi studi kasus: ringkasan + tantangan, 50–155 karakter.
export function caseDesc(p) {
  const full = `${p.summary} ${p.challenge}`;
  if (full.length <= 155) return full;
  return p.summary.length >= 50 ? p.summary : full.slice(0, 152).replace(/\s+\S*$/, '') + '…';
}
