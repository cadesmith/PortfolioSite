import React from "react";
import DesignTile from "../../components/DesignTile";
import PageTitle from "../../components/PageTitle";

export default function GraphicDesign() {
    return (
      <main className="bg-white">
        <div className="grid justify-items-center gap-4 pb-4">
          <PageTitle 
              title={'GRAPHIC DESIGN'}
          />
          <DesignTile
            title={'Homestead Valley Music Festival Poster'}
            description={'A Robert Wesley Wilson inspired poster for the annual Homestead Valley Music Festival in Mill Valley, CA. Designed in Adobe Illustrator.'}
            image={'/Art/Graphic_Design/HVMF_Poster.jpg'}
          />
          <DesignTile
            title={'San Francisco Bridge Poster'}
            description={'A hypnotic poster of the Golden Gate Bridge in fog. Designed in Adobe Photoshop.'}
            image={'/Art/fogPoster.jpg'}
          />
        </div>
      </main>
    );
  }