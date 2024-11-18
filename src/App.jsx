import { useState } from 'react'
import './App.css'
import Header from './components/HeaderComponents/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/FooterComponents/Footer'

function App() {

  return (
    <>
     <Header/>
     <main className='mt-10'>
      <Outlet/>
     </main>
     <Footer/>
    </>
  )
}

export default App
