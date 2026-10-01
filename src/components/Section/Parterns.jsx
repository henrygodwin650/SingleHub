import React from 'react';
import brand1 from "../../assets/campanies/campany-1.png"
import brand2 from "../../assets/campanies/campany-2.png"
import brand3 from "../../assets/campanies/campany-3.png"
import brand4 from "../../assets/campanies/campany-4.png"
import brand5 from "../../assets/campanies/campany-5.png"

const Partners = () => {
  return (
    <div 
    data-aos='zoom-out'
    className='py-8 -mt-5 md:block hidden bg-white shadow-lg'>
      <div className="container mx-auto">
        <div className="flex gap-3 justify-center items-center opacity-75">
          <img src={brand1} alt="brand1" className="w-[100px]" />
          <img src={brand2} alt="brand1" className="w-[100px] dark:invert" />
          <img src={brand3} alt="brand1" className="w-[100px] dark:invert" />
          <img src={brand4} alt="brand1" className="w-[100px] dark:invert" />
          <img src={brand5} alt="brand1" className="w-[100px] dark:invert" />
        </div>
      </div>
    </div>
  )
}

export default Partners