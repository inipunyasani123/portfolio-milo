// Transisi tiap pindah halaman (template = remount per navigasi). Murni CSS: konten sudah
// terlihat sejak HTML pertama, jadi tidak ada layar kosong sebelum JavaScript jalan.
export default function Template({ children }) {
  return <div id="konten" className="page-in">{children}</div>;
}
