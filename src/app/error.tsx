"use client"

import Image from "next/image"


export default function GlobalError ({reset}: ErrorPageProps) {
    return (
        <main className="text-white ">
            <h1 className="text-center mt-24">Ha Ocurrido un Error</h1>
            <Image 
            src="/images/error.png" 
            width={500} 
            height={500} 
            alt="Error" 
            className="text-center mx-auto"
            />

            <p className="text-center">Al parecer a ocurrido un error, pero no te sientas mal 
            <br /> <button className="text-black mx-auto bg-green-500
            rounded-2xl p-4 font-bold mt-5" onClick={reset}>Volver a intentar</button>
            </p>
            
        </main>
    )
}