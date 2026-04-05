import React, { useContext } from 'react'
import { shopcontext } from '../context/shopcontext'


function Carttotal() {
    const {currency,delivery_fee,getcartamount}=useContext(shopcontext);
  return (
    <div className='w-full'>
        
         <div className='flex'>
        <p className='  text-2xl  text-gray-500 pb-2'>Cart <span className='text-2xl text-gray-700'> Total</span> </p>
        <p className='w-13 h-[2px] bg-gray-500 mt-5 ml-4'></p>
        

        </div>
        <div className='flex flex-col gap-2 mt-2 text-sm '>
            <div className='flex justify-between p-1'>
                <p>Subtotal</p>
                <p>{currency}{getcartamount()}.00</p>
            </div>
            <hr className='border-gray-300 p-1'></hr>
            <div className='flex justify-between'>
                <p>Shipping fee </p>
                <p>{currency}{delivery_fee}.00</p>
            </div>
            <hr className='border-gray-300 p-1' ></hr>
             <div className='flex justify-between font-bold'>
                <p>Total </p>
                <p>{currency}{getcartamount() === 0 ? 0 : getcartamount() + delivery_fee}.00</p>
            </div>
        </div>

    </div>
  )
}

export default Carttotal