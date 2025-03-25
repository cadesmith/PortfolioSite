import React from 'react'

export default function Bubble({tech}: any) {
  return (
    <div className='inline-flex rounded-full h-9 bg-black px-3 items-center pb-0.5'>
        <p className='text-white text-lg'>{tech}</p>
    </div>
  )
}
