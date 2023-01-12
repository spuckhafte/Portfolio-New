import React from 'react'
import Works from '../assets/projects'
import WorkRacks from './WorkRacks'

export default function Work() {
  return (
    <div className='work-window'>
        <div className='work-top'>Work</div>
        <div className='work-racks'>
          {
            Works.map((work, i) => <WorkRacks iter={i} key={i} work={work} />)
          }
        </div>
    </div>
  )
}
