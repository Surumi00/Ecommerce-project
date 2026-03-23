import React, { useContext, useEffect, useState } from 'react'
import { shopcontext } from '../context/shopcontext'
import {assets} from '../assets/assets';
import { useLocation } from 'react-router-dom';

function Searchbar() {
        const{searchbar,setsearchbar,showsearch,setshowsearch}=useContext(shopcontext);
        const[visible,setvisible]=useState(false);
        const location=useLocation();
        useEffect(()=>{
            if(location.pathname.includes('collection') ){
              setvisible(true);
            }
            else {
              setvisible(false)
            }
            },[location])

  return  showsearch && visible ? (
    <div className=' text-center'>
        <div className='inline-flex item-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4  sm:w-1/2'>
        <input value={searchbar} onChange={(e)=>setsearchbar(e.target.value)} className='flex-1 outline-none bg-inherit text-sm' type='text' placeholder='search'/>
        <img className='w-5' src={assets.search_icon}/>    
        </div>
          <img onClick={()=>setshowsearch(false)} className='inline w-4 cursor-pointer' src={assets.cross_icon}/>
    </div>
  ) : null
}

export default Searchbar