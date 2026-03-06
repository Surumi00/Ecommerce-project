import React, { createContext } from 'react'
import {products} from '../assets/assets'
export const shopcontext=createContext();

function Shopcontextprovider (props){

 
  const currency='$';
  const delivery_fee=10;  

const values={
  products,currency,delivery_fee
}

return(
    <shopcontext.Provider value={values}> 
      {props.children}
    </shopcontext.Provider>
)

}
export default Shopcontextprovider;
