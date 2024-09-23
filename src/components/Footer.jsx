import React from 'react'
import { asset } from '../asset/asset'
import { assets } from '../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
            <img src={asset.logo} className='w-32 mb-5'/>
            <p className='w-full md:w-2/3 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis inventore ullam porro officiis! Et fuga magnam neque dolore quae, numquam libero aliquam perferendis, saepe accusamus harum culpa similique alias quasi?</p>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
<li>Home</li>
<li>About Us</li>
<li>Delivery</li>
<li>Privacy Policy</li>
            </ul>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>Get In Touch</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>000000000</li>
                <li>contact@allbirds.com</li>

            </ul>
        </div>
      </div>
      <div>
            <hr/>
            <p className='py-5 text-sm text-center'>Copyright 2024@ allbirds.com - All Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer
