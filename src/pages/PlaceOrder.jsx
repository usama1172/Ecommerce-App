import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/frontend_assets/assets'
import { ShopContext } from '../context/ShopContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const PlaceOrder = () => {
  const [method, setMethod] = useState('cod')
  const {navigate, backend_url, cartItems,setCartItems, getCartAmount, deliveryFee, products, token} = useContext(ShopContext)

  const [ formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    country: '',
    phone: ''
  })

  const onChangeHandler = (event)=>{
    const name = event.target.name
    const value = event.target.value
    setFormData(data => ({...data, [name]: value}))

  }
  const onSubmitHanler = async( event )=>{
    event.preventDefault()
    try {
      const orderItems = [];
      
      // Iterate over the cartItems object
      for (const itemId in cartItems) {
          // Iterate over the sizes of the current item
          for (const size in cartItems[itemId]) {
              if (cartItems[itemId][size] > 0) {
                  // Find the product from the products array using the itemId
                  const itemInfo = structuredClone(products.find(product => product._id === itemId));
                  
                  if (itemInfo) {
                      // Add size and quantity to the itemInfo
                      itemInfo.size = size;
                      itemInfo.quantity = cartItems[itemId][size];
                      
                      // Push the updated itemInfo to the orderItems array
                      orderItems.push(itemInfo);
                  }
              }
          }
      }
  
      // Now log the orderItems array, which should contain the structured data
      let orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + deliveryFee
      }
      console.log(backend_url);

      switch (method){
        case 'cod':
          const response = await axios.post(backend_url + '/api/orders/place', orderData, {headers: {token}})
          if(response.data.success) {
            toast.success('Order placed successfully');
            setCartItems({})
            navigate('/orders')
          } else {
            toast.error(response.data.message);
          }
          break
      }
      
    } catch (error) {
      console.error(error)
      toast.error('An error occurred while trying to place the order. Please try again.');
      
    }

  }


  return (
    <form onSubmit={onSubmitHanler} className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh]'>
      {/* left side */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={'Delivery'} text2={'Information'}/>
        </div>
        <div className='flex gap-3'>
        <input required onChange={onChangeHandler} name='firstname' value={formData.firstname} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='Firstname'/>
        <input required onChange={onChangeHandler} name='lastname' value={formData.lastname} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='Lastname'/>
        </div>
        <input required onChange={onChangeHandler} name='email' value={formData.email} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='email' placeholder='Email address'/>
        <input required onChange={onChangeHandler} name='street' value={formData.street} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='Street'/>
        <div className='flex gap-3'>
        <input required onChange={onChangeHandler} name='city' value={formData.city} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='City'/>
        <input required onChange={onChangeHandler} name='state' value={formData.state} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='State'/>
        </div>
        <div className='flex gap-3'>
        <input required onChange={onChangeHandler} name='zipcode' value={formData.zipcode} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='number' placeholder='Zipcode'/>
        <input required onChange={onChangeHandler} name='country' value={formData.country} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='Country'/>
        </div>
        <input required onChange={onChangeHandler} name='phone' value={formData.phone} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='number' placeholder='Phone'/>
      </div>
      
      {/* right side */}
      <div className='mt-8'>
        <div className='mt-8 min-w-80'>
        <CartTotal />
        </div>
      
      <div className='mt-12'>
      <Title text1={'Payment'} text2={'methods'}/>

      {/* pyment method section */}

      <div className='flex flex-col gap-3 lg:flex-row'>
        {/* <div onClick={()=>setMethod('stripe')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
          <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-400' : ''}`}></p>
          <img src={assets.stripe_logo} className='h-5 mx-4'/>
        </div>
        <div onClick={()=>setMethod('razorpay')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
          <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-green-400' : ''}`}></p>
          <img src={assets.razorpay_logo} className='h-5 mx-4'/>
        </div> */}
        <div onClick={()=>setMethod('cod')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
          <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`}></p>
          <p className='text-gray-500 text-sm font-medium mx-4'>Cash on Delivery</p>
        </div>
      </div>
      <div className='w-full text-end mt-8'>
      <button type='submit' className='bg-black text-white px-16 py-3 text-sm'>Place Order</button>
      </div>
      </div>
      </div>

      
    </form>
  )
}

export default PlaceOrder
