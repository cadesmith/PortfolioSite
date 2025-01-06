import React from "react";
import PhotoTile from "../../components/PhotoTile";
import Link from "next/link";
import { bebas } from '../../fonts';

export default function Photography() {
  return (
    <div className="grid justify-items-center w-screen">
      <div className='pb-6 grid justify-items-center'>
        <h1 className={`${bebas.className} text-8xl`}>PHOTOGRAPHY</h1>
      </div>
      <div>
        <p>To view all of my photos and purchase prints, visit my photography website:</p>
      </div>
    </div>
  )
}
