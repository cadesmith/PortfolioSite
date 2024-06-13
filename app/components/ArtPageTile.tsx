import React from 'react'

export default function ArtPageTile(props: any) {
  return (
    <div className='flex border-2 border-black rounded-lg'>
        {props.text}
    </div>
  )
}
