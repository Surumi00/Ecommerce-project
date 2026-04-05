import React, { createContext, useEffect, useState } from 'react'
import {products} from '../assets/assets'
import { toast } from 'react-toastify';
export const shopcontext=createContext();
import {useNavigate} from 'react-router-dom'

function Shopcontextprovider (props){

 
  const currency='$';
  const delivery_fee=10;  
  const[search,setsearch]=useState('');
  const[showsearch,setshowsearch]=useState(false);
  const[cartitem,setcartitem]=useState({});
  const navigate = useNavigate();
 
  const addtocart= async (itemid,size)=>{
      if (!size){
        toast.error("select the size");
      }
      const cartdata=structuredClone(cartitem);

    if(cartdata[itemid]){
      if(cartdata[itemid][size]){
        cartdata[itemid][size] +=1;
      }
      else{
        cartdata[itemid][size] = 1;
      }
    }
      else{
           cartdata[itemid]={};
           cartdata[itemid][size] = 1;
      }

     

    
    
    setcartitem(cartdata);

  }

   const getcartcount =() =>{
    let totalcount = 0;
    for(const items in cartitem){
      for(const item in cartitem[items]){
        if(cartitem[items][item]>0){
          totalcount += cartitem[items][item];
        }
      }
    }
    return totalcount;
   }

   const updatequantity = async (itemid,size,quantity)=>{
    let cartdata = structuredClone(cartitem);
    cartdata[itemid][size]=quantity;
    setcartitem(cartdata);
   }

  const getcartamount = () => {
  let totamount = 0;

  for (const items in cartitem) {
    const product = products.find((p) => p._id === items);

   
    if (!product) continue;

    for (const size in cartitem[items]) {
      const quantity = cartitem[items][size];

      if (quantity > 0) {
        totamount += product.price * quantity;
      }
    }
  }

  return totamount;
};



const values={
  products,currency,delivery_fee,search,setsearch,showsearch,setshowsearch,cartitem,addtocart,getcartcount,updatequantity,getcartamount,navigate
}

return(
    <shopcontext.Provider value={values}> 
      {props.children}
    </shopcontext.Provider>
)

}
export default Shopcontextprovider;
