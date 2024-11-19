import { createSlice } from '@reduxjs/toolkit';

// Function to load state from local storage
const loadState = () => {
    try {
        const serializedState = localStorage.getItem('cartState');
        if (serializedState === null) {
            return undefined; // Return undefined if no state is found
        }
        return JSON.parse(serializedState); // Parse and return the state
    } catch (err) {
        return undefined; // Return undefined if there's an error
    }
};

// Function to save state to local storage
const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('cartState', serializedState); // Save the state
    } catch (err) {
        console.error('Could not save state', err);
    }
};

// Load initial state from local storage
const initialState = loadState() || {
    items: [], 
    totalQuantity: 0, 
    totalPrice: 0, 
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const newItem = action.payload; 
           
            const existingItem = state.items.find(item => item._id === newItem._id);
            
            

            if (existingItem) {
                existingItem.quantity += newItem.quantity;
            } else {
                state.items.push({ ...newItem, quantity: newItem.quantity });
            }

            state.totalQuantity += newItem.quantity;
            state.totalPrice += newItem.price * newItem.quantity;

            saveState(state); // Save updated state to local storage
        },

        removeFromCart: (state, action) => {
          const id = action.payload; 
            const existingItem = state.items.find(item => item._id === id);

            if (existingItem) {
                state.totalQuantity -= existingItem.quantity;
                state.totalPrice -= existingItem.price * existingItem.quantity;

                state.items = state.items.filter(item => item._id !== id);
            }

            saveState(state); // Save updated state to local storage
        },

        clearCart: (state) => {
            state.items = [];
            state.totalQuantity = 0;
            state.totalPrice = 0;

            saveState(state); // Save updated state to local storage
        },

        updateItemQuantity: (state, action) => {
            const { id, quantity } = action.payload; 
            const existingItem = state.items.find(item => item._id === id);

            if (existingItem) {
                state.totalQuantity += quantity - existingItem.quantity; 
                state.totalPrice += (quantity - existingItem.quantity) * existingItem.price;
                existingItem.quantity = quantity; 
            }

            saveState(state); // Save updated state to local storage
        },
    },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, clearCart, updateItemQuantity } = cartSlice.actions;

export default cartSlice.reducer;