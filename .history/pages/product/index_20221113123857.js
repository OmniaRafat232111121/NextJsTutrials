import Link from 'next/link'
import React from 'react'

const productList = ({productId=20}) => {
  return (
    <>
      <Link href="/">
        <h1>Home</h1>
      </Link>
      <h2>
        <Link href="/product/1">
          <h1>Product 1</h1>
        </Link>
      </h2>
          <h2>
        <Link href="/product/2">
          <h1>Product 2</h1>
        </Link>
      </h2>
                <h2>
        <Link href="/product/3">
          <h1>Product 3</h1>
        </Link>
      </h2>
             <h2>
        <Link href={`/product/${productId}`}>
          <h1>Product 4</h1>
        </Link>
      </h2>
      
      
    </>
  )
}

export default productList
