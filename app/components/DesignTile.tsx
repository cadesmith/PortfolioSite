import Image from 'next/image'
import React from 'react'

export default function DesignTile({image, description, title}: any) {
  return (
    <div className="grid place-items-center lg:w-1/2 mb-4 px-8">
      <div className='flex justify-center w-full'>
        <Image 
                src={image}
                alt=''
                quality={100}
                width={1296}
                height={1728}
                style={{
                  width: '100%',
                  height: 'auto',
                }}  
              />
      </div>

      <div className='bg-black text-white px-2 text-center pt-3 pb-2 w-full'>
        <div className=''>
          <h1 className='text-2xl lg:text-3xl font-bold'>{title}</h1>
        </div>
        <div className='mt-px pb-2 px-2 xl:pl-1'>
          <p className='text-md break-words'>{description}</p>
        </div>
      </div>
    </div>
  )
}
