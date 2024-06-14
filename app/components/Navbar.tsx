import React from 'react'
import Link from 'next/link'

// Fonts
import { Bebas_Neue } from "next/font/google";

const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] })

// Grid layout currently achieving desired result

export default function Navbar() {
  return (
    <nav className='sticky h-24 bg-black text-white grid grid-cols-5 place-items-center'>
      <Link href="/">HOME</Link>
      <Link href="/programming">PROGRAMMING</Link>
      <div className='text-6xl'>
        <h1 className={bebas.className}>CADE SMITH</h1>
      </div>
      <Link href="/art">ART</Link>
      <Link href="/about">ABOUT</Link>
    </nav>
  )
}
