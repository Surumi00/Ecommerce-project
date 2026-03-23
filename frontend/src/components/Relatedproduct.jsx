import React, { useContext, useEffect, useState } from 'react'
import { shopcontext } from '../context/shopcontext'
import Productitem from './productitem';
import Title from './Title';

function Relatedproduct({category,subcategory}) {

    const{products}=useContext(shopcontext);
    const[related,setrelated]=useState([]);

    useEffect(()=>{
        if(products.length > 0){

            let productcopy=products.slice()
            productcopy=productcopy.filter((item)=>item.category===category);
            productcopy=productcopy.filter((item)=>item.subCategory===subcategory);
             setrelated(productcopy.slice(0,5));
        }
       

    },[products,category,subcategory])


  return (
    <div className='my-24'>
        <div className='text-center text-3xl py-2'>
            <Title text1={"RELATED"} text2={'PRODUCTS'}/>
            
        </div>
        <div className='grid grid-cols-5 gap-4 gap-y-6 '>
            {
                related.map((item,index)=>(
                  <Productitem key={index} id={item._id} name={item.name} price={item.price} image={item.image} />  
                ))
            }
        </div>
        
    </div>
  )
}

export default Relatedproduct