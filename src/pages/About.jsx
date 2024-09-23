import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import NewsLetter from '../components/NewsLetter'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
      <Title text1={'About'} text2={'Us'}/>
      </div>
      <div className='flex flex-col md:flex-row my-10 gap-16'>
      <img src={assets.about_img} className='w-full md:max-w-[450px]' alt='about img' />
      <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptatum facilis a omnis, molestiae laudantium hic recusandae, eaque labore possimus eligendi, architecto reprehenderit sed ea similique reiciendis. Necessitatibus, eligendi eius.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat fuga dolor debitis vero, ullam neque eum reiciendis incidunt optio totam ea illum! Recusandae odit, quas eum commodi at in omnis.</p>
    <b className='text-gray-800'>Our Mission</b>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto quis odit, porro facere ea ex accusamus exercitationem commodi animi quisquam? Quidem veritatis at debitis optio veniam fugiat labore dolorum ipsa?</p>
      </div>
      </div>
      <div className='text-xl py-4'>
      <Title text1={'Why'} text2={'Chose Us'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
      <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Quality Assurance</b>
        <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi odit nobis quaerat fuga ut sit fugiat ullam quam omnis ipsum.</p>
      </div>
      <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Quality Assurance</b>
        <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi odit nobis quaerat fuga ut sit fugiat ullam quam omnis ipsum.</p>
      </div>
      <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Quality Assurance</b>
        <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi odit nobis quaerat fuga ut sit fugiat ullam quam omnis ipsum.</p>
      </div>
      </div>
      <NewsLetter/>
    </div>
  )
}

export default About
