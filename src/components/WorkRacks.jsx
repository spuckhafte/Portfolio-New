import React from 'react'

export default function WorkRacks({ work }) {
  return (
    <div className='home-body'>
        <div className={`pinned-works ${work.id !== 8 && 'border-bottom'}  ${work.id !== 1 && 'not-first'}`}>
            <div className="pinned-work">
              <div className='work-logo work-wind-logo'>
                <img className='work-img' src={require(`../assets/logo${work.id}.png`)}/>
              </div>
              <div className='work-text work-wind-text'>
                <div className='work-title'>{work.title}</div>
                <div className='work-lang'>{work.language}</div>
                <div className='work-description'>{work.description}</div>
                <div className='work-links'>
                  {work.github !== 'N/A' && <div className='work-github'><a target={'_blank'} href={work.github}>Github</a></div>}
                  {work.live !== 'N/A' && <div className='work-live'><a target={'_blank'} href={work.live}>Check It</a></div>}
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}
