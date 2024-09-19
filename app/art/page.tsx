import React from 'react';
import ArtTile from '../components/ArtTile';

export default function Art() {
    return (
      <main className='grid grid-cols-1 mx-4 gap-y-6 md:grid-cols-2 md:mx-0'>
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
      </main>
    );
  }
  