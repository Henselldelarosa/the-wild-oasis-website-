import Navigation from './components/Navigation'

export const metadata = {
  title: 'The Wild Oasis',
  // description: 'Welcome to the Wild Oasis',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
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
