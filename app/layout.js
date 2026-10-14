import "./globals.css";
import { Inter, Fredoka } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";
import ThemeToggle from "@/components/ThemeToggle";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const fredoka = Fredoka({ variable: "--font-fredoka", subsets: ["latin"], weight: ["500", "600", "700"] });

const __jsonld = {"@context":"https://schema.org","@type":"WebSite","name":"Milo — Designer & Illustrator","description":"Portfolio template for Milo, a fictional designer and illustrator: playful case studies that link to six live demo sites, plus notes on sticker shops, breathing animations, and storybook invitations.","inLanguage":"en"};

export const metadata = {
  metadataBase: new URL("https://portfolio-milo.pintuweb.id"),
  title: { default: "Milo — Designer & Illustrator", template: "%s — Milo" },
  description: "Portfolio template for Milo, a fictional designer and illustrator: playful case studies that link to six live demo sites, plus notes on sticker shops, breathing animations, and storybook invitations.",
  applicationName: "Milo",
  keywords: ["illustrator", "product designer", "portfolio", "playful design", "illustration"],
  authors: [{ name: "Milo" }],
  creator: "Milo",
  publisher: "Milo",
  alternates: { canonical: "https://portfolio-milo.pintuweb.id" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio-milo.pintuweb.id",
    siteName: "Milo",
    title: "Milo — Designer & Illustrator",
    description: "Portfolio template for Milo, a fictional designer and illustrator: playful case studies that link to six live demo sites, plus notes on sticker shops, breathing animations, and storybook invitations.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Milo — Designer & Illustrator" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Milo — Designer & Illustrator",
    description: "Portfolio template for Milo, a fictional designer and illustrator: playful case studies that link to six live demo sites, plus notes on sticker shops, breathing animations, and storybook invitations.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${fredoka.variable}`} suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
          <ThemeToggle />
        </ThemeProvider>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(__jsonld) }} />
        </body>
    </html>
  );
}
