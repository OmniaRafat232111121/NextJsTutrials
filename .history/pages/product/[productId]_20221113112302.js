import React from 'react'
import { useRouter } from 'next/router'
const productDetail = () => {
    const router = useRouter();
    const productId = router.query.productId;

  return (
    <div>
      <h1>Product Details of product</h1>
    </div>
  )
}

export default productDetail
