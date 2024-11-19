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
        <div className='grid grid-cols-5 gap-10 my-10'>
            {productsData?.map((item) => {
                const currentQuantity = quantities[item._id] || 1; // Get current quantity or default to 1
                return (
                    <div key={item?._id}>
                        <div className='text-center hover:scale-105 duration-300 cursor-pointer rounded-lg'>
                            <div>
                                <img src={item?.mainImage?.url} alt='' className='rounded-lg' />
                            </div>
                            <div>
                                <p className='text-xl font-semibold my-2'>{item?.name}</p>
                                <p>$ {item?.price}</p>
                            </div>
                            <div className='flex items-center justify-center'>
                                <input
                                    type='number'
                                    min='0' // Allow zero to indicate no quantity
                                    value={currentQuantity} // Show current quantity
                                    onChange={(e) => handleQuantityChange(item._id, Math.max(0, e.target.value))} // Allow zero
                                    className='border border-gray-300 rounded w-16 text-center mr-2'
                                />
                                <button
                                    className='bg-green-400 px-3 py-2 rounded-lg my-3'
                                    onClick={() => handleAddToCart(item)}
                                >
                                    {currentQuantity > 0 ? 'Add to Cart' : 'Out of Stock'}
                                </button>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ProductListUI;