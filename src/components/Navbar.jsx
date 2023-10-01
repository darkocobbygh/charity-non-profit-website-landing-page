import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css';
import logo from '../assets/VGF Logo File  (1) 1.png';
import vect from '../assets/Vector.png'

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
            <Link className='flex'>About Us <img src={vect} className='h-2.5 w-5 mt-2 pt-1 pl-1' alt="" /> </Link>
        </li>
        <li>
            <Link className='flex'>How we help <img src={vect} className='h-2.5 w-5 mt-2 pt-1 pl-1' alt="" /> </Link>
        </li>
      </ul>
      <Link className='pr-10'>
      <button className='bg-green-600 text-white w-32 h-12'>Contact us</button>
      </Link>
    </nav>
  )
}

export default Navbar
