import React from 'react'
import Project from '../components/Project'
import { bebas } from '../fonts'

export default function Projects() {
  return (
    <div className='grid justify-items-center'>
      <div className='mt-0 md:mt-6 mb-16 border-2 p-6 grid justify-items-center'>
        <h1 className={`${bebas.className} text-8xl`}>PROJECTS</h1>
        <p>these are my projects</p>
      </div>
      <div className='sm:w-1/2'>
        <Project 
          title={'MARIN TRAIL PROJECT'}
          stack={['IN DEVELOPMENT']}
        />
        <Project 
          title={'CADE SMITH PHOTO'}
          stack={['IN DEVELOPMENT']}
        />
        <Project 
          title={'SPOTIFY APP NAME TBD'}
          stack={['IN DEVELOPMENT']}
        />
        <Project 
          title={'PERSONAL WEBSITE'}
          stack={['NEXT.JS', 'TAILWIND CSS', 'TYPESCRIPT', 'GSAP']}
        />
      </div>
    </div>
  )
}
