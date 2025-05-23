import React from 'react'
import {assets}  from "../assets/frontend_assets/assets.js";

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
        <div>
            <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="" />
          <p className='font-semibold'>Easy Exchange Policy</p>
          <p className='text-gray-400'>we offer Hassle free Exchange</p>
        </div>
        <div>
            <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt="" />
          <p className='font-semibold'>7 Days Return </p>
          <p className='text-gray-400'>we offer Hassle free Return</p>
        </div>
        <div>
            <img src={assets.support_img} className='w-12 m-auto mb-5' alt="" />
          <p className='font-semibold'>24/7 Contact Supporty</p>
          <p className='text-gray-400'>All time support</p>
        </div>

    </div>
  )
}

export default OurPolicy