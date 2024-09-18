import React from 'react'
import Project from '../components/Project'

export default function Projects() {
  return (
    <div className='space-y-8'>
      <div className='mt-16 mb-16 grid justify-items-center'>
        <h1>PROJECTS</h1>
        <p>these are my projects</p>
      </div>
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
