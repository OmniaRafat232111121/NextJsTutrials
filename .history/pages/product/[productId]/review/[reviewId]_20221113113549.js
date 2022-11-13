import React from 'react'
import { useRouter } from 'next/router'
const productDetail = () => {
    const router = useRouter();

    const {productId,reviewId} = router.query;

  return (
    <div>
          <h1>Product Details of product number {productId} is {re</h1>
    </div>
  )
}

export default productDetail
