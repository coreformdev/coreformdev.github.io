import type { Metadata } from "next";
import { JetBrains_Mono, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-sans-custom",
  subsets: ["latin", "cyrillic"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-mono-custom",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://coreformdev.github.io"),
  title: {
    default: "coreform | Сайты, MVP и дашборды под ключ",
    template: "%s | coreform",
  },
  description:
    "Премиальные лендинги, MVP для стартапов, дашборды и бизнес-сайты, которые приводят клиентов. Сильный дизайн, настоящий бэкенд, запуск от 1 недели. Фиксированная цена и сроки.",
  keywords: [
    "веб-разработчик",
    "премиальные лендинги",
    "MVP для стартапа",
    "разработка дашбордов",
    "бизнес-сайты",
    "Next.js разработчик",
    "full-stack разработчик",
  ],
  authors: [{ name: "Независимый веб-разработчик" }],
  creator: "Независимый веб-разработчик",
  openGraph: {
    title: "Сайты, MVP и дашборды, которые приводят клиентов",
    description:
      "Премиальные веб-продукты под ключ: сильный дизайн, настоящий бэкенд и запуск от 1 недели.",
    type: "website",
    locale: "ru_RU",
    siteName: "coreform",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "coreform — сайты, MVP и дашборды под ключ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Сайты, MVP и дашборды, которые приводят клиентов",
    description:
      "Премиальные веб-продукты под ключ: сильный дизайн, настоящий бэкенд и запуск от 1 недели.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${manrope.variable} ${jetBrainsMono.variable} h-full scroll-smooth bg-background antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
