import Image from 'next/image'
import React from 'react'
import { Bebas_Neue } from 'next/font/google'
import Bubble from './Bubble'

const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] })

export default function Project({ title, description, stack }: any) {
  return (
    <div className="grid px-10 sm:px-0">
      <div className="relative border-l-2 border-white">                  
          <div className="mb-24 ml-10">            
              <span className="absolute flex items-center justify-center w-6 h-6 bg-white rounded-full mt-5 -start-3 ring-7 ring-white">
              </span>
              <div>
                <h1 className={bebas.className}>{title}</h1>
              </div>
              <div className="text-xl mt-2">
                <p>{description || "PROJECT DESCRIPTION"}</p>
              </div>
              <div className="mt-4 gap-2 flex flex-wrap"> 
                {stack.map((tech: string, index: number) => (
                  <Bubble key={index} tech={tech} />
              ))}
              </div>
          </div>
      </div>
    </div>
  );
}

