import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <div>
          <h1>Home Page</h1>
          <Link href="/blo">
            <a>Blog</a>
          </Link>
    </div>
  )
}

export default Home
