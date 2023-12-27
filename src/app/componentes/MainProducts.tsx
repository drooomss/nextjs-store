import Image from 'next/image'
import React from 'react'
import { getProduct } from '../services/shopify'

const MainProducts = async () => {
  const products = await getProduct()
  
  return (
    <div className='text-center mt-10'>
      <h1 className='text-green-500 text-5xl'>Nuevos Productos</h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-8'>
        {products?.map((product: { id: any; title: any; images: any }) => {
          const { id, title, images } = product;
          const imageSrc = images[0]?.src;
          return (
            <div key={id} className='bg-green-700 p-4 rounded-lg'>
              <Image
                src={imageSrc}
                width={300}
                height={400}
                alt={title}
                loading='eager'
                className='rounded-md mx-auto'
              />

              <p className='text-white mt-4 text-lg font-semibold'>{title}</p>
              
            </div>
            )
          })}
        </div>
      </div>
   
  )
}


export default MainProducts
