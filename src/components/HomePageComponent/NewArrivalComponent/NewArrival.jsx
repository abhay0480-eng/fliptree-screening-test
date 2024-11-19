import React, { useEffect, useState } from 'react'

const NewArrival = ({title}) => {

  const [productsData, setProductsData] = useState([]);

  const fetchData = async() => {
    try {
      const reqData = await fetch("https://fakestoreapi.in/api/products?limit=4")
      const resData = await reqData.json()
      setProductsData(resData?.products || [])

      // if(resData?.success){
      //   setProductsData(resData?.data?.products || [])
      // }
      
    } catch (error) {
      console.log("error:", error);
    }
  }

  useEffect(()=>{
    fetchData()
  },[])

  

  return (
    <div>
      <h2 className='text-3xl text-center my-10'>{title}</h2>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-y-14 lg:grid-cols-4 gap-5 my-5 mx-10'>
        {productsData.map((item,index) => {
          return(
            <div key={item?.id} className=' rounded-xl cursor-pointer hover:scale-105 duration-500'>
              <div>
                <img src={item?.image} className='rounded-xl bg-transparent' />
              </div>
             { title !== "Instagram Images" &&<div className='p-5 text-center'>
                <p className='text-sm md:text-base lg:text-lg font-semibold line-clamp-1'>{item?.title}</p>
                <p className='text-sm md:text-sm lg:text-base font-semibold line-clamp-1'> $ {item?.price}</p>
              </div>}
              <div className='flex justify-center items-center '>
              {title !== "Instagram Images" && <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                Add to Cart
              </button>}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default NewArrival
