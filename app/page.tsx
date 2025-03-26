"use client"
import Image from "next/image";
import { Bebas_Neue } from 'next/font/google'
import { useState } from "react";


const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] })

export default function Home() {

  const [imageLoaded, setImageLoaded] = useState(false);
  
  return (
    <main className="relative w-screen h-screen overflow-hidden">
      <div className="absolute inset-0 z-10">
        <Image
          src='/Home/Fog_Lowscale.jpg'
          alt=''
          quality={100}
          fill={true}
          priority  
          className="object-cover"
          onLoad={() => setImageLoaded(true)}
        />
      </div>
      {imageLoaded && (
        <div className="relative z-10 grid items-center w-full h-full">
          <div className="text-center">
            <h1 className={`${bebas.className} fade-in`}>HI, I'M CADE</h1>
            <p className="fade-in2"> Welcome to my site.</p>
          </div>
        </div>
      )}
    </main>
  );
}
