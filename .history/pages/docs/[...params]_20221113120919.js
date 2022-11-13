import React from 'react';
import { useRouter } from 'next/router';
const Docs = () => {
    const router = useRouter();
    const { params = [] } = router.query;
    
    if (params.length === 2) {
        return (
            <h1>Viewing Docs for features {params[0]} and feature of {params[1]}</h1>
        )
    }
        else if(params / length === 1){
            return (
                <h1>Viewing Docs for features {params[0]}</h1>
            )
        }
   
  return (
    <div>
      <h1>Docs HomePage</h1>
    </div>
  )
}

export default Docs
