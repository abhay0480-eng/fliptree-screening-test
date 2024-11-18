import React from 'react'

const OrganieStore = ({flag}) => {
  return (
    <div className='grid grid-cols-2 gap-x-10 my-20'>
        <div className='text-center '>
            {!flag &&<div>
            <h2 className='text-5xl my-5'>Unlimited Plant Collections</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa accusamus magnam et, tempora ducimus, necessitatibus numquam eaque adipisci aperiam incidunt quos veniam pariatur. Molestias totam, veniam ea eveniet repellendus voluptate?</p>
            <div>
            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 my-5">
                Shop Now
            </button>
            </div>
            </div>}
            
            <div className='my-10'>
                <img src='https://www.ugaoo.com/cdn/shop/files/AImage_e21c5516-c7ff-4070-8739-99bf1bc71006.jpg?v=1708074927&width=1500' className='' />
            </div>
        </div>

        <div>
            {!flag && <div className='relative'>
                <img src='https://www.ugaoo.com/cdn/shop/files/GroPot_f204d032-9b87-44d3-bea7-435812ccc8f3.jpg?v=1687590083&width=1500' className='' />
                <div className='absolute -top-10 z-10 left-1/2  transform -translate-x-1/2 bg-white p-10  drop-shadow-2xl rounded-xl'>
                    <p className='text-5xl text-center'>Beautiful Indoor Plants</p>
                </div>
            </div>}
            <div className='my-5 text-center'>
                <h2 className='text-7xl text-center'>{flag || "Organie Store"}</h2>
                {!flag && <div>
                <p className='my-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa accusamus magnam et, tempora ducimus, necessitatibus numquam eaque adipisci aperiam incidunt quos veniam pariatur. Molestias totam, veniam ea eveniet repellendus voluptate?</p>
                <div>
                <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 my-5">
                    Shop Now
                </button>
                </div>
                </div>}

                {flag && <div className='px-32 my-10 '>

                    <div className='flex justify-start items-center gap-x-5 my-5'>
                        <div className='w-10 h-10 bg-green-500 rounded-full text-white text-center flex justify-center items-center'>1</div>
                        <div>
                            <p className='text-xl font-semibold'>Title1</p>
                            <p>Des1</p>
                        </div>
                    </div>   
                    <div className='flex justify-start items-center gap-x-5 my-5'>
                        <div className='w-10 h-10 bg-green-500 rounded-full text-white text-center flex justify-center items-center'>2</div>
                        <div>
                            <p className='text-xl font-semibold'>Title2</p>
                            <p>Des2</p>
                        </div>
                    </div>  
                    <div className='flex justify-start items-center gap-x-5 my-5'>
                        <div className='w-10 h-10 bg-green-500 rounded-full text-white text-center flex justify-center items-center'>3</div>
                        <div>
                            <p className='text-xl font-semibold'>Title3</p>
                            <p>Des3</p>
                        </div>
                    </div>   
                    
                </div>}
                
            </div>
        </div>
    </div>
  )
}

export default OrganieStore
