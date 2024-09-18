import React from 'react'
import Link from 'next/link'
import clsx from 'clsx'

// Fonts
import { Bebas_Neue } from "next/font/google";

const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] })

// need to redisgn the navbar
// <h1 className={(bebas.className, 'text-black')}>.</h1>

export default function Navbar() {
  return (
    <nav className='container mt-6 mb-14 mx-auto h-24 flex justify-between items-center'>
      <div className='pt-4'>
        <h1 className={bebas.className}>CADE SMITH</h1>
      </div>
      <div className='space-x-10'>
        <Link href="/">HOME</Link>
        <Link href="/projects">PROJECTS</Link>
        <Link href="/art">ART</Link>
        <Link href="/about">ABOUT</Link>
      </div>
    </nav>
  )
}
