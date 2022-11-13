import React from 'react';
import { useRouter } from 'next/router';
const Docs = () => {
    const router = useRouter();
    const { params } = router.query;
    console.log(par)
  return (
    <div>
      <h1>Docs HomePage</h1>
    </div>
  )
}

export default Docs
