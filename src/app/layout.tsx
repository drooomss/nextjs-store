import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Header from './componentes/Header'



const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
})
export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`bg-black ${poppins.className}`}>
      <Header />
        {children}
        
        </body>
    </html>
  )
}
