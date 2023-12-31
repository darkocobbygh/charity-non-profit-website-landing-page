import React from 'react'
import scho from '../assets/Rectangle 28802.png'
import './featurepost.css'
import loadi from '../assets/Rectangle 2885.png';
import vec from '../assets/vec.png';
import vectt from '../assets/vectt.png';
const FeaturePost = () => {
  return (
    <div className='flex pb-10 mb-20'>
      <div className='welcome-to-charity pl-10'>
        <h5 className='text-2xl font-semibold'>Welcome to Charity</h5>
        <h2 className='text-4xl font-bold'>Let Us Come Together <br /> To Make a Difference</h2>
        <p className='text-base font-normal'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam <br /> nonumy tempor invidunt ut labore et dolore magna aliquyam <br /> erat, sed diam voluptua. At vero eos et accusam et justo.</p>
       <div className='flex'>
       <div className='bg-green-200 h-36 w-60 mr-10 mission'>
        <div className='flex mt-4 pl-4'>
        <img src={vec} alt="" className='pr-4' /> 
        <p className='text-3xl text-center text-green-600'>Our mission</p>
        </div>
            <p className='pl-2 pt-4'>Lorem ipsum dolor sit amet, <br /> consetetur sadipscing elitr, <br /> sed diam</p>
        </div>
        <div className='bg-green-200 h-36 w-60 mr-10 mission'>
        <div className='flex mt-4 pl-4'>
        <img src={vectt} alt="" className='pr-4' />
        <p className='text-3xl text-center text-green-600'> Our vision</p>
        </div>
            <p className='pl-2 pt-4'>Lorem ipsum dolor sit amet, <br /> consetetur sadipscing elitr, <br /> sed diam</p>
        </div>
       </div>
        <div className='flex justify-between pt-6'>
        <h5>Donations</h5>
        <p className='pr-10'>75%</p>
        </div>
       <div className='loads'>
       <img src={loadi} alt="" />
       </div>
      </div>
      <div className='schol'>
        <img src={scho} alt="abou" className='sch' />
        <div className='toge mb-20 pb-10 flex justify-center items-center'>
            <ul className='togetherness pl-5'>
                <li className='text-green-600'>Together, we're going to make the future</li>
                <li>children where we are able to fulfill all</li>
                <li>their requirements to keep them safe from withered world</li>
                <li>We have already stepped out and start changing the world</li>
                <li>Keeping safe them from war, inhumanity</li>
            </ul>
        </div>
        </div>
    </div>
  )
}

export default FeaturePost
