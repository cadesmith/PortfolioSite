import type { Metadata } from "next";
import type { Viewport } from "next";
import { Barlow } from "next/font/google";
import "./global.css";

// components 
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Font constant
const barlow = Barlow({ weight: "300", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cade Smith Portfolio Site",
  description: "A website to display Cade Smith's coding projects and art.",
  openGraph: {
    title: 'Next.js',
    description: 'The React Framework for the Web',
    url: 'https://cadesmith.dev',
    siteName: 'Next.js',
    locale: 'en_US',
    type: 'website'
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={barlow.className}>
          <Navbar />
          {children}
          <Footer />
      </body>
    </html>
  );
}
