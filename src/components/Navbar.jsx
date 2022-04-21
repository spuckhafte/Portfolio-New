import React from 'react'
import { useState, useEffect } from 'react'

export default function Navbar({ activeTab, activateTab }) {
    
    const dict = { 0: 'home', 1: 'work', 2: 'contact' }
    const dictReverse = { 'home': 0, 'work': 1, 'contact': 2 }

    const [tab, setTab] = useState(dict[activeTab])

    useEffect(() => {
        setTab(dict[activeTab])
    }, [activeTab])

    const changeTab = (_tab) => {
        activateTab(dictReverse[_tab])
    }
  return (
    <nav className='navbar'>
        <div className={`nav-items ${tab === 'home' ? 'n-active' : ''} n-home`} onClick={() => changeTab('home')}>
            Home
        </div>
        <div className={`nav-items ${tab === 'work' ? 'n-active' : ''} n-work`} onClick={() => changeTab('work')}>
            Work
        </div>
        <div className={`nav-items ${tab === 'contact' ? 'n-active' : ''} n-contact`} onClick={() => changeTab('contact')}>
            Contact
        </div>
    </ nav>
  )
}
