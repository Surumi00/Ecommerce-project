import React, { useContext, useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { shopcontext } from '../context/shopcontext';
import { assets } from '../assets/assets';
import Relatedproduct from '../components/Relatedproduct';

function Product() {

    const{productId}=useParams();
    const[productdata,setproductdata]=useState(null);
    const{products,currency,addtocart}=useContext(shopcontext);
    const[image,setimage]=useState('');
    const[size,setsize]=useState('');
    
    const fetchproductdata = async ()=>{
      
      products.find((item)=>{
        if(item._id===productId){
          setproductdata(item);
          setimage(item.image[0]);
        }
      })
      
    }

    useEffect(()=>{
        fetchproductdata();
        window.scrollTo(0, 0);
    },[productId,products])


  return productdata ? (
    <div className='border-t-2 border-gray-200 mx-23 pt-10 transition-opacity ease-in duration-500 opacity-100'>
        <div className='gap-12 flex sm:gap-12 flex-col sm:flex-row'>
            <div className='flex-1 flex flex-col-reverse  gap-3 sm:flex-row'>
              <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full '>
                    {
                      productdata.image.map((item,index)=>(
                        <img onClick={()=>setimage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer '  />
                      ))
                    }
              </div>
              <div className='w-full sm:w-[80%]'>
                    <img className='w-full h-auto' src={image}  />
              </div>

            </div>
            <div className='flex-1'>
  <h1 className='font-medium text-2xl mt-2'>{productdata.name}</h1>

  <div className='flex items-center gap-1 mt-2'>
    <img src={assets.star_icon} alt="" className="w-3.5" />
    <img src={assets.star_icon} alt="" className="w-3.5" />
    <img src={assets.star_icon} alt="" className="w-3.5" />
    <img src={assets.star_icon} alt="" className="w-3.5" />
    <img src={assets.star_dull_icon} alt="" className="w-3.5" />
    <p className='pl-2'>(122)</p>
  </div>

  <p className='mt-5 text-3xl font-medium'>
    {currency}{productdata.price}
  </p>
  <p className='mt-5 text-gray-500 md:w-4/5' >{productdata.description}</p>
  <p className='mt-5 text-2xl font-small'>size</p>
  <div className='flex gap-4'>
    {productdata.sizes.map((item,index)=>(
      <button onClick={()=>setsize(item)} className={`border border-gray-100 py-2 px-4 mt-4 bg-gray-100 ${item===size ? 'border-orange-500' : ''}`} key={index} >{item}</button>
    ))}

  </div>
  <button  onClick={()=>addtocart(productdata._id,size)}   className=' mt-8 bg-black text-white py-3 px-10 text-sm active:bg-gray-700' >ADD TO CART</button>
  <hr className='mt-5 border-gray-300'/>
  <div className='mt-4 text-sm text-gray-500 flex flex-col gap-1'>
    <p>100% original product</p>
    <p>Cash on delivery is available </p>
    <p>Easy return and exchange within 7 days</p>
  </div>
</div>


        </div>
        <div className='mt-20 mb-3'>
          <div className='flex '>
            <p className='border border-gray-300 px-8 py-3 font-medium  '>Description</p>
            <p className='border border-gray-300 px-8 py-3 text-sm'>Review (177)</p>

          </div>
          <div className='flex flex-col gap-4 border border-gray-300 text-sm text-gray-500 px-8 py-10 mb-20'>
            <p> Key benefits include 24/7 global reach, lower operating costs than physical stores, and access to valuable customer behavior data Key benefits include 24/7 global reach, lower operating costs than physical stores, and access to valuable customer behavior data</p>
            <p>An e-commerce website is an online platform that enables businesses to sell products or services directly to customers over the internet, handling transactions, payments, and logistics digitally Key benefits include 24/7 global reach, lower operating costs than physical stores, and access to valuable customer behavior data</p>
          </div>

        </div>
        <Relatedproduct category={productdata.category} subcategory={productdata.subCategory}/>
    </div>
    

  ) :<div className='opacity-0'></div>
}

export default Product