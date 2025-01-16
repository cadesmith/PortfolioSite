import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { bebas } from '../fonts';

export default function Art() {
    return (
      <main className=''>
        <div className='pb-6 grid justify-items-center'>
          <h1 className={`${bebas.className} text-8xl`}>ART</h1>
        </div>
        
        <div className='flex'>
          <div className='grid'>
            <div className='h-96 bg-pink-500'></div>
          </div>
        </div>




        <div className='flex'>
          <div className='grid mb-10 mx-10'>
            <div className='h-96 bg-pink-500'>
            </div>
            <div className=' bg-white text-black h-48 md:h-96 sm:pt-4 content-center'>
              <h1>PHOTOGRAPHY</h1>
              <div className='mb-4 pl-2 transition-transform duration-300 ease-in-out hover:translate-x-5'>
                <Link 
                  href='/art/photography' 
                  className='text-5xl'>
                  &#10132;
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='grid md:flex h-96 mx-10'>
          <div className='lg:w-2/3 lg:mr-10 order-2 bg-white text-black h-48 md:h-96 md:order-none sm:pt-4 pr-10 pl-10 content-center'> 
            <h1>GRAPHIC DESIGN</h1>
            <div className='mb-4 pl-2 transition-transform duration-300 ease-in-out hover:translate-x-5'>
              <Link 
                href='/art/photography' 
                className='text-5xl'>
                &#10132;
              </Link>
            </div>
          </div>
          <div className='order-1 md:order-none md:w-1/3 bg-pink-500'>

          </div>
        </div>
      </main>
    );
  }

  