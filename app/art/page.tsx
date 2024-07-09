import React from 'react';
import ArtTile from '../components/ArtTile';

export default function Art() {
    return (
      <main className='flex justify-center'>
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
  