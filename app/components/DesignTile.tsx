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

      <div className='grid bg-white text-black pt-2 pb-6 w-full xl:border-l-8 xl:border-black xl:w-4/5'>
        <div className='flex justify-between mt-4 mx-4'>
          <div className='w-2/3'>
            <h1 className='text-5xl font-bold'>{title}</h1>
          </div>
        </div>
        <div className='ml-4 mt-2'>
          <p className='text-2xl'>{description}</p>
        </div>
      </div>
    </div>
  )
}
