import React from 'react'

const Footer = () => {
  return (
    <>
    <div className='grid grid-cols-5 gap-x-5 py-10 px-5 bg-green-200'>
      <div className='col-span-2'>
        <h2 className='text-5xl font-semibold'>Plant</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
      </div>
      <div className='col-span-1 list-none'>
        <h2 className='text-xl font-semibold'>Quick Link</h2>
        <li>link1</li>
        <li>link2</li>
        <li>link3</li>
        <li>link4</li>
      </div>
      <div className='col-span-1 list-none'>
        <h2 className='text-xl font-semibold'>Product</h2>
        <li>link1</li>
        <li>link2</li>
        <li>link3</li>
        <li>link4</li>
      </div>
      <div className='col-span-1 list-none'>
        <h2 className=' text-xl font-semibold'>Contact</h2>
        <li className=''>link1</li>
        <li>link2</li>
        <li>link3</li>
        <li>link4</li>
      </div>
    </div>
    <div className='flex justify-between items-center gap-5 flex-wrap py-5 text-white px-5 bg-green-600'>
        <p>Terms and Condition</p>
        <p>Social Media Icons</p>
        <p>@2024 | All rights reseved</p>
    </div>
    </>
  )
}

export default Footer
