import React, { useContext, useState } from 'react'
import Carttotal from '../components/Carttotal';
import { assets } from '../assets/assets'
import { shopcontext } from '../context/shopcontext';

function Place_order() {
  const[method,setmethod]=useState("cod")
  const{navigate}=useContext(shopcontext);

  return (
    
 <div className="flex justify-between pt-5 px-6 sm:px-14 mx-15 min-h-[80vh] border border-gray-300  border-t ">
      
      {/* Title */}
      <div className='flex flex-col'>
         <div className='flex mt-10'>
        <p className='  text-2xl  text-gray-500 pb-7'>DELIVERY <span className='text-2xl text-gray-700'> INFORMATION</span> </p>
        <p className='w-13 h-[2px] bg-gray-500 mt-5 ml-4'></p>
        </div>
       

      {/* Form */}
      <div className="flex flex-col gap-3 w-full sm:max-w-[480px]">
        <div className="flex gap-3">
          <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="First name" />
          <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Last name" />
        </div>
        <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="email" placeholder="Email address" />
        <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Street" />
        <div className="flex gap-3">
          <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="City" />
          <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="State" />
        </div>
        <div className="flex gap-3">
          <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Zipcode" />
          <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Country" />
        </div>
        <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="number" placeholder="Phone" />
      </div>
      </div>
        <div className='mt-8'>
  <div className='mt-8 min-w-80'>
    <Carttotal/>
  </div>
 <div className='flex flex-col'>
         <div className='flex mt-10'>
        <p className='  text-2xl  text-gray-500 pb-7'>PAYMENT <span className='text-2xl text-gray-700'> METHOD</span> </p>
        <p className='w-13 h-[2px] bg-gray-500 mt-5 ml-4'></p>
        </div>
        </div>

    {/* --------------- Payment Method Selection ------------- */}
    <div className='flex gap-3 flex-col lg:flex-row'>
      <div onClick={()=>setmethod("stripe")} className='flex items-center gap-3 border border-gray-300  p-2 px-3 cursor-pointer'>
        <p className={`min-w-3.5 h-3.5 border border-gray-300 ${method === 'stripe' ? 'bg-green-500' : ''} rounded-full `}></p>
        <img className='h-5 mx-4' src={assets.stripe_logo} alt="" />
      </div>
       <div onClick={()=>setmethod("razorpay")} className='flex items-center gap-3 border border-gray-300  p-2 px-3 cursor-pointer'>
        <p className={`min-w-3.5 h-3.5 border border-gray-300 ${method === 'razorpay' ? 'bg-green-500' : ''} rounded-full `}></p>
        <img className='h-5 mx-4' src={assets.razorpay_logo} alt="" />
      </div>
      <div onClick={()=>setmethod("cod")} className='flex items-center gap-3 border border-gray-300  p-2 px-3 cursor-pointer'>
        <p className={`min-w-3.5 h-3.5 border border-gray-300 ${method === 'cod' ? 'bg-green-500' : ''} rounded-full `}></p>
       <p className='text-gray-500 text-sm font-medium mx-4' >CASH ON DELIVERY</p>
      </div>
    </div>
    <div className='w-full text-end mt-8'>
  <button onClick={()=>navigate('/orders')} className='bg-black text-white px-16 py-3 text-sm'>PLACE ORDER</button>
</div>
  </div>

</div>
 
    
    
  );
};
  


export default Place_order