import React from "react";
import DesignTile from "../../components/DesignTile";

export default function GraphicDesign() {
    return (
      <main>
        <div className="grid justify-items-center mt-14">
          <DesignTile></DesignTile>
          <DesignTile></DesignTile>
          <DesignTile></DesignTile>
        </div>
      </main>
    );
  }