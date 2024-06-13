import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className='pb-12 bg-black text-white'>
      <div className='flex justify-around'>
          <Link href="/">HOME</Link>
          <Link href="/programming">PROGRAMMING</Link>
          <Link href="/art">ART</Link>
          <Link href="/about">ABOUT</Link>
      </div>
    </nav>
  )
}
