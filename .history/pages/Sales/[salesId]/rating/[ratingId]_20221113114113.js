import { useRouter } from 'next/router';
import React from 'react'

const salesDetails = () => {
    const router = useRouter();

    const { salesId, ratingId } = router.query;
  return (
    <div>
      <h1>Sales person of </h1>
    </div>
  )
}

export default salesDetails;
