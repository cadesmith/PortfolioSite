import React from 'react';

// Components
import ArtPageTile from "../components/ArtPageTile";

export default function Art() {
    return (
      <main>
        <ArtPageTile 
          text={"Hello"}
        />
        <ArtPageTile 
          text={"Goodbye"}
        />
      </main>
    );
  }
  