import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/frontend_assets/assets'
import Title from '../components/Title'
import ProductsItem from '../components/ProductsItem'

const Collection = () => {
    const { products, search, showSearch } = useContext(ShopContext)
    const [showFilter, setShowFilter] = useState(false)
    const [filterProducts, setFilterProducts] = useState([])
    const [category, setCategory] = useState([])
    const [subcategory, setSubCategory] = useState([])
    const [sortType, setSortType] = useState([])


    const togleCategory =(e)=>{
        if (category.includes(e.target.value)) {
            setCategory(prev=> prev.filter(item=>item !== e.target.value))
        }
        else{
            setCategory(prev=>[...prev,e.target.value])
        }
    }

    const togleSubCategory =(e)=>{
        if(subcategory.includes(e.target.value)){
            setSubCategory(prev=>prev.filter(item=>item!==e.target.value))
        }
        else{
            setSubCategory(prev=>[...prev,e.target.value])
        }
    }

    const applyFilter=()=>{
        let productsCopy = products.slice()
        if (showSearch && search) {
            productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
        }

        if (category.length > 0) {
            productsCopy = productsCopy.filter(item=>category.includes(item.category))
        }
        if (subcategory.length > 0) {
            productsCopy = productsCopy.filter(item=>subcategory.includes(item.subCategory))
        }
        setFilterProducts(productsCopy)
    }


    const SortProduct =()=>{
        let fpCopy = filterProducts.slice()
        switch (sortType) {
            case 'low-high':
                setFilterProducts(fpCopy.sort((a,b)=>(a.price - b.price)))
                break;
            case 'high-low':
                setFilterProducts(fpCopy.sort((a,b)=>(b.price - a.price)))
                break;
            default:
                applyFilter()
                break;
        }
    }

    useEffect(()=>{
        SortProduct()
    },[sortType])

    useEffect(()=>{
        applyFilter()
    },[category,subcategory,search,showSearch])
  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      
      {/* FilterOption */}
        <div className='min-w-60'>
            <p onClick={()=>setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>Filters
            <img className={`h-3 sm:hidden ${showFilter? 'rotate-90' : ''}`} src={assets.dropdown_icon}/>
            </p>
              {/* Category filter */}
            
            <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
                <p className='mb-3 text-sm font-medium'>Categories</p>
                <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                    <p className='flex gap-2'>
                        <input className='w3' type='checkbox' value={'Men'} onChange={togleCategory}/>Men
                    </p>
                    <p className='flex gap-2'>
                        <input className='w3' type='checkbox' value={'Women'} onChange={togleCategory}/>Women
                    </p>
                    <p className='flex gap-2'>
                        <input className='w3' type='checkbox' value={'Kids'} onChange={togleCategory}/>Kids
                    </p>
                </div>
        </div>

        {/* subcategory filter */}

        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
                <p className='mb-3 text-sm font-medium'>Type</p>
                <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                    <p className='flex gap-2'>
                        <input className='w3' type='checkbox' value={'Topwear'} onChange={togleSubCategory}/>Topwear
                    </p>
                    <p className='flex gap-2'>
                        <input className='w3' type='checkbox' value={'Bottomwear'} onChange={togleSubCategory}/>Bottomwear
                    </p>
                    <p className='flex gap-2'>
                        <input className='w3' type='checkbox' value={'Winterwear'} onChange={togleSubCategory}/>Winterwear
                    </p>
                </div>
        </div>

        </div>
        <div className='flex-1'>
            <div className='flex justify-between text-base sm:text-2xl mb-4'>
                <Title text1={'All'} text2={'Collections'}/>
                {/* Product-sort */}
                <select onChange={(e)=>setSortType(e.target.value)} className='border border-gray-300 text-sm px-2'>
                    <option value="relevant">Sort by: Reelevant</option>
                    <option value="low-high">Sort by: Low to Hight</option>
                    <option value="high-low">Sort by: Hight to Low</option>
                </select>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
                    {
                        filterProducts.map((item,index)=>(
                                <ProductsItem key={index} name={item.name} id={item._id} price={item.price} image={item.image}/>
                        ))
                    }
                </div>
        </div>

    </div>
  )
}

export default Collection