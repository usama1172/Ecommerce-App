import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title' 
import ProductsItem from './ProductsItem'

const LatestCollection = () => {
const { products } = useContext(ShopContext)
const [latestProduct, setLatestProduct] = useState([]);
useEffect(()=>{
    setLatestProduct(products.slice(0,10));
},[])
return (
    <div className='my-10'>
        <div className='text-3xl text-center py-8'>
      <Title text1={'LATEST'} text2={'COLLECTION'}/>
      <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, dolor?
      </p>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
            latestProduct.map((item,index)=>(
                <ProductsItem key={index} id={item._id} image={item.image} price={item.price} name={item.name} />
            ))
        }
      </div>
    </div>
  )
}

export default LatestCollection
