"use client"
import Image from "next/image";
import { Bebas_Neue } from 'next/font/google'
import gsap from 'gsap';
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
        <div className="relative z-10 flex items-center justify-center w-full h-full">
          <div className="text-center fade-in">
            <h1 className={bebas.className}>HI, I'M CADE.</h1>
          </div>
        </div>
      )}
    </main>
  );
}
