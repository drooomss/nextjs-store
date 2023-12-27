"use client"
import Image from 'next/image'
import React from 'react'
import { useState } from 'react'


const Descripcion = () => {

    const [hasBorder, setBorder] = useState(false)
    const handleClick = () => setBorder(!hasBorder)
    console.log(hasBorder)

  return (
    <div className='w-[600px] h-auto mx-auto grid grid-cols-2 m-20'>

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
                Bienvenido al futuro 
            </h1>

            <h2 className='text-white ml-5 mt-5'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nisi labore rem dolore fuga, atque facilis vitae voluptates quia illum recusandae veniam vel aut, eveniet ipsa quisquam expedita! Minima, fugit
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima officia sunt, eius magni vel aperiam. 
            </h2>
        </div>
    </div>
  )
}

export default Descripcion
