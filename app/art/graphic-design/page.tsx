import React from "react";
import { bebas } from '../../fonts';
import DesignTile from "../../components/DesignTile";

export default function GraphicDesign() {
    return (
      <main>
        <div className=' grid justify-items-center'>
          <h1 className={`${bebas.className} text-8xl`}>GRAPHIC DESIGN</h1>
        </div>
        <div className="grid justify-items-center mt-6">
          <DesignTile
            title={'Homestead Valley Music Festival Poster'}
            date={'August 2024'}
            description={'A psychadelic inspired poster for the annual Homestead Valley Music Festival in Mill Valley, CA.'}
          />
        </div>
      </main>
    );
  }