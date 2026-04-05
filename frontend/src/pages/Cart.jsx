import React, { useContext, useEffect, useState } from 'react'
import { shopcontext } from '../context/shopcontext'

import { assets } from '../assets/assets';
import Carttotal from '../components/Carttotal';
function Cart() {
  const{products,currency,cartitem,updatequantity,navigate}=useContext(shopcontext);

  const [cartdata,setcartdata]=useState([]);

  const cartdisplay =()=>{
    const tempdata=[];
    for(const items in cartitem){
      for(const item in cartitem[items]){
        if(cartitem[items][item]){
          tempdata.push({
            _id:items,
            size:item,
            quantity:cartitem[items][item]
          })
        }
      }
    }
    setcartdata(tempdata);
  }


  useEffect(()=>{
    cartdisplay();
  },[cartitem])

  return (
    <div className='border-t border-gray-300 pt-14 pb-50 mx-25'>
      <div className='text-2xl mb-3 '>
        <div className='flex'>
        <p className='  text-4xl  text-gray-500 pb-7'>YOUR <span className='text-4xl text-gray-700'> CART</span> </p>
        <p className='w-13 h-[2px] bg-gray-500 mt-5 ml-4'></p>
        </div>
        <div className=''> 
            {
              cartdata.map((item,index)=>{
                console.log("cartitem:", cartitem);
                const productdata = products.find((product)=>product._id === item._id);
                  if (!productdata) return null;
                  return(
                    <div key={index} className='py-4  border-t border-b border-gray-300  text-gray-700 grid grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
                      <div className='flex items-start gap-6 '>
                          <img className='w-20' src={productdata.image[0]} />
                          <div >
                              <p className='text-lg font-medium'>{productdata.name}</p>
                              <div className='flex items-center gap-5 mt-2' >
                                <p className='text-sm'>{currency} {productdata.price} </p>
                                <p className='px-3 py-1 bg-slate-50 text-sm'>{item.size}</p>
                              </div>
                              
                          </div>
                          
                          
                      </div>
                      <input onChange={(e)=>e.target.value === '' || e.target.value===0 ? null : updatequantity(item._id,item.size,Number(e.target.value))} className='border border-gray-300 max-w-20 max-h-9 px-2 py-1 text-sm  ' type='number' min={1} value={item.quantity}/>
                      <img onClick={()=>updatequantity(item._id,item.size,0)} className='w-5 mr-4 cursor-pointer ' src={assets.bin_icon}/>
                    </div>
                     
                  )
              })
            }
        </div>
       

      </div>
      <div className='flex justify-end my-20'>
            <div className='w-full sm:w-[450px]'>
              <Carttotal/>
              <div className='w-full text-end'>
                <button onClick={()=>navigate("/place_order")} className='bg-black text-white text-sm my-8 px-8 py-3'>PROCEED TO CHECKOUT</button>

              </div>
            </div>
      </div>
    </div>
  )
}

export default Cart