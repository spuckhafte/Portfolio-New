export default function HomeBody({ work }) {
  return (
    <div className='home-body'>
        {work.id === 1 && <span className='home-body-top'>Featured Works</span>}
        <div className={`pinned-works ${work.id !== 3 && 'border-bottom'}  ${work.id !== 1 && 'not-first'}`}>
            <div className="pinned-work">
              <div className='work-logo'>
                <img className='work-img' src={require(`../assets/logo${work.id}.png`)}/>
              </div>
              <div className='work-text'>
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
