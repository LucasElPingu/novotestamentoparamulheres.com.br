import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Devocional do Novo Testamento para Mulheres — Ebook Oficial",
  description:
    "Ebook devocional do Novo Testamento para mulheres: clareza bíblica, conexões históricas, aplicações práticas e orações para uma fé viva.",
  openGraph: {
    title: "Devocional do Novo Testamento para Mulheres — Ebook Oficial",
    description:
      "Um devocional completo para mulheres: estudos profundos, reflexões, orações e bônus exclusivos.",
    url: "https://novotestamentoparamulheres.com.br",
    siteName: "Devocional NT para Mulheres",
    images: [
      {
        url: "https://cdn.builder.io/api/v1/image/assets%2Ff441341fa0c8439489d236cd7d5226e2%2F1bc4758dc03b4a6cbdcef0ff2a78198d?format=webp&width=1200",
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
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2Ff441341fa0c8439489d236cd7d5226e2%2F1bc4758dc03b4a6cbdcef0ff2a78198d?format=webp&width=1200",
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${playfair.variable}`}>
        {children}
      </body>
    </html>
  );
}
