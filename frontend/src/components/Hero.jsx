import React from 'react'
import { assets } from '../assets/assets'
import '../index.css'
function Hero() {
  return (
    <div className='flex items-center justify-center'>
        <div className='flex border border-gray-400 w-320'>
        <div className='w-full flex flex-col items-center justify-center'>
        <div className='flex items-center gap-2 p-4'>
        <p className='w-11 h-[2px] bg-gray-700'></p>
        <p className='text-base text-gray-700'> OUR BESTSELLERS</p>
        
        </div>
         <h1 className=' prata-regular text-5xl text-gray-700'>Latest Arrivals</h1>
          <div className='flex items-center gap-2 p-4 mr-18'>
        
        <p className='text-base  text-gray-700'> Shop Now</p>
        <p className='w-9 h-[2px] bg-gray-700 '></p>
        
        </div>
        </div>
       <img className='w-[50%]'  src={assets.hero_img}></img>
        </div>
        
    </div>
  )
}

export default Hero