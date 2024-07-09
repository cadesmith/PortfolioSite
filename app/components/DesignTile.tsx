import Image from 'next/image'
import React from 'react'

export default function DesignTile({image, description, title, date}: any) {
  return (
    <div className="grid bg-white text-black w-3/5">
      <div>IMAGE</div>
      <div className='grid'>
        <div className='flex items-center'>
          <h1>TITLE OF WORK</h1>
          <h2>DATE</h2>
        </div>
        <div>
          <p>DESCRIPTION</p>
        </div>
      </div>
    </div>
  )
}
