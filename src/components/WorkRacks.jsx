import React from 'react'

export default function WorkRacks({ work, iter }) {
  return (
    <div className='home-body'>
        <div className={`pinned-works ${iter !== work.length-1 && 'border-bottom'}  ${iter !== 0 && 'not-first'}`}>
            <div className="pinned-work">
              <div className='work-logo work-wind-logo'>
                <img className='work-img' src={require('../assets/' + work.logo)}/>
              </div>
              <div className='work-text work-wind-text'>
                <div className='work-title'>{work.title}</div>
                <div className='work-tech'>{work.language.map((w, i) => <span className='work-lang' key={i}>{w}</span>)}</div>
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
