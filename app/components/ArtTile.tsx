import Image from 'next/image'
import React from 'react'

// need to pass image and text through

export default function ArtTile() {
  return (
    <div className='flex bg-white text-black m-14 w-1/3'>
        <div className='h-4/5 w-full'>
            <p>hi</p>
        </div>
        <div className='h-1/5'>
            <h1></h1>
        </div>
    </div>
  )
}
