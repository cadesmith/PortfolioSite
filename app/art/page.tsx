import React from 'react';
import Image from 'next/image';
import ArtTile from '../components/ArtTile';
import { bebas } from '../fonts';

export default function Art() {
    return (
      <main className='grid'>
        <div className='lg:mb-10 p-6 grid justify-items-center'>
          <h1 className={`${bebas.className} text-8xl`}>ART</h1>
        </div>
        <div className='grid md:flex h-96 mb-10 bg-white lg:mx-10'>
          <div className='md:w-1/3 bg-pink-500'>
            
          </div>
          <div className='w-2/3'>
            
          </div>
        </div>
        <div className='grid md:flex h-96 bg-white lg:mx-10'>
          <div className='md:w-2/3 order-2 md:order-none'> 

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
  