import React from 'react'
import HomeHead from './HomeHead'
import HomeBody from './HomeBody'
import Work from '../assets/projects'

export default function Home() {
  return (
    <div className='home'>
      <HomeHead />
      <div className='pinned-work-container'>
        <HomeBody work={Work[0]} />
        <HomeBody work={Work[1]} />
        <HomeBody work={Work[2]} />
      </div>
    </div>
  )
}
