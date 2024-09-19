import { Bebas_Neue } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

// constants
const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] })

export default function ArtTile({ category, image, link}: any) {
  return (
    <div className='grid justify-center text-black bg-white w-full'>
        <div> 
          IMAGE BLOCK
        </div>
    </div>


    /*
    <div className="grid justify-items-center w-full h-screen lg:w-2/3 lg:h-[80vh]">
      <div className="relative w-full h-full lg:w-full lg:h-full">
        <Image
          src={image}
          alt={category}
          fill={true}
          className='object-contain'
          priority={true} // Optional: gives higher loading priority
        />
      </div>
        <div className='flex place-items-center mt-8 ml-2'>
            <h1 className={bebas.className}>{category}</h1>
            <Link href={link} className='text-5xl ml-4 mb-4 transition-transform duration-300 
            ease-in-out hover:translate-x-1/5'>&#10132;</Link>
        </div>
    </div>
    */
  )
}
