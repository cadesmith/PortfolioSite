import Image from 'next/image'
import React from 'react'

export default function Project() {
  return (
    <div className='flex w-screen py-4 justify-center'>
        <div className='flex bg-white w-2/3 h-80 rounded-lg'>
            <div className='w-1/3 h-full border-r-4 border-black'>YO
                <Image />
            </div>
            <div className='p-4'>
                PROJECT NAME
            </div>
        </div>
    </div>
  )
}
