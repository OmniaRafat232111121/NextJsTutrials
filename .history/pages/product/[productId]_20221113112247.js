import React from 'react'
import { useRouter } from 'next/router'
const productDetail = () => {
    const router = useRouter();
    const productId = router.query.productId;
    
  return (
    <div>
      
    </div>
  )
}

export default productDetail
