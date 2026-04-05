import React, { useContext } from 'react'
import { shopcontext } from '../context/shopcontext'



const Orders = () => {
  const { products, currency } = useContext(shopcontext);

  return (
    <div className='border-t pt-16 mx-25 border-gray-300'>

      {/* Title */}
      <div className='flex mt-5 mb-8 mx-5 '>
        <p className='text-2xl text-gray-500'>MY <span className='text-2xl text-gray-700 font-medium'>ORDERS</span></p>
        <p className='w-13 h-[2px] bg-gray-500 mt-5 ml-4'></p>
      </div>

      {/* Orders List */}
      <div>
        {products.slice(1, 4).map((item, index) => (
          <div key={index} className='py-4 mx-5 border-t border-b border-gray-300  text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4'>

            {/* Left: Product Info */}
            <div className='flex items-start gap-6 text-sm'>
              <img className='w-16 sm:w-20' src={item.image[0]} alt="" />
              <div>
                <p className='sm:text-base font-medium'>{item.name}</p>
                <div className='flex items-center gap-3 mt-2 text-base text-gray-700'>
                  <p className='text-lg'>{currency}{item.price}</p>
                  <p>Quantity: 1</p>
                  <p>Size: M</p>
                </div>
                <p className='mt-2'>Date: <span className='text-gray-400'>25, July 2024</span></p>
              </div>
            </div>

            {/* Right: Status + Button */}
            <div className='md:w-1/2 flex justify-between'>
              <div className='flex items-center gap-2'>
                <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
                <p>Ready to Ship</p>
              </div>
              <button className='border px-4 py-2 text-sm font-medium rounded-sm'>Track Order</button>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};

export default Orders;