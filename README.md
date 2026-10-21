# Milo — Designer & Illustrator

Portfolio template for Milo, a fictional designer and illustrator: playful case studies that link to six live demo sites, plus notes on sticker shops, breathing animations, and storybook invitations.

**Demo live:** https://portfolio-milo.pintuweb.id

![Tangkapan layar](public/og.jpg)

> Template portfolio dengan persona fiktif. Semua proyek di dalamnya adalah demo live dari koleksi yang sama; tidak ada klien, testimoni, atau logo merek sungguhan. Formulir kontak hanya demo dan mengatakannya.

## Konsep

Persona fiktif Milo, desainer dan ilustrator. Ceria: ubin pastel membulat, aksen violet, font Fredoka, dan sedikit miring saat disentuh; mode gelap menggelapkan ubin tanpa kehilangan warnanya.

## Isi

- **6 studi kasus** (`/work/[slug]`): tantangan, yang dikerjakan, hasil, dan tautan ke situs live-nya.
- **3 artikel** (`/blog/[slug]`) tentang keputusan desain di proyek-proyek tersebut.
- Angka yang tampil (jumlah proyek, layanan, artikel) dihitung dari isi situs; lama berkarya adalah bagian dari persona fiktif. Tidak ada klaim jumlah klien atau tingkat kepuasan.
- Halaman 404 bergaya sendiri, judul halaman berpola `Halaman — Milo`, dan sitemap memuat setiap studi kasus dan artikel.

| Studi kasus | Demo live |
| --- | --- |
| Mella | https://linkinbio-mellow.pintuweb.id |
| Sena | https://linkinbio-zen.pintuweb.id |
| Nova Ardhana | https://linkinbio-nova.pintuweb.id |
| Atlas Studio | https://linkinbio-atlas.pintuweb.id |
| Aisyah’s aqiqah | https://undangan-aqiqah.pintuweb.id |
| Captain Fauzan | https://undangan-khitanan.pintuweb.id |

## Halaman

`/` · `/about` · `/work` · `/work/[slug]` · `/blog` · `/blog/[slug]` · `/contact`

## Gambar & kredit

- `public/images/work/*.webp` — mockup bingkai peramban + ponsel (tiga ponsel untuk halaman tautan dan undangan) berisi
  tangkapan layar demo live di tabel atas, diambil 18 Okt 2026; bingkainya digambar dengan gaya situs ini.
  `public/og/work/*.jpg` adalah versi 1200×630-nya untuk pratinjau tautan.
- `public/images/hero.webp`, `public/images/about.webp` — ilustrasi potret persona fiktif Milo buatan sendiri
  (gaya stiker pastel); sumber SVG-nya di `design/`. Bukan wajah orang sungguhan dan tidak memakai foto stok.
- `public/og.jpg` — tangkapan beranda 1200×630.

## Teknologi

- Next.js 15.5 (App Router) dan React 19
- Tailwind CSS v4
- JavaScript
- Framer Motion, Lucide (ikon), next-themes (mode gelap/terang)
- Font: Inter, Fredoka (next/font)
- SEO: metadata per halaman, Open Graph, JSON-LD (WebSite), sitemap.xml, dan robots.txt

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

Buka http://localhost:3000. Untuk build produksi: `npm run build` lalu `npm start`.

---

Bagian dari koleksi 7 template portfolio personal di [PortalPorto](https://www.pintuweb.id/website-portofolio). Dibuat oleh [PintuWeb](https://www.pintuweb.id), jasa pembuatan website.
