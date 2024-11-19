import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FaceIcon from '@mui/icons-material/Face';
import { useDispatch, useSelector } from 'react-redux';
import LogoutIcon from '@mui/icons-material/Logout';
import { logout } from '../../store/authStoreSlice';

const Header = () => {
  const dispatch = useDispatch()
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <header className="flex items-center z-50 justify-between p-4 bg-green-500 text-white fixed top-0 w-full ">
        <h1>Plant</h1>
        <div className='flex justify-start items-center gap-x-3'>
            <p>Home</p>
            <p>Shop</p>
            <p>Product</p>
            <p>Blog</p>
            <p>Contact</p>
        </div>
        <div className='flex justify-start items-center gap-x-5 cursor-pointer'>
          <div className='text-center' onClick={()=> dispatch(logout())}>
              {isLoggedIn?<LogoutIcon/>:<FaceIcon/>}
            <p>{isLoggedIn?"Logout":"Login"}</p>
          </div>
          <div>
            <ShoppingCartIcon/>
            <p>Cart</p>
          </div>
            
        </div>
    </header>
  )
}

export default Header


