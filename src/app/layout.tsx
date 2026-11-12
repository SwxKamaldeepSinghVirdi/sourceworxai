import type { Metadata } from "next";
import { Poppins, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sourceworx.ai"),
  title: {
    default: "SourceWorx | The 360° AI Company for the Enterprise",
    template: "%s",
  },
  description:
    "AI for growth, AI for productivity and AI governance from one company. Industry AI apps, RoomOS AI, ZTD and Singularity, live in 90 days.",
  keywords: [
    "enterprise AI company",
    "AI for business growth",
    "AI productivity platform",
    "AI governance platform",
    "enterprise AI solutions India",
  ],
  authors: [{ name: "SourceWorx AI" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "SourceWorx AI",
    title: "SourceWorx | The 360° AI Company for the Enterprise",
    description:
      "AI for growth, AI for productivity and AI governance from one company. Live in 90 days.",
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "SourceWorx AI",
              alternateName: "SourceWorx",
              url: "https://www.sourceworx.ai/",
              email: "hello@sourceworx.ai",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Noida",
                addressRegion: "Uttar Pradesh",
                addressCountry: "IN",
              },
            }),
          }}
        />
      </head>
      <body className="flex min-h-screen flex-col bg-white font-sans text-slate-900 antialiased">
        
        {/* TOP BAR (From Screenshot) */}
        <div className="bg-[#0b1b36] text-white text-[11px] font-medium py-2 px-4 hidden md:block">
          <div className="mx-auto max-w-7xl flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span>The 360° AI Company</span>
              <span className="text-slate-500">|</span>
              <span className="text-teal-400">GrowthWorx • FlowWorx • TrustWorx</span>
            </div>
            <div className="flex items-center gap-4">
              <a href="tel:+14156297350" className="flex items-center gap-1.5 hover:text-teal-400 transition-colors">
                <span className="text-slate-400">📞</span> +1 (415) 629-7350
              </a>
              <span className="text-slate-500">|</span>
              <a href="mailto:sales@sourceworx.ai" className="flex items-center gap-1.5 hover:text-teal-400 transition-colors">
                <span className="text-slate-400">✉️</span> sales@sourceworx.ai
              </a>
            </div>
          </div>
        </div>

        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-slate-900 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
        >
          Skip to main content
        </a>
        
        <Navbar />
        
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}