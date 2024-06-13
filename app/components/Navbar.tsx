import React from 'react'
import Link from 'next/link'

// Grid layout currently achieving desired result

export default function Navbar() {
  return (
    <nav className='sticky pb-10 bg-black text-white'>
      <div className='grid grid-cols-5 justify-items-center'>
          <Link href="/">HOME</Link>
          <Link href="/programming">PROGRAMMING</Link>
          <h1 className='pt-10'>CADE SMITH</h1>
          <Link href="/art">ART</Link>
          <Link href="/about">ABOUT</Link>
      </div>
    </nav>
  )
}
