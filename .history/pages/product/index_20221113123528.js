import Link from 'next/link'
import React from 'react'

const productList = () => {
  return (
    <>
      <Link href="/">
        <h1>Home</h1>
      </Link>
      <h2>
        <Link href="/product/1">
          <a>Product 1</a>
        </Link>
      </h2>
          <h2>
        <Link href="/product/2">
          <a>Product 2</a>
        </Link>
      </h2>
      
    </>
  )
}

export default productList
