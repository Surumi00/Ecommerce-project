import React, { useState } from 'react'

function Login() {
  const[currentstate,setcurrentstate]=useState("Sign Up");

  return (
    <form className='flex flex-col items-center  max-w-96  m-auto mt-14 mb-60 gap-4 text-gray-800'>
      <div className='inline-flex  items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl'>{currentstate} </p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800'/>
      </div>
     
     
      {currentstate === "login" ? "" :<input type='text' className='w-full px-3 py-2 border border-gray-800 ' placeholder='Name' required />} 
       <input type='email' className='w-full px-3 py-2 border border-gray-800 ' placeholder='Email' required/> 
       <input type='password' className='w-full px-3 py-2 border border-gray-800 ' placeholder='Password' required/> 
       <div className=' w-full flex justify-between mt-[-8px'>
          <p className='cursor-pointer'>Forget password</p>
          {
            currentstate === 'Sign Up' ? <p onClick={()=>setcurrentstate("login")} className='cursor-pointer' >login</p> : <p onClick={()=>setcurrentstate("Sign Up")} className='cursor-pointer' >Create Account</p>
          }
       </div>
    </form>
  )
}
 
export default Login