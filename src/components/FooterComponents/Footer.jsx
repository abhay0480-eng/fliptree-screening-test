import React from 'react'

const Footer = () => {
  return (
    <>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-5 py-10 px-5 bg-green-200'>
      <div className='col-span-1 md:col-span-2'>
        <h2 className='text-3xl md:text-5xl font-semibold'>Plant</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
      </div>
      <div className='col-span-1'>
        <h2 className='text-xl font-semibold'>Quick Links</h2>
        <ul className='list-none space-y-1'>
          <li>link1</li>
          <li>link2</li>
          <li>link3</li>
          <li>link4</li>
        </ul>
      </div>
      <div className='col-span-1'>
        <h2 className='text-xl font-semibold'>Products</h2>
        <ul className='list-none space-y-1'>
          <li>link1</li>
          <li>link2</li>
          <li>link3</li>
          <li>link4</li>
        </ul>
      </div>
      <div className='col-span-1'>
        <h2 className='text-xl font-semibold'>Contact</h2>
        <ul className='list-none space-y-1'>
          <li>link1</li>
          <li>link2</li>
          <li>link3</li>
          <li>link4</li>
        </ul>
      </div>
    </div>
    <div className='flex flex-col md:flex-row justify-between items-center gap-5 py-5 text-white px-5 bg-green-600'>
        <p>Terms and Conditions</p>
        <p>Social Media Icons</p>
        <p>@2024 | All rights reserved</p>
    </div>
    </>
  )
}

export default Footer
