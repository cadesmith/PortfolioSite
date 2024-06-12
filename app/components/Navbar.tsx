import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav>
          <h1> Mysite </h1>
          <Link href="/">Home</Link>
          <Link href="/programming">Programming</Link>
          <Link href="/art">ART</Link>
          <Link href="/about">ABOUT</Link>
    </nav>
  )
}
