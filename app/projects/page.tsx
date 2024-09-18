import React from 'react'
import Project from '../components/Project'

export default function Projects() {
  return (
    <div className='space-y-8'>
      <Project 
        title={'MARIN TRAIL PROJECT'}
        stack={['IN DEVELOPMENT']}
      />
      <Project 
        title={'GOOD BYTES'}
        stack={['IN DEVELOPMENT']}
      />
      <Project 
        title={'SPOTIFY APP NAME TBD'}
        stack={['IN DEVELOPMENT']}
      />
      <Project
        title={'PORTFOLIO WEBSITE'}
        stack={['NEXT.JS', 'TYPESCRIPT', 'TAILWINDCSS', 'GSAP']}
      />
    </div>
  )
}
