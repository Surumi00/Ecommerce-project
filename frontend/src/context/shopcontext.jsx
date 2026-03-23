import React, { createContext, useState } from 'react'
import {products} from '../assets/assets'
export const shopcontext=createContext();

function Shopcontextprovider (props){

 
  const currency='$';
  const delivery_fee=10;  
  const[search,setsearch]=useState('');
  const[showsearch,setshowsearch]=useState(false);

const values={
  products,currency,delivery_fee,search,setsearch,showsearch,setshowsearch
}

return(
    <shopcontext.Provider value={values}> 
      {props.children}
    </shopcontext.Provider>
)

}
export default Shopcontextprovider;
