import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

// Function to load state from local storage
const loadState = () => {
    try {
        const serializedState = localStorage.getItem('authState');
        if (serializedState === null) {
            return undefined; 
        }
        return JSON.parse(serializedState); 
    } catch (err) {
        return undefined; 
    }
};

// Function to save state to local storage
const saveState = (state) => {
  
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('authState', serializedState); // Save the state
    } catch (err) {
        console.error('Could not save state', err);
    }
};

// Load initial state from local storage
const initialState = loadState() || {
    token: "",
    data: {},
    isLoggedIn: false,
};

export const authStoreSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        // Action to set the token and user data
        login: (state, action) => {
            state.token = action.payload.token; // Set the token
            state.data = action.payload.data; // Set user data
            state.isLoggedIn = true; // Update login status
            saveState(state); // Save updated state to local storage
        },
        // Action to clear the auth state on logout
        logout: (state) => {
            state.token = "";
            state.data = {};
            state.isLoggedIn = false; // Update login status
            saveState(state);
            toast.success("User logout Successfully") // Save updated state to local storage
        },
    },
});

// Action creators are generated for each case reducer function
export const { login, logout } = authStoreSlice.actions;

export default authStoreSlice.reducer;