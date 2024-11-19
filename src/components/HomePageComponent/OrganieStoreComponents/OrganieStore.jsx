import React from 'react'

const OrganieStore = ({flag}) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-10 my-20'>
        <div className='text-center '>
            {!flag &&<div>
            <h2 className='text-3xl md:text-5xl my-5'>Unlimited Plant Collections</h2>
            <p className='px-4 md:px-0'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa accusamus magnam et, tempora ducimus, necessitatibus numquam eaque adipisci aperiam incidunt quos veniam pariatur. Molestias totam, veniam ea eveniet repellendus voluptate?</p>
            <div>
            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 my-5">
                Shop Now
            </button>
            </div>
            </div>}
            
            <div className='my-10'>
                <img src='https://www.ugaoo.com/cdn/shop/files/AImage_e21c5516-c7ff-4070-8739-99bf1bc71006.jpg?v=1708074927&width=1500' alt='Plant Collection' className='w-full h-auto rounded-lg' />
            </div>
        </div>

        <div>
            {!flag && <div className='relative'>
                <img src='https://www.ugaoo.com/cdn/shop/files/GroPot_f204d032-9b87-44d3-bea7-435812ccc8f3.jpg?v=1687590083&width=1500' alt='Indoor Plants' className='w-full h-auto rounded-lg' />
                <div className='absolute -top-10 z-10 left-1/2 transform -translate-x-1/2 bg-white p-5 drop-shadow-2xl rounded-xl'>
                    <p className='text-3xl md:text-5xl text-center'>Beautiful Indoor Plants</p>
                </div>
            </div>}
            <div className='my-5 text-center'>
                <h2 className='text-4xl md:text-7xl'>{flag || "Organie Store"}</h2>
                {!flag && <div>
                <p className='my-5 px-4 md:px-0'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa accusamus magnam et, tempora ducimus, necessitatibus numquam eaque adipisci aperiam incidunt quos veniam pariatur. Molestias totam, veniam ea eveniet repellendus voluptate?</p>
                <div>
                <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 my-5">
                    Shop Now
                </button>
                </div>
                </div>}

                {flag && <div className='px-4 md:px-32 my-10'>
                    {[1, 2, 3].map((num) => (
                        <div key={num} className='flex justify-start items-center gap-x-5 my-5'>
                            <div className='w-10 h-10 bg-green-500 rounded-full text-white text-center flex justify-center items-center'>{num}</div>
                            <div>
                                <p className='text-xl font-semibold'>Title{num}</p>
                                <p>Description{num}</p>
                            </div>
                        </div>
                    ))}
                </div>}
                
            </div>
        </div>
    </div>
  )
}

export default OrganieStore
