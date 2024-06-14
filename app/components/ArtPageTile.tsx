import React from 'react'

// Tiles that have text and an animated arrow 

export default function ArtPageTile(props: any) {
  return (
    <div className='flex bg-white rounded-lg'>
        {props.text}
    </div>
  )
}
