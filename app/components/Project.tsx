import Image from 'next/image'
import React from 'react'
import { Bebas_Neue } from 'next/font/google'
import Bubble from './Bubble'

const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] })

// Need to pass props and format well

export default function Project({ title, description, image, stack}: any) {
  return (
    <div className='flex justify-center'>
      <div className='flex w-2/3 py-4'>
          <div className="w-80 bg-white h-80 mr-14">
            I'm a square that will be an image
          </div>
          <div className="flex-col w-2/3 text-white h-80">
            <div className='text-7xl'>
              <h1 className={bebas.className}>{title}</h1>
            </div>
            <div className='text-xl'>
              <p>PROJECT DESCRIPTION</p>
            </div>
            <div>
              <Bubble />
            </div>
          </div>
      </div>
    </div>
  )
}
