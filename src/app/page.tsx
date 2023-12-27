import Image from 'next/image'

import Descripcion from './componentes/Descripcion'
import MainProducts from './componentes/MainProducts'
import Inicio from './componentes/Inicio'

export default function Home() {
  return (
    <div className='h-[1000px]'>
    <Inicio />
    <Descripcion />
    <MainProducts />
    </div>
  )
}
