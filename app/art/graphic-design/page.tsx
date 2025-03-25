import React from "react";
import DesignTile from "../../components/DesignTile";
import PageTitle from "../../components/PageTitle";

export default function GraphicDesign() {
    return (
      <main>
        <div className="grid justify-items-center">
          <PageTitle 
              title={'GRAPHIC DESIGN'}
          />
          <DesignTile
            title={'Homestead Valley Music Festival Poster'}
            date={'August 2024'}
            description={'A psychadelic inspired poster for the annual Homestead Valley Music Festival in Mill Valley, CA.'}
            image={'/Art/Graphic_Design/HVMF_Poster.jpg'}
          />
        </div>
      </main>
    );
  }