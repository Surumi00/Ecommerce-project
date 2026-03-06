import React, { useContext } from 'react'
import {Link} from 'react-router-dom';
import { shopcontext } from '../context/shopcontext';
function Productitem({id,image,name,price}) {
    const{currency}=useContext(shopcontext);
  return (
    <div > 
        <Link to={`/product/${id}`} >
            <div className='overflow-hidden'>
                <img className='hover:scale-110 transition ease-in-out' src={image[0] } />
                </div>
                <p>{name}</p>
                <p>{currency}{price}</p>
            
        </Link>
    </div>
  )
}

export default Productitem;