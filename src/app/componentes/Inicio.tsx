import React from 'react'
import Link from 'next/link'



const Inicio = () => {
  return (
    <div className="relative w-full overflow-hidden ">
  {/* Video y contenido de texto superpuesto */}
  <div className="bg-black h-[800px] relative">
    <video className="w-full h-full rounded-md object-cover" src="/images/Diseño sin título.mp4" controls autoPlay loop muted></video>
    {/* Overlay para oscurecer el video */}
    <div className="absolute inset-0 bg-black opacity-50"></div>
    {/* Texto superpuesto */}
    <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
      <div className="text-center">
        <h1 className="text-green-500 font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl mt-8 md:mt-12 lg:mt-16">
          ROPA Y CALZADO <br /> AL POR MAYOR
        </h1>
      </div>
      <div className="text-white text-center mt-4">
        <p className="font-semibold text-lg md:text-2xl lg:text-3xl">
          Ofrecemos una amplia selección de ropa <br /> y calzado de alta calidad a precios <br /> irresistibles.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 mt-6 items-center justify-center">
        <Link href="/products">
          Comprar
        </Link>
        <button >
          Calidad Comprobada &rarr;
        </button>
      </div>
    </div>
  </div>
</div>

  )
}

export default Inicio

