import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FaceIcon from '@mui/icons-material/Face';
import { useDispatch, useSelector } from 'react-redux';
import LogoutIcon from '@mui/icons-material/Logout';
import { logout } from '../../store/authStoreSlice';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const dispatch = useDispatch()
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  return (
    <div className="flex items-center z-50 justify-between p-4 bg-green-500 text-white fixed top-0 w-full ">
        <h1>Plant</h1>
        <div className='flex justify-start items-center gap-x-3 cursor-pointer'>
        <NavLink 
                to="/" 
                className={({ isActive }) => !isActive ? 'text-green-100' : 'text-green-800'} 
            >
                Home
            </NavLink>
            <NavLink 
                to="/shop" 
                className={({ isActive }) => !isActive ? 'text-green-100' : 'text-green-800'} 
            >
                Shop
            </NavLink>
            <NavLink 
                to="/product" 
                className={({ isActive }) => !isActive ? 'text-green-100' : 'text-green-800'} 
            >
                Product
            </NavLink>
            <NavLink 
                to="/blog" 
                className={({ isActive }) => !isActive ? 'text-green-100' : 'text-green-800'} 
            >
                Blog
            </NavLink>
            <NavLink 
                to="/contact" 
                className={({ isActive }) => !isActive ? 'text-green-100' : 'text-green-800'} 
            >
                Contact
            </NavLink>
        </div>
        <div className='flex justify-start items-center gap-x-5 cursor-pointer'>
          <div className='text-center' onClick={()=> dispatch(logout())}>
              {isLoggedIn?<LogoutIcon/>:<FaceIcon/>}
            <p>{isLoggedIn?"Logout":"Login"}</p>
          </div>
          <Link to="/cart" className='relative cursor-pointer'>
                <ShoppingCartIcon />
                <p>Cart</p>
                {totalQuantity > 0 && (
                    <span className='absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center'>
                        {totalQuantity}
                    </span>
                )}
            </Link>
            
        </div>
    </div>
  )
}

export default Header


