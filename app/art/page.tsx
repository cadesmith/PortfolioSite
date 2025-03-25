import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ArtTile from '../components/ArtTile';
import { bebas } from '../fonts';
import PageTitle from '../components/PageTitle';

export default function Art() {
    return (
      <main>
        
        <div className='flex justify-center'> 
          <PageTitle 
            title={'ART'}
          />
        </div>

        <div className='grid 2xl:flex w-full 2xl:space-x-8 2xl:px-16'>
          
          <ArtTile 
            category={'PHOTOGRAPHY'}
            link={'art/photography'}
            image={'/Art/Electrivity.jpg'}
          />

          <div className='h-14'>
          </div>

          <ArtTile 
            category={'GRAPHIC DESIGN'}
            link={'art/graphic-design'}
          />

        </div>
        
      </main>
    );
  }

  