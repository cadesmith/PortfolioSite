import { Bebas_Neue } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

// constants
const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] })

// need to pass image and text through

export default function ArtTile() {
  return (
    <div className='flex flex-col m-14 w-128'>
        <div className='h-4/5 w-full bg-white'>
            <p>This is where an image will go</p>
        </div>
        <div className='flex items-center text-8xl text-white mt-8'>
            <h1 className={bebas.className}>PHOTOGRAPHY</h1>
            <Link href="/art/graphic-design">&#10132;</Link>
        </div>
    </div>
  )
}
