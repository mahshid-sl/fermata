import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

const vazirmatn = Vazirmatn({
  variable: "--font-vazirmatn",
  subsets: ["arabic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | کافه و رستوران ",
    default: "فرماتا | کافه و رستوران  ",
  },
  description:
    "فرماتا، کافه‌رستورانی لوکس با موسیقی زنده و فضای آرام؛ جایی برای توقف زمان و لذت بردن از لحظه‌ها.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa">
      <body className={`${vazirmatn.variable} antialiased`}>
        <header>
          <Header />
        </header>
        <main> {children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
