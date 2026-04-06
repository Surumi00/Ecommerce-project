import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink }from 'react-router-dom'
import { shopcontext } from '../context/shopcontext'


function Navbar() {
  const{setshowsearch,getcartcount}=useContext(shopcontext);
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
          <link to='/login'><img src={assets.profile_icon} alt="profile_icon" className='w-5 cursor-pointer'></img></link>
          <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
          <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500'>
            <p className='cursor-pointer hover:text-black'>My Profile</p>
            <p className='cursor-pointer hover:text-black'>Orders</p>
            <p className='cursor-pointer hover:text-black'>Logout</p>
          </div>
        </div>
          </div>
          <Link to= '/cart' className='relative'>
          <img src={assets.cart_icon} alt="profile_icon" className='w-5 cursor-pointer'></img>
        <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]' > {getcartcount()}</p>
        
        </Link>
        </div>

    </div>
  )
}

export default Navbar