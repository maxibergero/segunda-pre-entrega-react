import React from 'react'
import './Header.css'

import imagen from './images.png'

import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className='imag'>
       <Link to='/'>
       <img src={imagen}/>
       </Link>
    </div>
  )
}

export default Header