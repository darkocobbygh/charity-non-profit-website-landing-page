import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import logo from '../assets/VGF Logo File  (1) 1.png'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-start pt-3'>
        <Link>
          <img src={logo} alt="" />
        </Link>
      <ul className='h-16 w-96 flex gap-y-10'>
        <li>
            <Link>Home</Link>
        </li>
        <li>
            <Link>Gallery</Link>
        </li>
        <li>
            <Link>About us</Link>
        </li>
        <li>
            <Link>How we help</Link>
        </li>
      </ul>
      <Link>Contact us</Link>
    </nav>
  )
}

export default Navbar
