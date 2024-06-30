import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Images
// import githubImage from '../public/'
// <Image src:{} alt:"Github"/>


/* 
Add to footer:
- Social icons (Github, Linkedin, ??)
*/ 

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="grid h-10 mb-6 bg-black text-white justify-items-center">  
      <div className='flex'>
        <a href="https://github.com/cadesmith"> 
          <Image src={'/Github.png'} alt='' width={64} height={64} quality={100}/>
        </a>
        <a href="https://google.com"> 
          <Image src={'/Linkedin.png'} alt='' width={64} height={64} quality={100}/>
        </a>
        <a href="mailto:5cadesmith@gmail.com"> 
          <Image src={'/Email.png'} alt='' width={64} height={64} quality={100}/>
        </a>
      </div>
      <div> 
        <p>© {year} - Cade Smith</p>
      </div>
    </div>
  )
}
