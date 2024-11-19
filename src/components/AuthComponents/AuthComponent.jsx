import React, { useState } from 'react';
import { useApi } from '../../api/api';

const AuthComponent = () => {
    // State to hold the input values
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        username: '' // Added for signup
    });
    const {handlePostRequest,handleGetRequest} = useApi()
    
    // State to toggle between login and signup
    const [isSignup, setIsSignup] = useState(false);

    const [error, setError] = useState({});




    const handleChange = (e) => {
        setFormData(pre => ({ ...pre, [e.target.name]: e.target.value }));
        setError(pre => ({...pre,[e.target.name]: ""}))
    };

   const validate = () => {
    let errors ={}
   
    if(!formData.username.trim()){
        errors.username = "Username is required"
        }
    
   
        if(isSignup){
        if(!formData.email.trim()){
        errors.email = "Email is required"
        }
}

    if(!formData.password.trim()){
        errors.password = "Password is required"
      }
    return errors
  }

    // Handle form submission
    const handleSubmit = async(e) => {
        e.preventDefault();
        const validateData = validate()
        console.log("validateData", validateData);
        
        if(Object.keys(validateData).length>0){
            setError(validateData)
          }else{
            if(isSignup){
                const payload = { 
                email: formData.email,
                password: formData.password,
                username: formData.username,
                role: 'ADMIN', 
                }// Adjust role as needed

                try {
                    const response = await handlePostRequest('users/register', payload);
                    console.log("responsesignup",response);
                    // Handle success response
                    if (response) {
                        
                        
                        setSuccess('Signup successful!');
                        // Optionally reset form or redirect
                        setFormData({ email: '', password: '', username: '' });
                    }
                } catch (err) {
                    setError('Signup failed!'); // Handle error response
                }

            }else{
                console.log("login block");
                
                const payload = {
                    password: formData.password,
                    username: formData.username
                }
                try {
                    const response = await handlePostRequest('users/login', payload);
                    console.log("responselogin",response);
                    // Handle success response
                    if (response) {
                       
                        
                        setSuccess('login successful!');
                        // Optionally reset form or redirect
                        setFormData({ email: '', password: '', username: '' });
                    }
                } catch (err) {
                    setError('Signup failed!'); // Handle error response
                }
            }
          }
      
    };

    return (
        <div className='fixed top-1/2 w-2/5 h-auto z-[100] rounded-lg text-white bg-black bg-opacity-90 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5 px-20'>
            <h1 className='text-4xl font-semibold my-5'>{isSignup ? 'Sign Up' : 'Login'}</h1>
            <form onSubmit={handleSubmit}>
                {isSignup && (
                    <div>
                    <input 
                        type='email' 
                        name='email'
                        placeholder='Email' 
                        value={formData.email} 
                        onChange={handleChange} 
                        className='w-full p-2 mb-4 rounded text-black'
                        
                    />
                    <p className='text-red-500 text-sm'>{error.email? error.email:""}</p>
                    </div>
                )}

                    <div>
                        <input 
                            type='text' 
                            name='username'
                            placeholder='Username' 
                            value={formData.username} 
                            onChange={handleChange} 
                            className='w-full p-2 mb-4 rounded text-black'
                        />
                         <p className='text-red-500 text-sm'>{error.username? error.username:""}</p>
                    </div>
               
                <div>
                <input 
                    type='password'
                    name='password' 
                    placeholder='Password' 
                    value={formData.password} 
                    onChange={handleChange} 
                    className='w-full p-2 mb-4 rounded text-black'
                    
                />
                <p className='text-red-500 text-sm'>{error.password? error.password:""}</p>

                </div>
                <button type='submit' className='bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 my-5'>
                    {isSignup ? 'Sign Up' : 'Login'}
                </button>
            </form>
            <p className='text-center'>
                {isSignup ? 'Already have an account?' : 'Don’t have an account?'}
                <button 
                    onClick={() => setIsSignup(!isSignup)} 
                    className='text-blue-400 ml-1'
                >
                    {isSignup ? 'Login' : 'Sign Up'}
                </button>
            </p>
        </div>
    );
};

export default AuthComponent;