import { useRouter } from 'next/router';
import React from 'react'

const ReviewInst = () => {
    const router = useRouter();
    const {questionId,reviewId}=router.query
  return (
    <div>
      
    </div>
  )
}

export default ReviewInst;
