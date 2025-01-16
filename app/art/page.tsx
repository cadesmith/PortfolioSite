import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ArtTile from '../components/ArtTile';
import { bebas } from '../fonts';

export default function Art() {
    return (
      <main>
        <div className='pb-6 grid justify-items-center'>
          <h1 className={`${bebas.className} text-8xl`}>ART</h1>
        </div>
        
        <div className='flex w-full space-x-14 px-16'>
          
          <ArtTile 
            category={'PHOTOGRAPHY'}
            link={'art/photography'}
          />

          <ArtTile 
            category={'GRAPHIC DESIGN'}
            link={'art/graphic-design'}
          />

        </div>
        
      </main>
    );
  }

  