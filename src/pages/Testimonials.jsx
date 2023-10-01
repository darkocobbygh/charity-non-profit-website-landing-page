import React from 'react'
import ya from '../assets/ya.png';
import './testimonials.css'
import diagonal from '../assets/diagonal-arrow-right-up.png';
import john from '../assets/Ellipse 25.png';
import jack from '../assets/Ellipse 258.png';
import sakib from '../assets/Ellipse 2500.png';

const Testimonials = () => {
  return (
    <div>
      <div className='flex justify-between pl-10 pr-10 test'>
      <div className='testimonial pb-4'>
      <h3 className='text-2xl text-green-600 font-normal'>Testimonial</h3>
      <h2 className='text-5xl text-black-600 font-semibold'>What People Say About <br /> Us</h2>
      </div>
      <div className='pt-10'>
      <div className='diagno h-16 w-16 bg-green-600 flex justify-center items-center'>
       <img src={diagonal} alt="" />
      </div>
      </div>
      </div>
      <div className='flex flex-column heart pl-10 pr-10 pb-10'>
        <div className='w-96 h-96 border-2 border-green-600 pr-10 mr-10 pl-4 items-center'>
            <img src={ya} alt="" className='pt-3'/>
            <h4 className='pt-10 text-2xl font-normal'>Kindness</h4>
            <p className='flex flex-wrap'>Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text Lorem Ipsum is</p>
            <div className='pt-4'>
                <img src={john} alt="" />
                <h4>John Doe</h4>
                <p>Senior Gardener Farmer</p>
            </div>
        </div>
        <div className='w-96 h-96 border-2 border-green-600 pr-10 mr-10 pl-4 items-center'>
        <img src={ya} alt="" className='pt-3' />
            <h4 className='pt-10 text-2xl font-normal'>Humanity</h4>
            <p>Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text Lorem Ipsum is</p>
            <div className='pt-4'>
                <img src={jack} alt="" />
                <h4>John Doe</h4>
                <p>Senior Gardener Farmer</p>
            </div>
        </div>
        <div className='w-96 h-96 border-2 border-green-600 pr-10 mr-10 pl-4 items-center'>
        <img src={ya} alt="" className='pt-3' />
            <h4 className='pt-10 text-2xl font-normal'>Ethics & Morality</h4>
            <p>Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text Lorem Ipsum is</p>
            <div className='pt-4'>
                <img src={sakib} alt="" />
                <h4>Sakib Hossain</h4>
                <p>Senior Gardener Farmer</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
