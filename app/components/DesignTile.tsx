import Image from 'next/image'
import React from 'react'

export default function DesignTile({image, description, title, date}: any) {
  return (
    <div className="grid w-3/5">
      <div className='flex justify-center'>
        IMAGE
      </div>
      <div className='grid bg-white text-black'>
        <div className='flex justify-between'>
          <div>
            <h1>{title}</h1>
          </div>
          <div>
            <h1>{date}</h1>
          </div>
        </div>
        <div>
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}
