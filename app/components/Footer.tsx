import React from 'react';
import Image from 'next/image';

/* 
Add to footer:
- Social icons (Github, Linkedin, ??)
*/ 

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="grid h-10 mt-6 mb-10 bg-black justify-items-center">  
      <div className='flex space-x-2 pb-2'>
        <a href="https://github.com/cadesmith"> 
          <Image src={'/Github.png'} alt='' width={30} height={30} quality={100}/>
        </a>
        <a href="https://google.com"> 
          <Image src={'/Linkedin.png'} alt='' width={30} height={30} quality={100}/>
        </a>
        <a href="mailto:5cadesmith@gmail.com"> 
          <Image src={'/Email.png'} alt='' width={30} height={30} quality={100}/>
        </a>
      </div>
      <div> 
        <p className='text-sm'>© {year} - Cade Smith</p>
      </div>
    </div>
  )
}
