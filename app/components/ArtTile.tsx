import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


export default function ArtTile({ category, image, link}: any) {
  return (
    <div className='grid w-full'>
      <Image 
        src={image}
        alt=''
        width={3000}
        height={2000}
        quality={100}
      />
      <div className='w-full pt-10 pb-8 pl-8 content-center text-white bg-black'>
        <h1>{category}</h1>
        <div className='pl-2 transition-transform duration-300 ease-in-out hover:translate-x-5'>
          <Link 
            href={link} 
            className='text-5xl'>
            &#10132;
          </Link>
        </div>
      </div>
    </div>
  )
}
