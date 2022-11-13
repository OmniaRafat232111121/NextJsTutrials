import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <div>
          <h1>Home Page</h1>
          <Link href="/blog">
            <h>Blog</h>
          </Link>
    </div>
  )
}

export default Home
