import React from 'react'
import Me from '../assets/Me.png'

export default function HomeHead() {
  return (
    <div className='home-head'>
        <div className='home-head-image'><img src={Me}></img></div>
        <div className='home-head-text'>
            <span className='home-head-text-welcome'>Hi, I am Rakshit,<br/>Web Developer.</span><br/>
            <span className='home-head-text-sub'>I am a <i>full-stack developer</i> with a passion for programing and web development. I like to create <i>web applications</i> and <i>backend services</i>. <i>Javascript</i> is my forte and I know bunch of others like <i>Python</i> and <i>C#-Unity</i>. I pretty <i>suck</i> at getting <i>ideas for designs</i>.</span>
        </div>
    </div>
  )
}