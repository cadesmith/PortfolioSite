import Image from 'next/image'
import React from 'react'

export default function DesignTile({image, description, title}: any) {
  return (
    <div className="grid bg-white text-black w-3/5">
      <div>IMAGE</div>
      <div>DESCR AND TITLE</div>
    </div>
  )
}
