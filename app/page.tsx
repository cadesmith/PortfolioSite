import Image from "next/image";
import { Bebas_Neue } from 'next/font/google'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] })

export default function Home() {
  return (
    <main className="relative w-screen h-screen overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src='/Home/Fog_Lowscale.jpg'
          alt=''
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
      </div>
      <div className="relative z-10 flex items-center justify-center w-full h-full">
        <div className="text-center fade-in">
          <h1 className={bebas.className}>WELCOME</h1>
        </div>
      </div>
    </main>
  );
}
