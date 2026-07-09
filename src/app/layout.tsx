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
  metadataBase: new URL("https://example.com"),
  title: {
    default: "Независимый веб-разработчик | Премиальные сайты, MVP и дашборды",
    template: "%s | Независимый веб-разработчик",
  },
  description:
    "Премиальные лендинги, MVP для стартапов, дашборды и бизнес-сайты с сильным дизайном, настоящим бэкендом и чистой архитектурой.",
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
    title: "Премиальные сайты, MVP и дашборды",
    description:
      "Независимый веб-разработчик, который делает веб-продукты, готовые к реальной эксплуатации: сильный фронтенд, настоящий бэкенд и чистая архитектура.",
    type: "website",
    locale: "ru_RU",
  },
  twitter: {
    card: "summary_large_image",
    title: "Премиальные сайты, MVP и дашборды",
    description:
      "Веб-продукты, готовые к реальной эксплуатации, с сильным дизайном, настоящим бэкендом и чистой архитектурой.",
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
      className={`${manrope.variable} ${jetBrainsMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
