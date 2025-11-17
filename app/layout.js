import Navigation from './_components/Navigation'
import Logo from './_components/Logo'
import './_styles/globals.css'
import {Josefin_Sans} from 'next/font/google'
import Header from './_components/Header'

const josefin = Josefin_Sans({
  subsets: ['latin'],
  variable: 'swap',
})


export const metadata = {
  title: 'The Wild Oasis',
  // description: 'Welcome to the Wild Oasis',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${josefin.className} antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col`} >

        <Header />

      <div className="flex-1 px-8 py-12" >
        <main className="max-w-7xl mx-auto ">
          {children}
        </main>
      </div>


      </body>
    </html>
  )
}
