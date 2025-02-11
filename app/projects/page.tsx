import React from 'react'
import Project from '../components/Project'
import { bebas } from '../fonts'

export default function Projects() {
  return (
    <div className='grid justify-items-center'>
      <div className='mt-0 pb-6 grid'>
        <h1 className={`${bebas.className} text-8xl`}>PROJECTS</h1>
      </div>
      <div className=''>
        <Project 
          title={'MARIN TRAIL PROJECT'}
          description={'Trail tracking app that allows users to treat hiking like a game.'}
          stack={['IN DEVELOPMENT']}
        />
        <Project 
          title={'CADE SMITH PHOTO'}
          description={'Lightweight website used to showcase my photography.'}
          stack={['IN DEVELOPMENT']}
        />
        <Project 
          title={'QUIDDLER ONLINE'}
          description={'A networked, online version of the card game Quiddler.'}
          stack={['IN DEVELOPMENT']}
        />
        <Project 
          title={'PERSONAL WEBSITE'}
          description={'A website to display my coding projects, photography, and graphic design.'}
          stack={['NEXT.JS', 'TAILWIND CSS', 'TYPESCRIPT', 'GSAP']}
        />
      </div>
    </div>
  )
}
