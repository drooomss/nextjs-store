import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='bg-black w-full h-20 '>
        <div className='flex mx-auto text-center justify-center gap-10'>
          <Link href='/' className='text-3xl  text-center mt-5 text-white lin'>
            <p>Home</p>
          </Link>
          <Link href='/store' className='text-3xl text-center mt-5 text-white'>
            <p>Tienda</p>
          </Link>
        </div>
    </div>
  )
}

export default Header
