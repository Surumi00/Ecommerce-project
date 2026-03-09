import React from 'react'
import {assets} from '../assets/assets'
function Footer() {
  return (
    <>
      <div className='flex justify-around  text-sm   p-20 bg-red-100'>
        <div className='flex-1'>
            <img src={assets.logo} className='w-32 m-5'/>
            <p className='w-20 md:w-2/3 text-gray-600 '>Lorem ipsum dolor sit amet consectetur 
                adipisicing. </p>
        </div>
        <div className='flex-1'>
            <p className='text-xl font-medium mb-5 '>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600 text-sm '>
                <li>Home</li>
                <li>About</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
           </div>  
            <div className='flex-1'>
              <p className='text-xl font-medium mb-5'>GET IN TOUCH </p>
              <ul className='flex flex-col gap-1 text-gray-600 text-sm '>
                <li>0484-789-456-123</li>
                <li>contactatforever.com</li>
                
            </ul>
            </div>
       
        
        </div>  
        <div className='mt-10'>
          <hr className='border-gray-400'></hr>
          <p className='py-5 text-sm text-center text-gray-600 mt-5'>Copyright2024@forever.com-All Right Reserved</p>
        </div>
    </>
  )
}

export default Footer