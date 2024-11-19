import React, { useEffect } from 'react'
import { useApi } from '../api/api'
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { setProducts } from '../store/productsSlice'
import ProductListUI from '../components/ProductListing/ProductListUI'

const ProductPage = () => {
  const {handlePostRequest,handleGetRequest} = useApi()
  const dispatch = useDispatch()
  const productsData = useSelector((state) => state.products.products);


  const fetchProductsData = async() => {
      try {
        const responseEcommerce = await handleGetRequest("seed/ecommerce")
        const fetchProducts = await handleGetRequest("ecommerce/products?page=1&limit=15")

        if(fetchProducts?.success){
          dispatch(setProducts(fetchProducts?.data?.products))
        }

      } catch (error) {
        console.log(error);
        toast.error(error)
        
      }
  }

  useEffect(() => {
    fetchProductsData()
  },[])

  
  
  return (
    <div>
      <div className='p-10 bg-green-300 text-center text-white text-5xl'>Products</div>
      <ProductListUI productsData={productsData}/>
    </div>
  )
}

export default ProductPage
