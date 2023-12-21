import Image from 'next/image'
import Header from './componentes/Header'
import Hero from './componentes/Hero'
import Descripcion from './componentes/Descripcion'
import MainProducts from './componentes/MainProducts'

export default function Home() {
  return (
    <div className='h-[1000px]'>
    <Hero />
    <Descripcion />
    <MainProducts />
    </div>
  )
}
