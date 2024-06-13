import React from 'react'
import Link from 'next/link'

/* 
Add to footer:
- Privacy, terms

*/ 

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <div> 
      <div className="">  
      <Link href="https://github.com/cadesmith" className="">GITHUB</Link>
      <p>© {year} - Cade Smith</p>
      </div>
    </div>
  )
}
