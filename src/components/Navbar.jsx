import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import {asset} from '../asset/asset'
import {assets} from '../assets/frontend_assets/assets'
import { ShopContext } from '../context/ShopContext'
const Navbar = () => {
  const [visisble, setVisible] = useState(false)
  const {setShowSearch, getCartCount, navigate, token, setToken, setCartItems} = useContext(ShopContext)
  const logout = ()=>{
    navigate('/login')
    setToken('');
    setCartItems({});
    localStorage.removeItem('cartItems');
    localStorage.removeItem('token');
  }
  return (
    <div className = 'flex justify-between p-5 px-4'>
      <ul className='hidden sm:flex gap-5 text-base font-semibold font-sans text-gray-700'>
      <NavLink to='/' className = 'flex flex-col items-center gap-1'>
        <p>Home</p>
        <hr className = 'w-2/4 h-[1.5px] bg-gray-700 border-none hidden'></hr>
      </NavLink>
      <NavLink to='/collection' className = 'flex flex-col items-center gap-1'>
        <p>Collection</p>
        <hr className = 'w-2/4 h-[1.5px] bg-gray-700 border-none hidden'></hr>
      </NavLink>
      <NavLink to='/about' className = 'flex flex-col items-center gap-1'>
        <p>About</p>
        <hr className = 'w-2/4 h-[1.5px] bg-gray-700 border-none hidden'></hr>
      </NavLink>
      <NavLink to='/contact' className = 'flex flex-col items-center gap-1'>
        <p>Contact</p>
        <hr className = 'w-2/4 h-[1.5px] bg-gray-700 border-none hidden'></hr>
      </NavLink>
      </ul>
      <Link to={'/'}>
      <img src = {asset.logo} className = 'w-28 cursor-pointer' alt = 'logo'/>
      </Link>
      <ul className = 'flex items-center gap-5'>
        <div>
          <img onClick={()=>setShowSearch(true)} src = {asset.search} className = 'w-5 cursor-pointer' />
          </div>
        <div className='relative group'>
         
         <img onClick={()=> token ? null : navigate("/login")} src = {asset.user} className ='w-5 cursor-pointer'/>
         {/* Dropdown */}
         {
          token && 
          <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
            <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
              <p className='cursor-pointer hover:text-black'>My Profile</p>
              <p onClick={()=>navigate("/orders")} className='cursor-pointer hover:text-black'>Order</p>
              <p onClick={logout} className='cursor-pointer hover:text-black'>Logout</p>
            </div>

          </div>
         }
          
        </div>
        <Link>
          <img src = {asset.question} className='w-5'/>
        </Link>
        <Link to='./cart' className='relative'>
          <img src = {asset.cart} className = 'w-5 min-w-5'/>
          <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>
            {getCartCount()}</p>
        </Link>
        <img onClick={()=>setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden'/>
      </ul>


                                                         {/* Sidebar for small screem */}
      
      <div className={`absolute top-0 right-0 bottom-0 bg-white overflow-hidden transition-all ${visisble ? "w-full" : "w-0"}`}>
      <div className='flex flex-col text-gray-600'>
        <div onClick={()=>setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
          <img src={assets.dropdown_icon} className='rotate-180 h-4'/>
          <p>Back</p>
        </div>
        <NavLink className='py-2 pl-6 border' onClick={()=>setVisible(false)} to='/'>Home</NavLink>
        <NavLink className='py-2 pl-6 border' onClick={()=>setVisible(false)} to='/collection'>Collection</NavLink>
        <NavLink className='py-2 pl-6 border' onClick={()=>setVisible(false)} to='/about'>About</NavLink>
        <NavLink className='py-2 pl-6 border' onClick={()=>setVisible(false)} to='/contact'>Contact</NavLink>
      </div>
      </div>
    </div>
  )
}

export default Navbar
