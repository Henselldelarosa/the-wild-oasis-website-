import React from 'react'
import Link from 'next/link'
import Counter from '../_components/Counter'
const  Page = async () => {
  const res = await fetch('http://jsonplaceholder.typicode.com/users')

  const data = await res.json()

  console.log(data)

  return (
    <div>
      <h1>Cabins</h1>

    <ul>
      {data.map((user) => (
      <li key={user.id}>{user.name}</li>
      ))}
      </ul>

      <Counter users={data} />
    </div>
  )
}

export default Page
