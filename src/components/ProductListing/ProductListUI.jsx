import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/cartSlice'; 

const ProductListUI = ({ productsData }) => {
    const dispatch = useDispatch();
    const [quantities, setQuantities] = useState({}); 

    const handleAddToCart = (item) => {
        const quantity = quantities[item._id] || 1; 
        if (quantity > 0) {
            dispatch(addToCart({ ...item, quantity })); 
            setQuantities({ ...quantities, [item._id]: 0 }); 
        }
    };

    const handleQuantityChange = (id, value) => {
        setQuantities({ ...quantities, [id]: Math.max(0, value) }); // Update quantity for the specific product
    };

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 my-10'>
            {productsData?.map((item) => {
                const currentQuantity = quantities[item._id] || 1; // Get current quantity or default to 1
                return (
                    <div key={item?._id} className='flex flex-col items-center text-center border rounded-lg p-4 hover:shadow-lg transition-shadow duration-300'>
                        <div className='flex-grow'>
                            <img src={item?.mainImage?.url} alt={item?.name} className='rounded-lg w-full h-48 object-cover mb-2' />
                        </div>
                        <div>
                            <p className='text-lg font-semibold my-2'>{item?.name}</p>
                            <p className='text-md font-medium'>${item?.price}</p>
                        </div>
                        <div className='flex items-center justify-center mt-3'>
                            <input
                                type='number'
                                min='0' // Allow zero to indicate no quantity
                                value={currentQuantity} // Show current quantity
                                onChange={(e) => handleQuantityChange(item._id, Math.max(0, e.target.value))} // Allow zero
                                className='border border-gray-300 rounded w-16 text-center mr-2'
                            />
                            <button
                                className='bg-green-400 text-white px-3 py-2 rounded-lg'
                                onClick={() => handleAddToCart(item)}
                            >
                                {currentQuantity > 0 ? 'Add to Cart' : 'Out of Stock'}
                            </button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ProductListUI;