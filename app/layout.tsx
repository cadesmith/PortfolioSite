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
  
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 0.8,
  maximumScale: 1,
  userScalable: false,
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
