import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

// Global web fonts: Inter for body, Playfair for headings
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});
const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

// SEO metadata: title/description/keywords + OpenGraph/Twitter + icons
// Social share image must be placed at public/share.png (1200x630 recommended)
export const metadata: Metadata = {
  metadataBase: new URL("https://novotestamentoparamulheres.com.br"),
  title: "Devocional do Novo Testamento para Mulheres — Ebook Oficial",
  description:
    "Ebook devocional do Novo Testamento para mulheres: clareza bíblica, conexões históricas, aplicações práticas e orações para uma fé viva.",
  keywords: [
    "devocional",
    "novo testamento",
    "mulheres cristãs",
    "estudo bíblico",
    "ebook cristão",
    "fé",
    "oração",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Devocional do Novo Testamento para Mulheres — Ebook Oficial",
    description:
      "Um devocional completo para mulheres: estudos profundos, reflexões, orações e bônus exclusivos.",
    url: "/",
    siteName: "Devocional NT para Mulheres",
    images: [
      {
        url: "/share.png",
        width: 1200,
        height: 630,
        alt: "Devocional do Novo Testamento para Mulheres",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Devocional do Novo Testamento para Mulheres",
    description:
      "Estudos, reflexões e bênçãos para mulheres que desejam entender melhor a Bíblia.",
    images: ["/share.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      {/* Body receives the CSS variable classes for fonts */}
      <body className={`${inter.variable} ${playfair.variable}`}>
        {children}
      </body>
    </html>
  );
}
