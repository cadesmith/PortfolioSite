import React from "react";
import PhotoTile from "../../components/PhotoTile";
import Link from "next/link";

// Make three grid divs inside a grid for desired layout (masonry)

export default function Photography() {
  return (
    <div className="grid justify-items-center w-screen">
      <div className="flexbox"> 
        View all my photography
        <Link href='https//www.cadesmithphoto.com'>here</Link>
      </div>
      <div className="grid grid-cols-3 w-2/3 bg-white">
        <div className="grid">
          <PhotoTile />
        </div>
        <div className="grid">
          <PhotoTile />
        </div>
        <div className="grid">
          <PhotoTile />
        </div>
      </div>
    </div>
  )
}
