'use client';
import { useEffect, useRef, useState } from 'react';

// Muncul saat masuk layar: IntersectionObserver + transisi CSS (tanpa framer-motion, jadi JS beranda
// lebih ringan). Gerak dimatikan bila pengguna meminta gerak dikurangi.
export default function Reveal({ children, delay = 0, y = 24, className = '' }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setShown(true); return; }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setShown(true); io.disconnect(); } }, { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal${shown ? ' is-shown' : ''}${className ? ' ' + className : ''}`} style={{ '--reveal-y': `${y}px`, transitionDelay: shown && delay ? `${delay}s` : undefined }}>
      {children}
    </div>
  );
}
