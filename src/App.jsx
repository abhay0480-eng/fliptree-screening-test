import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/HeaderComponents/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/FooterComponents/Footer'
import AuthComponent from './components/AuthComponents/AuthComponent'
import { useSelector } from 'react-redux'
import { Toaster } from 'react-hot-toast'

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <>
    {!isLoggedIn&&<AuthComponent/>}
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
     <Header/>
     <main className={`mt-20 ${ !isLoggedIn?"blur-md":""}`}>
      <Outlet/>
     </main>
     <Footer/>
    </>
  )
}

export default App
