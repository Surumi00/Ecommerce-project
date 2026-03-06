import React from 'react'
import {assets} from '../assets/assets'
function Footer() {
  return (
    <>
      <div className='flex  gap-20 text-sm my-6'>
        <div>
            <img src={assets.logo} className='w-32 m-5'/>
            <p className='w-full md:w-2/3 text-gray-600'>Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Harum rem voluptates </p>
        </div>
        <div >
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600 text-sm '>
                <li>Home</li>
                <li>About</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>

        </div>
        
        </div>  
    </>
  )
}

export default Footer