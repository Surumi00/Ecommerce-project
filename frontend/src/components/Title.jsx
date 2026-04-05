import React from 'react'

function Title({text1,text2}) {
  return (
    <>
    <div  className='flex justify-center  gap-2 item-center  mb-3'>
        <p className='  text-4xl  text-gray-500'>{text1} <span className='text-4xl text-gray-700' >{text2}</span> </p>
        <p className='w-9 h-[2px] bg-gray-500 mt-5 '></p>
        
         </div>
         <p className='text-sm text-gray-500 text-center '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor tenetur alias repellendus obcaecati pariatu!</p>
        
   </>
  )
}

export default Title