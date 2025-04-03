import Image from 'next/image'
import React from 'react'

export default function DesignTile({image, description, title, date}: any) {
  return (
    <div className="grid place-items-center w-full">
      <div className='flex justify-center xl:w-4/5'>
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

      <div className='grid bg-white text-black pt-3 pb-2 w-full xl:border-l-8 xl:border-black xl:w-4/5'>
        <div className='ml-3'>
          <h1 className='text-4xl font-bold'>{title}</h1>
        </div>
        <div className='ml-4 mt-px'>
          <p className='text-md'>{description}</p>
        </div>
      </div>
    </div>
  )
}
