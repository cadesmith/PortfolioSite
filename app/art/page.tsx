import React from 'react';
import ArtTile from '../components/ArtTile';

export default function Art() {
    return (
      <main className='flex justify-center'>
        <ArtTile 
          category={"PHOTOGRAPHY"}
        />
        <ArtTile 
          category={"GRAPHIC DESIGN"}
        />
      </main>
    );
  }
  