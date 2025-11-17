import Navigation from './_components/Navigation'
import Logo from './_components/Logo'
import './_styles/globals.css'
export const metadata = {
  title: 'The Wild Oasis',
  // description: 'Welcome to the Wild Oasis',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-primary-950 text-primary-100 min-h-screen' >
        <header>
          <Logo />
          <Navigation />
        </header>

        <main>
          {children}
        </main>

        <footer>
          <p>Copyright 2025 The Wild Oasis</p>
        </footer>
      </body>
    </html>
  )
}
