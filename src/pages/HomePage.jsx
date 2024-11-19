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
      <div className='mt-20 p-10 bg-green-300'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 text-xl font-semibold justify-items-center content-center'>
        <div className='flex flex-col items-center'>
          <LocalShippingIcon className='!text-5xl mb-2' />
          <span>Free Shipping</span>
        </div>
        <div className='flex flex-col items-center'>
          <SupportAgentIcon className='!text-5xl mb-2' />
          <span>Dedicated Support</span>
        </div>
        <div className='flex flex-col items-center'>
          <AccountBalanceWalletIcon className='!text-5xl mb-2' />
          <span>Money Back</span>
        </div>
      </div>
    </div>
    </div>
  )
}

export default HomePage
