"use client"
import Image from 'next/image'
import React from 'react'
import { useState } from 'react'


const Descripcion = () => {

    const [hasBorder, setBorder] = useState(false)
    const handleClick = () => setBorder(!hasBorder)
    console.log(hasBorder)

  return (
    <div className='w-[600px] h-auto mx-auto grid grid-cols-2'>

      <button onClick={handleClick} className='bg-transparent border-none cursor-pointer'>  
      <div>
        <Image 
        src='/images/description.jpg' 
        width={600} 
        height={200}
        className='object-cover h-full '
        alt='loquesea' />
      </div>
      </button>
        <div className=''>
            <h1 className='text-2xl ml-5 text-white font-bold'>
                Bring the future today
            </h1>

            <h2 className='text-white ml-5 mt-5'>
                Future World: Your Gateway to tomorrow tech dive into a world of cutting-edge gadgets
                and tech accessories that will make your life easier and more fun. From smart home devices to
                wearable tech, from audio and video to gaming gadgets, you'll find a huge selection of smart
            </h2>
        </div>
    </div>
  )
}

export default Descripcion
