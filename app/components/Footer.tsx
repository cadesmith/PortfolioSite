import React from 'react';
import Image from 'next/image';

/* 
Add to footer:
- Social icons (Github, Linkedin, ??)
*/ 

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="grid h-10 mb-16 bg-black justify-items-center">  
      <div className='flex space-x-4 pb-2'>
        <a href="https://github.com/cadesmith"> 
          <Image src={'/Github.png'} alt='' width={40} height={40} quality={100}/>
        </a>
        <a href="https://google.com"> 
          <Image src={'/Linkedin.png'} alt='' width={40} height={40} quality={100}/>
        </a>
        <a href="mailto:5cadesmith@gmail.com"> 
          <Image src={'/Email.png'} alt='' width={40} height={40} quality={100}/>
        </a>
      </div>
      <div> 
        <p>© {year} - Cade Smith</p>
      </div>
    </div>
  )
}
