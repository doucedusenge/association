import React from 'react'
import { useState } from 'react'
import {AiFillHome} from 'react-icons/ai'
import {GoPerson} from 'react-icons/go'
import {GiMoneyStack} from 'react-icons/gi'
import {AiOutlineLogin} from 'react-icons/ai'
import './nav.css'

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
         <div className='container_nav'>
            <a href="#" onClick={() => setActiveNav('#') } className={activeNav === '#' ? 'active': ""}><AiFillHome className='icons'/>Home</a>
            <a href="#membre" onClick={() => setActiveNav('#membre') } className={activeNav === '#membre' ? 'active': ""}><GoPerson className='icons'/>Membre</a>
            <a href="#cotisation" onClick={() => setActiveNav('#cotisation') } className={activeNav === 'cotisation' ? 'active': ""}><GiMoneyStack className='icons'/>Cotisation</a>
            

        
         </div>
        <div className='barre'>
        <a href="#login" onClick={() => setActiveNav('#login') } className={activeNav === '#login' ? 'active': ""}><AiOutlineLogin className='icon'/>Login</a>
        </div>
        

    </nav>
  )
}

export default Nav