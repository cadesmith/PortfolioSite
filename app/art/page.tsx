import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { bebas } from '../fonts';

export default function Art() {
    return (
      <main className='grid'>
        <div className='pb-6 grid justify-items-center'>
          <h1 className={`${bebas.className} text-8xl`}>ART</h1>
        </div>
        <div className='grid md:flex h-96 mb-10 lg:mx-10'>
          <div className='md:w-1/3 bg-pink-500'>
          </div>
          <div className='lg:ml-10 bg-gray-500 lg:w-2/3 lg:pl-10 lg:content-center'>
            <div>
              <h1>PHOTOGRAPHY</h1>
              <Link href='/art/photography' className='text-5xl mb-4 transition-transform duration-300 
              ease-in-out hover:translate-x-1/5'>&#10132;</Link>
            </div>
          </div>
        </div>
        <div className='grid md:flex h-96 lg:mx-10'>
          <div className='lg:w-2/3 lg:mr-10 order-2 bg-gray-500 md:order-none lg:pl-10 lg:content-center'> 
            <div> 
              <h1>GRAPHIC DESIGN</h1>
              <Link href='/art/photography' className='text-5xl mb-4 transition-transform duration-300 
              ease-in-out hover:translate-x-1/5'>&#10132;</Link>
            </div>
          </div>
          <div className='order-1 md:order-none md:w-1/3 bg-pink-500'>

          </div>
        </div>
        
      </main>
    );
  }

  /* <div className='mt-0 md:mt-6 mb-16 border-b-2 p-6 grid justify-items-center'>
          <h1 className={`${bebas.className} text-8xl`}>ART</h1>
        </div>
        <div className='grid grid-cols-1 mx-4 gap-y-6 md:flex'>
          <ArtTile 
            category={"PHOTOGRAPHY"}
            link={"/art/photography"}
            image={"/Ridgecrest.jpg"}
          />
          <ArtTile 
            category={"GRAPHIC DESIGN"}
            link={"/art/graphic-design"}
            image={"/TwoPeaks.jpg"}
          />
        </div>

  */
  