/** @type {import('next').NextConfig} */
const nextConfig = {
  // Gambar statis, tanpa Image Optimization Vercel: kuota tim habis (/_next/image membalas 402 dan gambar rusak).
  // Varian WebP di public/_img/ dibuat dengan `node scripts/static-images.mjs . --dirs public/images`;
  // jalankan ulang setiap menambah/mengganti gambar di public/images.
  images: {
    loader: 'custom',
    loaderFile: './image-loader.js',
    deviceSizes: [640, 828, 1080, 1280, 1920],
    imageSizes: [64, 128, 256, 384],
  },
  async headers() {
    return [{ source: '/_img/:path*', headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }] }];
  },
};

export default nextConfig;
