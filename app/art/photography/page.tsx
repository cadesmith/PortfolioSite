import React from "react";
import PhotoTile from "../../components/PhotoTile";

// Make three grid divs inside a grid for desired layout (masonry)

export default function Photography() {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-3 w-2/3 bg-white mt-14 mb-14">
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
