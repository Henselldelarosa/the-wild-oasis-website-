import React from 'react'
import Link from 'next/link'
import Navigation from './_components/Navigation'
const Page = () => {
  return (
  <div>
      <h1>The Wild Oasis. Welcome to paradise.</h1>

      <Link href="/cabins">Explore Luxury Cabins</Link>
  </div>
  )
}

export default Page
