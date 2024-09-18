import Image from 'next/image'
import React from 'react'
import { Bebas_Neue } from 'next/font/google'
import Bubble from './Bubble'

const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] })

export default function Project({ title, description, image, stack }: any) {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col md:flex-row w-full md:w-2/3">
        <div className="flex flex-col w-full md:w-2/3 h-auto md:h-80">
          <div>
            <h1 className={bebas.className}>{title}</h1>
          </div>
          <div className="text-xl mt-2">
            <p>{description || "PROJECT DESCRIPTION"}</p>
          </div>
          <div className="mt-4 space-x-2 flex flex-wrap"> 
            {stack.map((tech: string, index: number) => (
              <Bubble key={index} tech={tech} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

