import Image from 'next/image'
import React from 'react'

export default function DesignTile({image, description, title, date}: any) {
  return (
    <div className="grid w-full lg:w-4/5">
      <div className='flex justify-center'>
        IMAGE
      </div>
      <div className='grid bg-white text-black'>
        <div className='flex justify-between mt-4 mx-4'>
          <div className='w-2/3'>
            <h1 className='text-5xl'>{title}</h1>
          </div>
          <div className='text-right'>
            <h1 className='text-5xl'>{date}</h1>
          </div>
        </div>
        <div className='ml-4 my-4'>
          <p className='text-xl'>{description}</p>
        </div>
      </div>
    </div>
  )
}
