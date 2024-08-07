import Image from 'next/image'
import React from 'react'
import { Bebas_Neue } from 'next/font/google'
import Bubble from './Bubble'

const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] })

export default function Project({ title, description, image, stack}: any) {
  return (
    <div className='flex justify-center'>
      <div className='flex w-2/3 py-4'>
          <div className="bg-white text-black w-80 h-80 mr-14">
            I'm a square that will be an image
          </div>
          <div className="flex-col w-2/3 h-80">
            <div>
              <h1 className={bebas.className}>{title}</h1>
            </div>
            <div className='text-xl mt-2'>
              <p>PROJECT DESCRIPTION</p>
            </div>
            <div className='mt-4 space-x-2'> 
              {stack.map((tech: string, index: number) => (
                <Bubble key={index} tech={tech} />
              ))}
            </div>
          </div>
      </div>
    </div>
  )
}
