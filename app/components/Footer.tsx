import React from 'react'
import Link from 'next/link'

/* 
Add to footer:
- Social icons (Github, Linkedin, ??)
*/ 

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="grid h-10 mb-6 bg-black text-white justify-items-center">  
      <div>
        <p>This is where socials will go</p>
      </div>
      <div> 
        <p>© {year} - Cade Smith</p>
      </div>
    </div>
  )
}
