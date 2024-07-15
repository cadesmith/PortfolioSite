import Image from 'next/image'
import React from 'react'

export default function DesignTile({image, description, title, date}: any) {
  return (
    <div className="grid w-3/5 mb-14">
      <div className='flex justify-center'>
        IMAGE
      </div>
      <div className='grid'>
        <div className="flex justify-between items-start">
          <div className="text-left">
            <h1>TITLE</h1>
          </div>
          <div className="text-right">
            <h2>DATE</h2>
            </div>
        </div>
        <div>
          <p>DESCRIPTION</p>
        </div>
      </div>
    </div>
  )
}
