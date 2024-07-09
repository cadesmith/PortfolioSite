import React from "react";
import PhotoTile from "../../components/PhotoTile";

// Make three grid divs inside a grid for desired layout (masonry)

export default function Photography() {
  return (
    <div className="grid justify-items-center w-screen mt-14">
      <div className="w-2/3 mb-10 text-center"> 
        <p>My photography is heavily influenced by the work of Ansel Adams, who in my eyes so faithfully captured the spirit of
          nature and the American West in monochromatic hues. I work primarily with a digital camera, processing my images in 
          post in order to draw out my underlying vision. 
        </p>
      </div>
      <div className="grid grid-cols-3 w-2/3 bg-white mb-14">
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
