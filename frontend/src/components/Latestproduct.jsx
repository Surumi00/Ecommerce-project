import React, { useContext, useEffect, useState } from 'react'
import Title from './Title'
import Productitem from './productitem';
import { shopcontext } from '../context/shopcontext';
function Latestproduct() {
    const {products}=useContext(shopcontext);

    const[latestproduct,setlatestproduct]=useState([]);

    useEffect(()=>{
        console.log(products);
        setlatestproduct(products.slice(0,10));
    },[]);


  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
        <Title text1={"LATEST"} text2={"COLLECTIONS"} />
        </div>
        <div  className='grid grid-cols-5 gap-6 gap-y-8 w-320  mx-24'>
        {latestproduct.map((item,index)=>(
            
            <Productitem key={index} id={item._id} image={item.image} name={item.name} price={item.price}  />
            )
)}
        </div>
     
    </div>
  )
}

export default Latestproduct