import Link from 'next/link'
import React from 'react'

const productList = () => {
  return (
    <>
      <Link href="/">
        <h1>Home</h1>
      </Link>
      <h2>
        <Link>
          <a>Product 1</a>
        </Link>
      </h2>
          <h2>Product2</h2>
          <h2>product3</h2>
      
    </>
  )
}

export default productList
