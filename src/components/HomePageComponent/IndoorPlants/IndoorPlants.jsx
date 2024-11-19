import React from 'react'

const IndoorPlants = () => {
  return (
    <div className="my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 bg-[url(https://www.ugaoo.com/cdn/shop/collections/Indoor-Plants-Category-Banner_1.png?v=1731046768&width=3000)] bg-cover bg-center">
        <div className="h-full bg-black bg-opacity-30 text-white p-6 md:p-10 lg:p-20 flex flex-col justify-center">
          <p className="text-3xl md:text-5xl lg:text-6xl font-bold my-5">Which Indoor Plants are Best</p>
          <p className="text-sm md:text-base lg:text-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores perferendis.
          </p>
        </div>
        <div className="hidden md:block"></div>
      </div>
    </div>
  )
}

export default IndoorPlants
