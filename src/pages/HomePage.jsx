import React from 'react'
import Hero from '../components/HomePageComponent/HeroComponents/Hero'
import NewArrival from '../components/HomePageComponent/NewArrivalComponent/NewArrival'
import OrganieStore from '../components/HomePageComponent/OrganieStoreComponents/OrganieStore'
import IndoorPlants from '../components/HomePageComponent/IndoorPlants/IndoorPlants'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

const HomePage = () => {
  return (
    <div>
      <Hero/>
      <NewArrival title="New Arrival"/>
      <OrganieStore flag=""/>
      <IndoorPlants/>
      <NewArrival title="Popular Items"/>
      <OrganieStore flag="Where to buy Plants"/>
      <NewArrival title="Instagram Images"/>
      <div className='grid grid-cols-3 gap-x-5 text-xl font-semibold justify-items-center content-center mt-20 p-10 bg-green-300'>
        <div><LocalShippingIcon className='!text-5xl'/> Free Shipping</div>
        <div><SupportAgentIcon className='!text-5xl'/>  Dedicated Support</div>
        <div><AccountBalanceWalletIcon className='!text-5xl'/> Money back</div>
      </div>
    </div>
  )
}

export default HomePage
