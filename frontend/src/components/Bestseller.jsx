import React, { useContext, useEffect, useState } from "react"
import { shopcontext } from "../context/shopcontext"
import Title from './Title'
import Productitem from "./productitem";


function Bestseller (){
   const  {products} = useContext(shopcontext);
   const[bestseller,setbestseller]=useState([]);

   useEffect(()=>{
     const bestproduct=products.filter((item)=>(item.bestseller));
     console.log(bestproduct);
     setbestseller(bestproduct.slice(0,5));
   },[products]);


   return(
    <div  className='my-10'>
    <div className='text-center py-8 text-3xl'>
        <Title text1={"BEST"} text2={"SELLER"}/>
        </div>
        <div className='grid grid-cols-5 gap-6 gap-y-8 w-320  mx-24'>
            {bestseller.map((item,index)=>(
                <Productitem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
            ))}
        </div>
    
    </div>
   )

}
export default Bestseller;