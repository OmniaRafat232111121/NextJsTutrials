import { useRouter } from 'next/router';
import React from 'react'

const ReviewInst = () => {
    const router = useRouter();
    const { questionId, reviewId } = router.query;
  return (
    <div>
      <h1>Th</h1>
    </div>
  )
}

export default ReviewInst;
