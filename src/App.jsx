import { useState } from 'react'
import './App.css'
import Header from './components/HeaderComponents/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/FooterComponents/Footer'
import AuthComponent from './components/AuthComponents/AuthComponent'

function App() {

  return (
    <>
    <AuthComponent/>
     <Header/>
     <main className='mt-20'>
      <Outlet/>
     </main>
     <Footer/>
    </>
  )
}

export default App
