import React from 'react'
import Project from '../components/Project'
import { bebas } from '../fonts'
import PageTitle from '../components/PageTitle'

export default function Projects() {
  return (
    <div className='grid justify-items-center bg-white'>
      
      <PageTitle
        title={'PROJECTS'}
      />

      <div className='space-y-6 pb-10'>
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
          description={'SPA made to display my coding projects, photography, and graphic design.'}
          stack={['NEXT.JS', 'TAILWIND CSS', 'TYPESCRIPT']}
        />
      </div>
    </div>
  )
}
