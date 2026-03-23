import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink }from 'react-router-dom'
import { shopcontext } from '../context/shopcontext'


function Navbar() {
  const{setshowsearch}=useContext(shopcontext);
  return (
    <div className='flex items-center justify-between py-5 font-medium w-320 ml-28'>
      <Link to='/'>
        <img src={assets.logo} className='w-36' alt='logo' />
        </Link>
        <ul className='hidden sm:flex gap-5 text-sm  text-gray-700'>
        <NavLink to='/' className='flex flex-col items-center gap-1'>
        <p>Home</p>
        <hr className='w-full'/>
        </NavLink>
        <NavLink to='/collection' className='flex flex-col items-center gap-1'>
        <p>Collections</p>
        <hr className='w-full'/>
        </NavLink>
         <NavLink to='/About' className='flex flex-col items-center gap-1'>
        <p>About</p>
        <hr className='w-full'/>
        </NavLink>
        <NavLink to='/Contact' className='flex flex-col items-center gap-1'>
        <p>Contact</p>
        <hr className='w-full'/>
        </NavLink>
        </ul>
        <div className='flex items-center gap-5'>
          <img onClick={()=>setshowsearch(true)} src={assets.search_icon} alt="search_icon" className='w-5 cursor-pointer'></img>
          <div >
          <img src={assets.profile_icon} alt="profile_icon" className='w-5 cursor-pointer'></img>
          </div>
          <img src={assets.cart_icon} alt="profile_icon" className='w-5 cursor-pointer'></img>
        </div>

    </div>
  )
}

export default Navbar