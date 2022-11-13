import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <div>
          <h1>Home Page</h1>
          <Link href="/blog">
            <h1>Blog</h1>
      </Link>
      
      <Link href="/bl">
            <h1>Product</h1>
          </Link>
      

      

    </div>
  )
}

export default Home
