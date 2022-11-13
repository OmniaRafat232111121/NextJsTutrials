import React from 'react'
import { useRouter } from 'next/router'
const productDetail = () => {
    const router = useRouter();
    const productId = router.query.productId;

  return (
    <div>
      <h1>Product De</h1>
    </div>
  )
}

export default productDetail
