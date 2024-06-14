import React from 'react'
import Link from 'next/link'

/* 
Add to footer:
- Social icons (Github, Linkedin, ??)
*/ 

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <div> 
      <div className="text-white">  
        <Link href="https://github.com/cadesmith" className="">GITHUB</Link>
        <Link href="">LINKEDIN</Link>
        <p>© {year} - Cade Smith</p>
      </div>
    </div>
  )
}
