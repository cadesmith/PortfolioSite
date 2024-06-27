import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import { Bebas_Neue } from "next/font/google";
import "./global.css";

// components 
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Font constant
const barlow = Barlow({ weight: "300", subsets: ["latin"] });
const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Cade Smith Portfolio Site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={barlow.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
