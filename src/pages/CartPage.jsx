import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, updateItemQuantity, clearCart } from '../store/cartSlice'; 

const CartPage = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items); 
    const totalPrice = useSelector((state) => state.cart.totalPrice); 

    const handleRemove = (id) => {
        dispatch(removeFromCart(id)); 
    };

    const handleQuantityChange = (id, quantity) => {
      
        if (quantity < 1) return; 
        dispatch(updateItemQuantity({ id, quantity })); 
    };

    const handleClearCart = () => {
        dispatch(clearCart()); 
    };

    console.log("cartItems",cartItems);
    

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    <table className="min-w-full bg-white border border-gray-300">
                        <thead>
                            <tr>
                                <th className="py-2 px-4 border-b">Product</th>
                                <th className="py-2 px-4 border-b">Quantity</th>
                                <th className="py-2 px-4 border-b">Price</th>
                                <th className="py-2 px-4 border-b">Total</th>
                                <th className="py-2 px-4 border-b">Actions</th>
                            </tr>
                        </thead>
                        <tbody >
                            {cartItems.map((item) => (
                                <tr key={item.id}>
                                    <td className="py-2 px-4 border-b">{item.name}</td>
                                    <td className="py-2 px-4 border-b">
                                        <input
                                            type="number"
                                            min="1"
                                            value={item.quantity}
                                            onChange={(e) => handleQuantityChange(item._id, Number(e.target.value))}
                                            className="border border-gray-300 rounded w-16 text-center"
                                        />
                                    </td>
                                    <td className="py-2 px-4 border-b">${item.price.toFixed(2)}</td>
                                    <td className="py-2 px-4 border-b">${(item.price * item.quantity).toFixed(2)}</td>
                                    <td className="py-2 px-4 border-b">
                                        <button
                                            onClick={() => handleRemove(item._id)}
                                            className="text-red-500 hover:text-red-700"
                                        >
                                            Remove
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="mt-4">
                        <h2 className="text-xl font-bold">Total Price: ${totalPrice.toFixed(2)}</h2>
                        <button
                            onClick={handleClearCart}
                            className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                        >
                            Clear Cart
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartPage;