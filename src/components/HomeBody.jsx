import projects from '../assets/projects';


export default function HomeBody({ work, iter }) {
  return (
    <div className='home-body'>
      {iter == 1 ? <span className='home-body-top'>Featured Works</span> : ''}
      <div className={`pinned-works ${iter !== 3 ? 'border-bottom' : ''} ${iter !== 1 ? 'not-first' : ''}`}>
          <div className="pinned-work">
            <div className='work-logo'>
              <img className='work-img' src={require(`../assets/${work.logo}`)}/>
            </div>
            <div className='work-text'>
              <div className='work-title'>{work.title}</div>
              <div className='work-tech'>{work.language.map((w, i) => <span className='work-lang' key={i}>{w}</span>)}</div>
              <div className='work-description'>{work.description.split('.')[0] + '.'}</div>
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
