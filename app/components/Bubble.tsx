import React from 'react'

export default function Bubble({tech}: any) {
  return (
    <div className='inline-flex rounded-full h-8 bg-black px-3 items-center pb-0.5'>
        <p className='text-white text-md'>{tech}</p>
    </div>
  )
}
