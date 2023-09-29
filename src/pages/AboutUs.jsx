import React from 'react'
import smile from '../assets/Rectangle 2880.png'
import mos from '../assets/Rectangle 2882.png'
import './about.css'
const AboutUs = () => {
  return (
    <div className='pt-0'>
      <div className='flex grid grid-cols-2 pt-20 pl-40 pb-60'>
        <div className='images'>
        <img src={smile} alt="abou" className='smile' />
        <img src={mos} alt="abou" className='mores' />
        </div>
        <div className='pt-40 pl-40'>
            <h3 className='text-lg font-semibold'>About us</h3>
        <h2 className='text-4xl font-bold'>Your Support is Really <br /> Powerful.​</h2>
        <p>The secret to happiness lies in helping others. Never <br />
            underestimate the difference YOU can make in the <br />
            lives of the poor, the abused and the helpless.</p>
        <button className='bg-green-500 h-10 w-32 text-white'>Read more</button>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
