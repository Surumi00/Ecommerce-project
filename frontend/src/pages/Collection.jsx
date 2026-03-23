import React, { useContext, useEffect } from 'react'
import { shopcontext } from '../context/shopcontext'
import { useState } from 'react';
import Productitem from '../components/productitem';

function Collection() {
  const{products}=useContext(shopcontext);
  const[filterproduct,setfilterproduct]=useState([]);
  const[category,setcategory]=useState([]);
  const[subcategory,setsubcategory]=useState([]);
  const[itemsort,setitemsort]=useState("relevant")

  const togglecategory = (e) =>{
    if(category.includes(e.target.value)){
        setcategory(prev=>prev.filter(item => item != e.target.value))
    }
    else{
      setcategory(prev=>[...prev,e.target.value])
    }
  }
  const togglesubcategory = (e) =>{
    if(subcategory.includes(e.target.value)){
        setsubcategory(prev=>prev.filter(item => item != e.target.value))
    }
    else{
      setsubcategory(prev=>[...prev,e.target.value])
    }
  }

  const applyfilter=()=>{

    let productcopy=products.slice();
    if(category.length >0){
       productcopy=productcopy.filter(item=>category.includes(item.category));
    }
     if(subcategory.length > 0){
     productcopy = productcopy.filter(item => subcategory.includes(item.subCategory));
  }
    setfilterproduct(productcopy);
  }

  const pricesort =()=>{
    let sorted=filterproduct.slice();

    switch(itemsort){
      case "low":
              setfilterproduct(sorted.sort((a,b)=>(a.price-b.price)));
              break;
      case  "high":
             setfilterproduct(sorted.sort((a,b)=>(b.price-a.price)) );
             break;
      default :
              applyfilter();
              break;
    }
    
    
  }

  useEffect(()=>{
      pricesort();
  },[itemsort])


  useEffect(()=>{
      applyfilter();
  },[category,subcategory])



  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-5 mx-10 md:mx-28 items-start mt-9'> 
      
      
      <div className='min-w-50'>
        <p className='text-lg text-gray-600 font-medium '>FILTER</p>
        <div className='border border-gray-300 p-5 w-60 flex flex-col my-3'>
          <div className='gap-1 text-gray-600 mb-2'>CATEGORIES</div>
          <label className='flex gap-2 text-sm'><input type='checkbox' value={"Men"} onChange={togglecategory} />Men</label>
          <label className='flex gap-2 text-sm'><input type='checkbox' value={"Women"} onChange={togglecategory} />Women</label>
          <label className='flex gap-2 text-sm'><input type='checkbox'value={'Kids'} onChange={togglecategory} />Kids</label>
        </div>
         
        <div className='border border-gray-300 p-5 w-60 flex flex-col my-3'>
          <div className='gap-1 text-gray-600 mb-2'>TYPE</div>
          <label className='flex gap-2 text-sm'><input type='checkbox' value={'Topwear'} onChange={togglesubcategory} />Topwear</label>
          <label className='flex gap-2 text-sm'><input type='checkbox' value={'Bottomwear'} onChange={togglesubcategory} />Bottomwear</label>
          <label className='flex gap-2 text-sm'><input type='checkbox' value={'Winterwear'}onChange={togglesubcategory} />Winterwear</label>
        </div>
      </div>

      
      <div className='flex-1'>
        <div className='flex justify-between items-center mb-6 '>
          <p className='  text-3xl  text-gray-500'>ALL <span className='text-3xl text-gray-700' >COLLECTION</span> </p>
          
          <select onChange={(e)=>setitemsort(e.target.value)} className='border border-gray-400 text-sm px-3 py-2'>
            <option value={"relevant"}>Sort by: RELEVANT</option>
            <option value={"high"} >Sort by: HIGH</option>
            <option value={"low"} >Sort by: LOW</option>
          </select>
        </div>
        <div className='grid grid-cols-4 gap-4 gap-y-6'>
          {
            filterproduct.map((item,index)=>(
              <Productitem  key={index} id={item._id} image={item.image} name={item.name} price={item.price}   />
            ))
          }
        </div>
      </div>
      
    </div>
  )
}

export default Collection