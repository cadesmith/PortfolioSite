import React from 'react'
import { bebas } from '../fonts'
import Bubble from './Bubble'

export default function Project({ title, description, stack }: any) {
  return (
    <div className="grid px-10">             
          <div className="border-4 border-black p-6 text-black">            
              <div className='pt-px'>
                <h1 className={`${bebas.className} text-5xl`}>{title}</h1>
              </div>
              <div className="text-md mt-2">
                <p>{description || "PROJECT DESCRIPTION"}</p>
              </div>
              <div className="mt-4 gap-2 flex flex-wrap"> 
                {stack.map((tech: string, index: number) => (
                  <Bubble key={index} tech={tech} />
              ))}
              </div>
          </div>
    </div>
  );
}

