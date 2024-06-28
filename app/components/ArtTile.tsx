import { Bebas_Neue } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

// constants
const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] })

// need to pass image and text through
// could add group hover to parent div to stop jitter on arrow hover

export default function ArtTile({ category, image}: any) {
  return (
    <div className='flex flex-col m-14 w-128'>
        <div className='h-4/5 w-full bg-white'>
            <p>This is where an image will go</p>
        </div>``
        <div className='flex place-items-center text-7xl text-white mt-8 ml-2'>
            <h1 className={bebas.className}>{category}</h1>
            <Link href="/art/graphic-design" className='text-5xl ml-4 mb-4 transition-transform duration-300 
            ease-in-out hover:translate-x-1/5'>&#10132;</Link>
        </div>
    </div>
  )
}
