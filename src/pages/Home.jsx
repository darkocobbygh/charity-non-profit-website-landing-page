import React from 'react'
import './home.css'
const Home = () => {
  return (
    <div>
      <div className='container h-screen flex justify-center items-center text-white text-center flex-col'>
        <p className='text-2xl font-semibold'>Give Hope For Homeless</p>
        <h1 className='text-7xl'>Helping Each Other <br /> Can Make World Better</h1>
        <p className='text-gray-100'>We Seek Out World Changers And Difference Makers Around The <br /> Globe,And Equip Them To Fulfill Their Unique Purpose.</p>
        <div className='flex pr-10'>
        <button className='bg-lime-800 flex h-14 w-40 flex justify-center items-center mr-5'>Donate Now</button>
        <button className='bg-transparent h-14 w-40 border-2 border-lime-800'>Know About Us</button>
        </div>
        </div>
    </div>
  )
}

export default Home
