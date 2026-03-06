import React from 'react'
import { assets } from '../assets/assets'
import Title from './Title'

function Policies() {
  return (
    <>
    <div className='text-center p-2 mt-34'>
     <Title text1={"Our"} text2={"Policies"}/>
     </div>
    <div className='flex  gap-4 justify-around text-center p-20 text-gray-600'>
     
    <div>
        <img  src={assets.exchange_icon} className='w-12 m-auto mb-5'/>
        <p className='font-semibold'>Easy Exchange </p>
        <p className='text-semibold'>We Offer Hussle Free Exchange</p>
    </div>
       <div>
        <img  src={assets.quality_icon} className='w-12 m-auto mb-5'/>
        <p className='font-semibold'>7 Days Return Policy</p>
        <p className='text-semibold'>We Provide 7 days free Return Policy</p>
    </div>
     <div>
        <img  src={assets.support_img} className='w-12 m-auto mb-5'/>
        <p className='font-semibold'>Best Customer Supoort </p>
        <p className='text-semibold'>We Provide 24/7 Customer Support</p>
    </div>
    </div>
    </>
  )
}

export default Policies