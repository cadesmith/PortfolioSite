import React from 'react'
import Project from '../components/Project'

export default function Projects() {
  return (
    <div className='mt-10 mb-10'>
      <Project 
        title={'MARIN TRAIL PROJECT'}
        stack={['NOTHING']}
      />
      <Project 
        title={'GOOD BYTES'}
        stack={['NOTHING']}
      />
      <Project 
        title={'SPOTIFY APP NAME TBD'}
        stack={['NOTHING']}
      />
      <Project
        title={'PORTFOLIO WEBSITE'}
        stack={['NEXT.JS', 'TYPESCRIPT', 'TAILWINDCSS', 'GSAP']}
      />
    </div>
  )
}
