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
    <div className='mt-10'>
      <nav className='h-24 bg-black text-white grid grid-cols-5 place-items-center'>
        <Link href="/">HOME</Link>
        <Link href="/projects">PROJECTS</Link>
        <div className='pt-4'>
          <h1 className={bebas.className}>CADE SMITH</h1>
        </div>
        <Link href="/art">ART</Link>
        <Link href="/about">ABOUT</Link>
      </nav>
    </div>
  )
}
